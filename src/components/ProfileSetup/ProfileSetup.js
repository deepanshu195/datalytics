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
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container justify="center" spacing={5}>
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
              style={{ position: "relative", top: "15%" }}
            >
              <Grid item xs={4}>
                <Paper style={{ padding: 15 }}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">
                      Your Role
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      className={classes.selectEmpty}
                      value={props.jobDetail.role}
                      onChange={(event) =>
                        props.handleJobDetailChange({
                          type: "role",
                          value: event.target.value,
                        })
                      }
                    >
                      <MenuItem value={"Developer"}>Developer</MenuItem>
                      <MenuItem value={"Analyst"}>Analyst</MenuItem>
                      <MenuItem value={"Manager"}>Manager</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">
                      Department
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      className={classes.selectEmpty}
                      value={props.jobDetail.dept}
                      onChange={(event) =>
                        props.handleJobDetailChange({
                          type: "dept",
                          value: event.target.value,
                        })
                      }
                    >
                      <MenuItem value={"Technical"}>Technical</MenuItem>
                      <MenuItem value={"Business"}>Business</MenuItem>
                      <MenuItem value={"Customer"}>Customer</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <p style={{ marginBottom: 0 }}>Data Sources</p>
                    <Button variant="outlined">Add Data Source</Button>
                  </FormControl>
                </Paper>
              </Grid>
              <Grid item xs={8}>
                <img
                  style={{ width: "100%", height: "80%" }}
                  src="https://res.cloudinary.com/dh7kluimp/image/upload/v1614373508/datalytics/aeznl6d1y8daueqnaiti.svg"
                />
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
