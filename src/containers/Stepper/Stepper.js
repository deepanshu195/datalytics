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

  const [stage, setStage] = useState({});

  return (
    <React.Fragment>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={2}>
          <SideStepper />
        </Grid>
        <Grid item xs={10}>
          <GettingStarted />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Stepper;
