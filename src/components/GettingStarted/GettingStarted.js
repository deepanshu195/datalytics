import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, Fab, Typography } from "@material-ui/core";

import classes from "./GettingStarted.module.css";

const useStyles = makeStyles((theme) => ({
  Paper: {
    margin: 10,
  },
  Img: {
    width: "100%",
    height: "80%",
  },
  root: {
    height: "calc(100vh - 80px)",
    padding: "30px",
  },
  button: {
    position: "fixed",
    zIndex: "100",
    top: "85%",
    right: "40px",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function GettingStarted(props) {
  //const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Paper className={classes.root}>
            <Typography variant="h2" className={classes.header}>
              One last thing!
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Feel free to reach out to our support team in case of any
              questions or complaints.
              <br />
              We take our performance seriously.
            </Typography>
            <Grid className={classes.content}>
              <Typography variant="h5">
                <Checkbox
                  size="medium"
                  style={{ zoom: "1.5" }}
                  value={props.enroll}
                  onChange={(event) => props.handleEnrollChange(event)}
                />
                Enroll me for mail notifications.
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.button}>
        <Fab
          variant="extended"
          color="primary"
          aria-label="add"
          disabled={!props.enroll}
        >
          <Typography variant="h5">Start</Typography>
        </Fab>
      </div>
    </React.Fragment>
  );
}

export default GettingStarted;
