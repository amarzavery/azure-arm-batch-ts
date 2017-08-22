import * as msRest from "ms-rest-ts";
import * as Models from "../models";
import { BatchManagementClient } from '../batchManagementClient';
/** Class representing a ApplicationOperations. */
export declare class ApplicationOperations {
    private readonly client;
    /**
     * Create a ApplicationOperations.
     * @param {BatchManagementClient} client Reference to the service client.
     */
    constructor(client: BatchManagementClient);
    /**
     * Adds an application to the specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {string} applicationId The ID of the application.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.parameters] The parameters for the request.
     *
     * @param {boolean} [options.parameters.allowUpdates] A value indicating
     * whether packages within the application may be overwritten using the same
     * version string.
     *
     * @param {string} [options.parameters.displayName] The display name for the
     * application.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<Application>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createWithHttpOperationResponse(resourceGroupName: string, accountName: string, applicationId: string, options?: {
        parameters?: Models.ApplicationCreateParameters;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Deletes an application.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {string} applicationId The ID of the application.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, applicationId: string, options?: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about the specified application.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {string} applicationId The ID of the application.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<Application>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, accountName: string, applicationId: string, options?: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Updates settings for the specified application.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {string} applicationId The ID of the application.
     *
     * @param {object} parameters The parameters for the request.
     *
     * @param {boolean} [parameters.allowUpdates] A value indicating whether
     * packages within the application may be overwritten using the same version
     * string.
     *
     * @param {string} [parameters.defaultVersion] The package to use if a client
     * requests the application but does not specify a version.
     *
     * @param {string} [parameters.displayName] The display name for the
     * application.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, accountName: string, applicationId: string, parameters: Models.ApplicationUpdateParameters, options?: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Lists all of the applications in the specified account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {number} [options.maxresults] The maximum number of items to return
     * in the response.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ListApplicationsResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: {
        maxresults?: number;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Lists all of the applications in the specified account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ListApplicationsResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Adds an application to the specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {string} applicationId The ID of the application.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.parameters] The parameters for the request.
     *
     * @param {boolean} [options.parameters.allowUpdates] A value indicating
     * whether packages within the application may be overwritten using the same
     * version string.
     *
     * @param {string} [options.parameters.displayName] The display name for the
     * application.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Application} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Application} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    create(resourceGroupName: string, accountName: string, applicationId: string): Promise<Models.Application>;
    create(resourceGroupName: string, accountName: string, applicationId: string, options: {
        parameters?: Models.ApplicationCreateParameters;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.Application>;
    create(resourceGroupName: string, accountName: string, applicationId: string, callback: msRest.ServiceCallback<Models.Application>): void;
    create(resourceGroupName: string, accountName: string, applicationId: string, options: {
        parameters?: Models.ApplicationCreateParameters;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.Application>): void;
    /**
     * Deletes an application.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {string} applicationId The ID of the application.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(resourceGroupName: string, accountName: string, applicationId: string): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, applicationId: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, applicationId: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, applicationId: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets information about the specified application.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {string} applicationId The ID of the application.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Application} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Application} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, accountName: string, applicationId: string): Promise<Models.Application>;
    get(resourceGroupName: string, accountName: string, applicationId: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.Application>;
    get(resourceGroupName: string, accountName: string, applicationId: string, callback: msRest.ServiceCallback<Models.Application>): void;
    get(resourceGroupName: string, accountName: string, applicationId: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.Application>): void;
    /**
     * Updates settings for the specified application.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {string} applicationId The ID of the application.
     *
     * @param {object} parameters The parameters for the request.
     *
     * @param {boolean} [parameters.allowUpdates] A value indicating whether
     * packages within the application may be overwritten using the same version
     * string.
     *
     * @param {string} [parameters.defaultVersion] The package to use if a client
     * requests the application but does not specify a version.
     *
     * @param {string} [parameters.displayName] The display name for the
     * application.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, accountName: string, applicationId: string, parameters: Models.ApplicationUpdateParameters): Promise<void>;
    update(resourceGroupName: string, accountName: string, applicationId: string, parameters: Models.ApplicationUpdateParameters, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    update(resourceGroupName: string, accountName: string, applicationId: string, parameters: Models.ApplicationUpdateParameters, callback: msRest.ServiceCallback<void>): void;
    update(resourceGroupName: string, accountName: string, applicationId: string, parameters: Models.ApplicationUpdateParameters, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * Lists all of the applications in the specified account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {number} [options.maxresults] The maximum number of items to return
     * in the response.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {ListApplicationsResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ListApplicationsResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, accountName: string): Promise<Models.ListApplicationsResult>;
    list(resourceGroupName: string, accountName: string, options: {
        maxresults?: number;
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.ListApplicationsResult>;
    list(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.ListApplicationsResult>): void;
    list(resourceGroupName: string, accountName: string, options: {
        maxresults?: number;
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.ListApplicationsResult>): void;
    /**
     * Lists all of the applications in the specified account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {ListApplicationsResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ListApplicationsResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.ListApplicationsResult>;
    listNext(nextPageLink: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.ListApplicationsResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ListApplicationsResult>): void;
    listNext(nextPageLink: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.ListApplicationsResult>): void;
}
