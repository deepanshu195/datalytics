import React, { useEffect } from "react";
import labelConstants from "../../constants/Stage";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

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
  const classes = useStyles();

  return (
    <Grid container justify="center" direction="column" spacing={2}>
      <Grid item xs={12}>
        <Paper className={classes.Paper}>
          <img
            src="https://res.cloudinary.com/dh7kluimp/image/upload/v1614373564/datalytics/gsit48yxcuuvlxwkvbng.svg"
            className={classes.Img}
          />
        </Paper>
      </Grid>
      <Typography style={{ textAlign: "center" }} variant="h5">
        Setting Up Your Workspace
      </Typography>
      <Grid container justify="center" direction="column" spacing={1}>
        {Object.keys(labelConstants).map((key, index) => {
          return (
            <Grid key={key} item xs={12}>
              <Paper
                style={{
                  height: 50,
                  backgroundColor:
                    index < props.stage ? "lightblue" : "whitesmoke",
                  textAlign: "center",
                  verticalAlign: "middle",
                  position: "relative",
                  top: "50%",
                  padding: "0 20",
                }}
                className={classes.Paper}
              >
                {labelConstants[key]}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default SideStepper;
