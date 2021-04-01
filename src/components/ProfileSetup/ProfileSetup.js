import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles } from "@material-ui/core/styles";
import {
  Fab,
  FormControl,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import classes from "./ProfileSetup.module.css";

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
    bottom: "2%",
    left: "50%",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: "block",
    padding: "5",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    width: "40%",
  },
}));

function ProfileSetup(props) {
  //const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.root}>
            <Typography variant="h3">Customize Your Workflow</Typography>
            <Typography
              style={{ position: "relative", top: "10%" }}
              variant="h6"
            >
              Help us know your job details better so that we can help you have
              a custom workflow that aids to your needs.
            </Typography>
            <Grid
              container
              spacing={2}
              direction="row-reverse"
              style={{ position: "relative", top: "15%" }}
            >
              <Grid item sm={8} xs={12}>
                <img
                  style={{ width: "100%", height: "80%" }}
                  src="https://res.cloudinary.com/dh7kluimp/image/upload/v1614373508/datalytics/aeznl6d1y8daueqnaiti.svg"
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <Paper
                  elevation={3}
                  className={classes.form}
                  style={{
                    backgroundColor: "#f1f1f1",
                  }}
                >
                  <div>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                      style={{
                        backgroundColor: "white",
                      }}
                    >
                      <InputLabel id="role">Your Role</InputLabel>
                      <Select
                        labelId="role"
                        id="role"
                        label="Your Role"
                        value={props.jobDetail.role}
                        onChange={(event) =>
                          props.handleJobDetailChange({
                            type: "role",
                            value: event.target.value,
                          })
                        }
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Analyst</MenuItem>
                        <MenuItem value={20}>Developer</MenuItem>
                        <MenuItem value={30}>Manager</MenuItem>
                      </Select>
                    </FormControl>

                    <p> </p>

                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                      style={{
                        backgroundColor: "white",
                      }}
                    >
                      <InputLabel id="department">Department</InputLabel>
                      <Select
                        labelId="department"
                        id="department"
                        label="Department"
                        value={props.jobDetail.dept}
                        onChange={(event) =>
                          props.handleJobDetailChange({
                            type: "dept",
                            value: event.target.value,
                          })
                        }
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Manager</MenuItem>
                        <MenuItem value={20}>Technical</MenuItem>
                        <MenuItem value={30}>Marketting</MenuItem>
                      </Select>
                    </FormControl>

                    <p></p>

                    <FormControl
                      className={classes.formControl}
                      style={{
                        backgroundColor: "white",
                      }}
                    >
                      <Button variant="outlined">
                        <SearchIcon /> Add Data Source
                      </Button>
                    </FormControl>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.button}>
        <Fab
          variant="extended"
          color="primary"
          aria-label="add"
          onClick={props.nextStage}
          disabled={!props.nextActive}
        >
          Next <ArrowForwardIosIcon />
        </Fab>
      </div>
    </React.Fragment>
  );
}

export default ProfileSetup;
