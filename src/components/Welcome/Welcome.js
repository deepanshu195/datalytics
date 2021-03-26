import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Fab, Typography } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import classes from "./Welcome.module.css";

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
    top: "50%",
    right: "20px",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Welcome(props) {
  //const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container justify="center" spacing={5}>
        <Grid item xs={12}>
          <Paper className={classes.welcome_Item}>
            <Typography variant="h2">Welcome Vidhan!</Typography>
            <Typography variant="h6">
              It's a pleasure working with you. We just have a few questions so
              that we can provide a customized workspace experience to you.
            </Typography>
            <div className={classes.welcome_Img_Div}>
              <img
                className={classes.welcome_Img}
                src="https://res.cloudinary.com/dh7kluimp/image/upload/v1614373508/datalytics/o6gjptsa6e1pl9vhqsww.svg"
              />
            </div>
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.next_Button}>
        <Fab
          variant="extended"
          color="primary"
          aria-label="add"
          onClick={props.nextStage}
        >
          Next <ArrowForwardIosIcon />
        </Fab>
      </div>
    </React.Fragment>
  );
}

export default Welcome;
