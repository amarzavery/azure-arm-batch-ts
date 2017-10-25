# Microsoft Azure SDK for isomorphic javascript - BatchManagementClient
This project provides an isomorphic javascript package for accessing Azure. Right now it supports:
- node.js version 6.x.x or higher
- browser javascript

## How to Install

- nodejs
```
npm install azure-arm-batch-js
```
- browser
```html
<script type="text/javascript" src="https://raw.githubusercontent.com/Azure/azure-sdk-for-js/master/lib/services/azure-arm-batch-js/batchManagementClientBundle.js"></script>
```

## How to use

### nodejs - Authentication, client creation and get batchAccount as an example written in TypeScript.

```javascript
import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as msRestNodeAuth from "ms-rest-nodeauth";
import { BatchManagementClient, BatchManagementModels, BatchManagementMappers } from "azure-arm-batch-js";
const subscriptionId = process.env["AZURE_SUBSCRIPTION_ID"];

msRestNodeAuth.interactiveLogin().then((creds) => {
  const client = new BatchManagementClient(creds, subscriptionId);
  const resourceGroupName = "testresourceGroupName";
  const accountName = "testaccountName";
  client.batchAccount.get(resourceGroupName, accountName).then((result) => {
    console.log("The result is:");
    console.log(result);
  });
}).catch((err) => {
  console.log('An error ocurred:');
  console.dir(err, {depth: null, colors: true});
});
```

### browser - Authentication, client creation and get batchAccount as an example written in javascript.

- index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Todos</title>
    <script type="text/javascript" src="https://raw.githubusercontent.com/Azure/ms-rest-js/master/msRestBundle.js"></script>
    <script type="text/javascript" src="https://raw.githubusercontent.com/Azure/ms-rest-js/master/msRestAzureBundle.js"></script>
    <script type="text/javascript" src="https://raw.githubusercontent.com/Azure/azure-sdk-for-js/master/lib/services/azure-arm-batch-js/batchManagementClientBundle.js"></script>
    <script type="text/javascript">
      document.write('hello world');
      const subscriptionId = "<Subscription_Id>";
      const token = "<access_token>";
      const creds = new msRest.TokenCredentials(token);
      const client = new BatchManagementClient(creds, undefined, subscriptionId);
      const resourceGroupName = "testresourceGroupName";
      const accountName = "testaccountName";
      client.batchAccount.get(resourceGroupName, accountName).then((result) => {
        console.log("The result is:");
        console.log(result);
      }).catch((err) => {
        console.log('An error ocurred:');
        console.dir(err, { depth: null, colors: true});
      });
    </script>
  </head>
  <body>
  </body>
</html>
```

# Related projects
 - [Microsoft Azure SDK for Javascript](https://github.com/Azure/azure-sdk-for-js)
