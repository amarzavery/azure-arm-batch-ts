/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as operations from "./operations";

const packageName = "azure-arm-batch-js";
const packageVersion = "0.1.0";

class BatchManagementClient extends msRestAzure.AzureServiceClient {

  credentials: msRest.ServiceClientCredentials;

  subscriptionId: string;

  apiVersion: string;

  acceptLanguage: string;

  longRunningOperationRetryTimeout: number;

  generateClientRequestId: boolean;
  baseUri: string;

  // Operation groups
  batchAccount: operations.BatchAccountOperations;
  applicationPackage: operations.ApplicationPackageOperations;
  application: operations.ApplicationOperations;
  location: operations.Location;
  operations: operations.Operations;
  serializer: msRest.Serializer;

  /**
   * @class
   * Initializes a new instance of the BatchManagementClient class.
   * @constructor
   *
   * @param {msRest.ServiceClientCredentials} credentials - Credentials needed for the client to connect to Azure.
   *
   * @param {string} subscriptionId - The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
   * {@link https://github.github.io/fetch/#Request Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
   *
   * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
   *
   * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   *
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, baseUri?: string, options?: msRestAzure.AzureServiceClientOptions) {
    if (credentials === null || credentials === undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }
    if (subscriptionId === null || subscriptionId === undefined) {
      throw new Error('\'subscriptionId\' cannot be null.');
    }

    if (!options) options = {};

    super(credentials, options);

    this.apiVersion = '2017-05-01';
    this.acceptLanguage = 'en-US';
    this.longRunningOperationRetryTimeout = 30;
    this.generateClientRequestId = true;
    this.baseUri = baseUri as string;
    if (!this.baseUri) {
      this.baseUri = 'https://management.azure.com';
    }
    this.credentials = credentials;
    this.subscriptionId = subscriptionId;

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
    if(options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
      this.acceptLanguage = options.acceptLanguage;
    }
    if(options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
      this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
    }
    if(options.generateClientRequestId !== null && options.generateClientRequestId !== undefined) {
      this.generateClientRequestId = options.generateClientRequestId;
    }
    this.batchAccount = new operations.BatchAccountOperations(this);
    this.applicationPackage = new operations.ApplicationPackageOperations(this);
    this.application = new operations.ApplicationOperations(this);
    this.location = new operations.Location(this);
    this.operations = new operations.Operations(this);
    this.serializer = new msRest.Serializer(Mappers);
  }
}

export { BatchManagementClient, Models as BatchManagementModels, Mappers as BatchManagementMappers };
