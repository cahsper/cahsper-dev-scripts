require('dotenv').config();

const {
  CognitoIdentityProviderClient,
  AdminSetUserPasswordCommand,
} = require("@aws-sdk/client-cognito-identity-provider")

const region = process.env.REGION;
const client = new CognitoIdentityProviderClient({ region: region });

const command = new AdminSetUserPasswordCommand({
  UserPoolId: process.env.CAHSPER_USER_POOL_ID,
  Username: process.argv[2],
  Password: process.argv[3],
});

client.send(command).then((response) => {
  console.log(response);
}).catch((e) => {
  console.log(e);
});
