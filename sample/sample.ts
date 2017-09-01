'use strict';

import * as msRest from 'ms-rest-ts';
import * as msRestAzure from 'ms-rest-azure-ts';
import { BatchManagementClient, BatchManagementModels } from '../lib/batchManagementClient';
const clientOptions: msRestAzure.AzureServiceClientOptions = {
  filters: [new msRest.LogFilter()]
};

const subscriptionId = '00977cdb-163f-435f-9c32-39ec8ae61f4d';
const location = 'westus';
// An easy way to get the token
// 1. Go to this test drive link https://azure.github.io/projects/apis and authenticate by clicking on Authorize. Check the user impersoantion checkbox in the popup.
// 1.1 select a subscription of your choice
// 1.2 select the storage-2015-06-15 option from the first drop down list
// 1.3 expand the url to list storage accounts in a subscription
// 1.4 click on try it out button.
// 1.5 in the curl tab you will see the actual curl request that has the bearer token in it
// 1.6 copy paste that token here. That token is valid for 1 hour
const token = 'token';
const creds = new msRest.TokenCredentials(token);
const client = new BatchManagementClient(creds, subscriptionId, undefined, clientOptions);

client.location.checkNameAvailability(location, "test").then((result: BatchManagementModels.CheckNameAvailabilityResult) => {
  console.log(result);
  document.writeln(JSON.stringify(result));
}).catch((err: any) => {
  console.log(err);
  document.writeln(JSON.stringify(err));
});