# Cahsper-dev-scripts

Scripts for cahsper.

## Setup

```sh
$ npm install
```

## Create User (AdminCreateUser API)

Create user on Cognito with AdminCreateUser API.

> [AWS: AdminCreateUser](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminCreateUser.html)
### example

```
$ node ./src/createUser.js example-user

{
  '$metadata': {
    httpStatusCode: 200,
    requestId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    ...
  },
  User: {
    Attributes: [ [Object] ],
    Enabled: true,
    UserCreateDate: 2021-04-15T16:27:09.450Z,
    UserLastModifiedDate: 2021-04-15T16:27:09.450Z,
    UserStatus: 'FORCE_CHANGE_PASSWORD',
    Username: 'example-user'
  }
}
```
