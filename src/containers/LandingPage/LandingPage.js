import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import Modal from "@material-ui/core/Modal";
import SignIn from "../../components/Header/Signin/Signin";
import { makeStyles } from "@material-ui/core";
import axios from "../../axios/axios_local";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    background: "#67b26f",
    background: `-webkit-linear-gradient(
    to right,
    #4ca2cd,
    #67b26f
    )`,
    background: `linear-gradient(
    to right,
    #4ca2cd,
    #67b26f
    )`,
    top: "30%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
}));

const LandingPage = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const googleHandler = (response) => {
    console.log(response);
  };

  const googleErr = (response) => console.error(response);

  const githubHandler = (response) => {
    console.log(response);
    axios.get("/code/" + response.code).then((res) => console.log(res));
  };

  const githubErr = (response) => console.error(response);

  const body = (
    <div className={classes.paper}>
      <h2
        id="simple-modal-title"
        style={{ textAlign: "centre", color: "whitesmoke" }}
      >
        Sign In
      </h2>
      <div id="simple-modal-description">
        <SignIn
          googleHandler={googleHandler}
          githubHandler={githubHandler}
          googleErr={googleErr}
          githubErr={githubErr}
        />
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <Header handleOpen={handleOpen} />
      <Main />
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
