import React, { useState } from "react";

import SideStepper from "../../components/SideStepper/SideStepper";
import Welcome from "../../components/Welcome/Welcome";
import GettingStarted from "../../components/GettingStarted/GettingStarted";
import ProfileSetup from "../../components/ProfileSetup/ProfileSetup";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height: "100vh",
  },
}));

const Stepper = (props) => {
  const classes = useStyles();

  // State

  // Side Stepper
  const [stage, setStage] = useState(0);

  // Profile Setup
  const [profileActive, setProfileActive] = useState(false);
  const [jobDetail, setJobDetail] = useState({
    role: "",
    dept: "",
  });

  const nextStageHandler = () => {
    setStage(stage + 1);
  };

  const checkProfieActive = (detailObj) => {
    let profileActive = true;
    Object.keys(detailObj).map((key) => {
      if (typeof detailObj[key] === "string" && detailObj[key] === "")
        profileActive = false;
    });
    return profileActive;
  };

  const jobDetailChangeHandler = (detailObj) => {
    const newJobDetail = {
      ...jobDetail,
      [detailObj.type]: detailObj.value,
    };
    setJobDetail(newJobDetail);
    setProfileActive(checkProfieActive(newJobDetail));
  };

  // Getting Started
  const [enroll, setEnroll] = useState(false);

  const enrollChangeHandler = (event) => {
    setEnroll(event.target.checked);
  };

  let mainContent = null;
  switch (stage) {
    case 0:
      mainContent = <Welcome nextStage={nextStageHandler} />;
      break;
    case 1:
      mainContent = (
        <ProfileSetup
          nextStage={nextStageHandler}
          jobDetail={jobDetail}
          handleJobDetailChange={jobDetailChangeHandler}
          nextActive={profileActive}
        />
      );
      break;
    case 2:
      mainContent = (
        <GettingStarted
          enroll={enroll}
          handleEnrollChange={enrollChangeHandler}
        />
      );
      break;
    default:
      mainContent = null;
  }

  return (
    <React.Fragment>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={2}>
          <SideStepper stage={stage} />
        </Grid>
        <Grid item xs={10}>
          {mainContent}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Stepper;
