import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
    },
  },
  paper: {
    padding: theme.spacing(0),
    // textAlign: "center",
    color: "white",
    background: "inherit",
    // minWidth:"150px"
  },
  button: {
    background: "#FFF",
    border: "1px solid #25313c",

    // "&:hover": {
    //   backgroundColor: "#25313C",
    //   color: "white",
    // },
    "&:hover > span": {
      backgroundColor: "#25313C",
      color: "white",
    },
    fontSize: "20px",
    lineHeight: "20px",
    padding: "5px 9px",
    fontFamily: "Montserrat",
    margin: "0px",
    minWidth: "80px",
  },
}));

const Header = () => {
  const materialUiClasses = useStyles();
  let windowWidth = window.innerWidth;
  let justifyItems = "flex-start";
  let justifyLogo = "flex-start";
  let displayBlock = "";
  if (windowWidth < 960) {
    justifyItems = "center";
    displayBlock = "none";
  }
  if (windowWidth < 600) {
    justifyLogo = "center";
  }
  return (
    <div className={`${materialUiClasses.root} ${classes.header}`}>
      <Grid container spacing={1}>
        <Grid xs={12} sm={2} md={4} lg={5} justify={justifyLogo} container>
          <Paper className={`${materialUiClasses.paper} ${classes.boxShadow}`}>
            <a href="/">
              <img
                src={
                  "https://res.cloudinary.com/datalytics/image/upload/v1621763859/Datalytics/datalytics_logo_a5fnqs.svg"
                }
                alt={"logo"}
                className={classes.header_logo}
                // style={{ height: "89px" }}
              ></img>
            </a>
          </Paper>
        </Grid>
        <Grid container xs={12} sm={10} md={8} lg={7}>
          <Grid
            container
            item
            // xs={6}
            sm={0}
            md={2}
            lg={2}
            justify={justifyItems}
            alignItems={"center"}
            style={{ display: displayBlock }}
          >
            {/* empty space */}
          </Grid>
          <Grid
            container
            item
            xs={6}
            sm={4}
            md={2}
            lg={2}
            justify={justifyItems}
            alignItems={"center"}
          >
            <Paper
              className={`${materialUiClasses.paper} ${classes.boxShadow}`}
            >
              <NavLink to={"/"} className={`${classes.navlinks}`}>
                Demo
              </NavLink>
            </Paper>
          </Grid>
          <Grid
            container
            item
            xs={6}
            sm={4}
            md={2}
            lg={2}
            justify={justifyItems}
            alignItems={"center"}
          >
            <Paper
              className={`${materialUiClasses.paper} ${classes.boxShadow}`}
            >
              <NavLink to={"/"} className={`${classes.navlinks}`}>
                Solutions
              </NavLink>
            </Paper>
          </Grid>
          <Grid
            container
            item
            xs={6}
            sm={4}
            md={2}
            lg={2}
            justify={justifyItems}
            alignItems={"center"}
          >
            <Paper
              className={`${materialUiClasses.paper} ${classes.boxShadow}`}
            >
              <NavLink to={"/"} className={`${classes.navlinks}`}>
                Pricing
              </NavLink>
            </Paper>
          </Grid>
          <Grid
            container
            item
            xs={6}
            sm={4}
            md={2}
            lg={2}
            justify={justifyItems}
            alignItems={"center"}
          >
            <Paper
              className={`${materialUiClasses.paper} ${classes.boxShadow}`}
            >
              <NavLink to={"/"} className={`${classes.navlinks}`}>
                Services
              </NavLink>
            </Paper>
          </Grid>
          <Grid
            container
            item
            xs={6}
            sm={4}
            md={2}
            lg={2}
            justify={justifyItems}
            alignItems={"center"}
          >
            <Paper
              className={`${materialUiClasses.paper} ${classes.boxShadow}`}
            >
              <Button
                className={`${materialUiClasses.button} ${classes.decoration}`}
                // variant="outlined"
              >
                <NavLink
                  to={`/login`}
                  draggable={false}
                  className={`${materialUiClasses.button} ${classes.decoration}`}
                >
                  Sign In
                </NavLink>
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
