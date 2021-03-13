import React from "react";
import classes from "./Footer.module.css";

import Grid from '@material-ui/core/Grid';

import { NavLink } from "react-router-dom";

let footerNavLinks = [
  {
    name:"Get the app",
    link:"/"
  },
  {
    name:"Know us more",
    link:"/"
  },{
    name:"Blog",
    link:"/"
  },{
    name:"Terms",
    link:"/"
  },{
    name:"Support",
    link:"/"
  },{
    name:"Cohorts",
    link:"/"
  },{
    name:"Training",
    link:"/"
  },{
    name:"Privacy",
    link:"/"
  },{
    name:"Affiliates",
    link:"/"
  },{
    name:"Careers",
    link:"/"
  },{
    name:"Featured Courses",
    link:"/"
  },{
    name:"Patents",
    link:"/"
  },{
    name:"Sitemap",
    link:"/"
  },{
    name:"Incubation",
    link:"/"
  },{
    name:"Backend",
    link:"/"
  },{
    name:"Catalyst",
    link:"/"
  },
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
        <Grid item xs={12}  sm={6} md={6} container  spacing={0}    justify={ justify || "flex-start"}>
        <img src={"https://res.cloudinary.com/datalytics/image/upload/v1615459421/Datalytics/footer_logo_oknlpn.svg"} alt={"datalytics logo"} />
        </Grid>
        <Grid item xs={12}  sm={6} md={6} container  spacing={0}    justify={ justify || "flex-end"} alignContent={"center"}>
        2020 Datalytics Pvt. Ltd.
        </Grid>
      </Grid>
      </div>
    </React.Fragment>
  );
};

export default Footer;
