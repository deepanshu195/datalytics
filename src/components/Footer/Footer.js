import React from "react";
import classes from "./Footer.module.css";

import Grid from "@material-ui/core/Grid";

import { NavLink } from "react-router-dom";
import { Typography } from "@material-ui/core";

let footerNavLinks = [
  {
    name: "Datalytics",
    link: "/",
    description: [
      { name: "Home", link: "" },
      { name: "Demo", link: "" },
      { name: "Pricing", link: "" },
      { name: "Solution", link: "" },
      { name: "Services", link: "" },
    ],
    sm: 2,
  },
  {
    name: "About us",
    link: "/",
    description: [
      { name: "Company", link: "" },
      { name: "Leadership", link: "" },
      { name: "Customers", link: "" },
      { name: "Sitemap", link: "" },
      { name: "Careers", link: "" },
    ],
    sm: 2,
  },
  {
    name: "Services",
    link: "/",
    description: [
      { name: "Presentation Automation", link: "" },
      { name: "Analytical Services", link: "" },
      { name: "Chatbot Assistance", link: "" },
      { name: "Report Generation", link: "" },
    ],
    sm: 3,
  },
  {
    name: "Resource",
    link: "/",
    description: [
      { name: "Technologies", link: "" },
      { name: "Guide", link: "" },
      { name: "Support", link: "" },
      { name: "Blogs", link: "" },
    ],
    sm: 2,
  },
  {
    name: "Learn",
    link: "/",
    description: [
      { name: "Documentation", link: "" },
      { name: "Guide", link: "" },
      { name: "Support", link: "" },
      { name: "Blogs", link: "" },
    ],
    sm: 2,
  },
];

const Footer = () => {
  let justify;
  let copyrightJustify;
  if (window.innerWidth < 960) {
    justify = "center";
    copyrightJustify = "center";
  }
  if (window.innerWidth < 550) {
    justify = "flex-start";
  }

  return (
    <React.Fragment>
      <div className={`${classes.tilted}`}>
        <Grid
          container
          style={{
            maxWidth: "1200px",
            margin: "auto",
            justifyContent: "space-between",
          }}
        >
          {footerNavLinks.map((val, index) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={val.sm}
              container
              spacing={0}
              key={"footer_landing_page" + index}
              justify={"center"}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                textAlign: justify,
              }}
            >
              <Typography component={"div"} style={{ height: "40px" }}>
                <NavLink
                  to={val.link}
                  draggable={false}
                  className={` ${classes.decoration} ${classes.main_decoration}`}
                >
                  {val.name}
                </NavLink>
              </Typography>
              <Typography component={"div"}>
                {window.innerWidth > 960
                  ? val.description.map((innerLinks) => (
                      <Typography component={"div"}>
                        <NavLink
                          to={innerLinks.link}
                          draggable={false}
                          className={` ${classes.decoration} ${classes.inner_decoration}`}
                        >
                          {innerLinks.name}
                        </NavLink>
                      </Typography>
                    ))
                  : ""}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <div className={classes.footer_logo_box}>
          <Grid
            container
            spacing={5}
            style={{ width: "100%", padding: "10px 0px" }}
          >
            <Grid
              item
              xs={12}
              sm={4}
              md={5}
              style={{ width: "100%" }}
              container
              justify={justify || "flex-start"}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              container
              justify={copyrightJustify || "flex-start"}
              alignContent={"center"}
            >
              &copy; 2020 Datalytics Technologies Pvt. Ltd.
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
