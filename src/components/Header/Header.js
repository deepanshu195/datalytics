import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import classes from  "./Header.module.css";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),       
    },
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button:{
    background:"#25313C",
    color:"white",
    '&:hover': {
      backgroundColor: "#25313C",
      color: '#FFF'
    },
    // padding:"10px 26px",
    fontSize:"22px",
    lineHeight:"30px",
    padding:"5px 10px",
    fontWeight:"bold",
    fontFamily:"Montserrat",
    margin:"0px"
  },
 
}));

const Header = () => {
  const materialUiClasses = useStyles();
  let windowWidth = window.innerWidth;
  let justifyItems ="flex-end";
  console.log(windowWidth)
  if(windowWidth<960){
    justifyItems="center";
  }
  return (
    <div className={`${materialUiClasses.root} ${classes.header}`}>
      
  <Grid container spacing={1}>
  <Grid item xs={12}  sm={12} md={4}>
          <Paper className={`${materialUiClasses.paper} ${classes.boxShadow}`}>
      <img src={"https://res.cloudinary.com/datalytics/image/upload/v1615459421/Datalytics/logo_tljs0z.svg"} alt={"logo"}></img>
      </Paper>
      </Grid>
        <Grid container  item xs={6} sm={3}   md={2} justify={justifyItems} alignItems={"center"}>
          <Paper className={`${materialUiClasses.paper} ${classes.boxShadow}`}>
          <NavLink to={"/"} className={`${classes.navlinks}`}>
        Services
          </NavLink>
  
          </Paper>
        </Grid>
        <Grid container  item xs={6} sm={3}   md={2} justify={justifyItems} alignItems={"center"}>
          <Paper className={`${materialUiClasses.paper} ${classes.boxShadow}`}>
          <NavLink to={"/"} className={`${classes.navlinks}`}>
        Tehnologies
          </NavLink>
          </Paper>
        </Grid>
        <Grid container  item xs={6} sm={3}   md={2} justify={justifyItems} alignItems={"center"}>
          <Paper className={`${materialUiClasses.paper} ${classes.boxShadow}`}>
          <NavLink to={"/"} className={`${classes.navlinks}`}> 
        Newsletter
          </NavLink>
          </Paper>
        </Grid>
        <Grid container  item xs={6} sm={3}   md={2} justify={justifyItems} alignItems={"center"}>
          <Paper className={`${materialUiClasses.paper} ${classes.boxShadow}`}>
              <Button className={`${materialUiClasses.button} ${classes.decoration}`}  variant="contained" >
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
  </div>
  );
};

export default Header;
