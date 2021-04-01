import React from "react";
import classes from "./Footer.module.css";

import Grid from '@material-ui/core/Grid';

import { NavLink } from "react-router-dom";

let footerNavLinks = [
  {
    name:"About us",
    link:"/"
  },
  {
    name:"Documentation",
    link:"/"
  },{
    name:"Services",
    link:"/"
  },{
    name:"Technologies",
    link:"/"
  },{
    name:"Blogs",
    link:"/"
  },{
    name:"Careers",
    link:"/"
  },{
    name:"Contact Us",
    link:"/"
  },{
    name:"Sitemap",
    link:"/"
  }
]

const Footer = () => {
  let justify;
  if(window.innerWidth < 960 ){
    justify="center"
  }
  return (
    <React.Fragment>
      <div className={` ${classes.footer}`}>
         <Grid container spacing={5} className={`${classes.tilted}`} style={{margin:"unset",width:"100vw"}}>           
        {footerNavLinks.map((val,index)=>
          <Grid item xs={12}  sm={4} md={3} container  spacing={0}  key={"footer_landing_page"+index}  justify={"center"}> 
           
              <NavLink
                to={val.link}
                draggable={false}
                className={` ${classes.decoration} `}
              >
                {val.name}
            </NavLink>
      </Grid>
      )}
      </Grid>
      </div>  
      <div className={classes.footer_logo_box}> 
      <Grid  container spacing={5}  >
        <Grid item xs={12}  sm={5} md={5} container  spacing={0}    justify={ justify || "flex-start"}>
        {/* <img src={"https://res.cloudinary.com/datalytics/image/upload/v1615459421/Datalytics/logo_tljs0z.svg"} alt={"datalytics logo"}  style={{height:"100px"}}/> */}
        </Grid>
        <Grid item xs={12}  sm={6} md={6} container  spacing={0}    justify={ justify || "flex-start"} alignContent={"center"}>
        &copy; 2020  Datalytics Technologies Pvt. Ltd.
        </Grid>
      </Grid>
      </div>
    </React.Fragment>
  );
};

export default Footer;
