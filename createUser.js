require('dotenv').config();

const {
  CognitoIdentityProviderClient,
  AdminCreateUserCommand,
} = require("@aws-sdk/client-cognito-identity-provider")

const region = process.env.REGION;
const client = new CognitoIdentityProviderClient({ region: region });

const command = new AdminCreateUserCommand({
  UserPoolId: process.env.CAHSPER_USER_POOL_ID,
  Username: process.argv[2]
});

client.send(command).then((response) => {
  console.log(response);
}).catch((e) => {
  console.log(e);
});
