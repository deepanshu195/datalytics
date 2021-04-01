import React from "react";
import GoogleLogin from "react-google-login";
import GitHubLogin from "react-github-login";
import {
  GoogleLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";
import classes from "./Signin.module.css";

const GoogleClient_ID =
  "741279870944-n5ajq9vp9ego8nnrl8lpt4ovbhuc83va.apps.googleusercontent.com";

const GithubClient_ID = "f83a147b4078334aac1b";
const Github_Client_Secret = "4b1630c24767e92b9f7be431c23c0d6b6f51854c";

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
