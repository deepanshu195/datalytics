import React from "react";
import GoogleLogin from "react-google-login";
import GitHubLogin from "react-github-login";
import {
  GoogleLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";
import classes from "./Signin.module.css";
import config from "../../../config";

const GoogleClient_ID = config.google_Cred.Client_ID;
const GithubClient_ID = config.github_Cred.Client_ID;
const Github_Client_Secret = config.github_Cred.Client_Secret;

const Signin = (props) => {
  return (
    <div className={classes.Signin_Content} id="simple-modal-description">
      <div className={classes.Google_btn}>
        <GoogleLogin
          clientId={GoogleClient_ID}
          buttonText="Login With Google"
          render={(renderProps) => (
            <GoogleLoginButton
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Login From Google
            </GoogleLoginButton>
          )}
          onSuccess={props.googleHandler}
          onFailure={props.googleErr}
          cookiePolicy={"single_host_origin"}
        />
      </div>

      <div className={classes.Github_btn}>
        <GitHubLogin
          clientId={GithubClient_ID}
          client_secret={Github_Client_Secret}
          redirectUri=""
          onSuccess={props.githubHandler}
          onFailure={props.githubErr}
          className={classes.Github}
        >
          <GithubLoginButton />
        </GitHubLogin>
      </div>
    </div>
  );
};

export default Signin;
