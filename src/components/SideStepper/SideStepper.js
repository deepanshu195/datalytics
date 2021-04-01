import React from "react";
import labelConstants from "../../constants/Stage";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import classes from "./SideStepper.module.css";

const useStyles = makeStyles((theme) => ({
  Paper: {
    margin: 10,
  },
  Img: {
    width: "100%",
  },
  root: {
    height: "100vh",
  },
}));

function SideStepper(props) {
  //const classes = useStyles();

  return (
    <>
      <div className={classes.sideStepper}>
        <Grid container justify="center" direction="column" spacing={2}>
          <Grid item xs={12}>
            <img
              src="https://res.cloudinary.com/datalytics/image/upload/v1615459421/Datalytics/footer_logo_oknlpn.svg"
              className={classes.Img}
            />
          </Grid>
          <Typography style={{ textAlign: "center" }} variant="h6">
            Setting Up Your Workspace
          </Typography>
          <Grid container justify="center" direction="column" spacing={1}>
            {Object.keys(labelConstants).map((key, index) => {
              return (
                <Grid key={key} item xs={12}>
                  <div
                    style={{
                      backgroundColor:
                        index < props.stage
                          ? "rgba(7, 198, 210, 0.1)"
                          : "whitesmoke",
                      borderRadius:
                        index === 0
                          ? "15px 15px 0px 0px"
                          : index === 2
                          ? "0px 0px 15px 15px"
                          : "0px 0px 0px 0px",
                      border: "2px solid #F1F1F1",
                      borderStyle: "outset",
                    }}
                    square={"true"}
                    className={classes.paper_Status}
                  >
                    <div style={{ position: "relative", top: "30%" }}>
                      {labelConstants[key]}
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </div>

      <div className={classes.topStepper}>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={12}>
            <Grid container style={{ height: "100px" }}>
              <Grid item xs={3}>
                <img
                  src="https://res.cloudinary.com/datalytics/image/upload/v1615459421/Datalytics/footer_logo_oknlpn.svg"
                  className={classes.Img}
                />
              </Grid>
              <Grid item xs={9}>
                <Typography className={classes.Typo_Style} variant="h4">
                  Setting Up Your Workspace
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Stepper activeStep={props.stage}>
              {Object.keys(labelConstants).map((label, index) => {
                return (
                  <Step key={index}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default SideStepper;
