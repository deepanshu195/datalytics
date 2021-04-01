const dev = {
  google_Cred: {
    Client_ID:
      "741279870944-n5ajq9vp9ego8nnrl8lpt4ovbhuc83va.apps.googleusercontent.com",
  },
  github_Cred: {
    Client_ID: "f83a147b4078334aac1b",
    Client_Secret: "4b1630c24767e92b9f7be431c23c0d6b6f51854c",
  },
};

const prod = {
  //   s3: {
  //     BUCKET: "YOUR_PROD_S3_UPLOADS_BUCKET_NAME",
  //   },
  //   apiGateway: {
  //     REGION: "YOUR_PROD_API_GATEWAY_REGION",
  //     URL: "YOUR_PROD_API_GATEWAY_URL",
  //   },
  //   cognito: {
  //     REGION: "YOUR_PROD_COGNITO_REGION",
  //     USER_POOL_ID: "YOUR_PROD_COGNITO_USER_POOL_ID",
  //     APP_CLIENT_ID: "YOUR_PROD_COGNITO_APP_CLIENT_ID",
  //     IDENTITY_POOL_ID: "YOUR_PROD_IDENTITY_POOL_ID",
  //   },
};

const config = process.env.REACT_APP_STAGE === "production" ? prod : dev;

export default {
  // Add common config values here
  ...config,
};
