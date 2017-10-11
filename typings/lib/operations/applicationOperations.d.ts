import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { BatchManagementClient } from "../batchManagementClient";
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
     * @param {ApplicationCreateOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createWithHttpOperationResponse(resourceGroupName: string, accountName: string, applicationId: string, options?: Models.ApplicationCreateOptionalParams): Promise<msRest.HttpOperationResponse>;
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
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, applicationId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
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
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, accountName: string, applicationId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
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
     * @param {ApplicationUpdateParameters} parameters The parameters for the
     * request.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, accountName: string, applicationId: string, parameters: Models.ApplicationUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Lists all of the applications in the specified account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {ApplicationListOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: Models.ApplicationListOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Lists all of the applications in the specified account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
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
     * @param {ApplicationCreateOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.Application} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Application} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    create(resourceGroupName: string, accountName: string, applicationId: string): Promise<Models.Application>;
    create(resourceGroupName: string, accountName: string, applicationId: string, options: Models.ApplicationCreateOptionalParams): Promise<Models.Application>;
    create(resourceGroupName: string, accountName: string, applicationId: string, callback: msRest.ServiceCallback<Models.Application>): void;
    create(resourceGroupName: string, accountName: string, applicationId: string, options: Models.ApplicationCreateOptionalParams, callback: msRest.ServiceCallback<Models.Application>): void;
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
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(resourceGroupName: string, accountName: string, applicationId: string): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, applicationId: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, applicationId: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, applicationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
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
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.Application} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Application} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, accountName: string, applicationId: string): Promise<Models.Application>;
    get(resourceGroupName: string, accountName: string, applicationId: string, options: msRest.RequestOptionsBase): Promise<Models.Application>;
    get(resourceGroupName: string, accountName: string, applicationId: string, callback: msRest.ServiceCallback<Models.Application>): void;
    get(resourceGroupName: string, accountName: string, applicationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Application>): void;
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
     * @param {ApplicationUpdateParameters} parameters The parameters for the
     * request.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, accountName: string, applicationId: string, parameters: Models.ApplicationUpdateParameters): Promise<void>;
    update(resourceGroupName: string, accountName: string, applicationId: string, parameters: Models.ApplicationUpdateParameters, options: msRest.RequestOptionsBase): Promise<void>;
    update(resourceGroupName: string, accountName: string, applicationId: string, parameters: Models.ApplicationUpdateParameters, callback: msRest.ServiceCallback<void>): void;
    update(resourceGroupName: string, accountName: string, applicationId: string, parameters: Models.ApplicationUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Lists all of the applications in the specified account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {ApplicationListOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ListApplicationsResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ListApplicationsResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, accountName: string): Promise<Models.ListApplicationsResult>;
    list(resourceGroupName: string, accountName: string, options: Models.ApplicationListOptionalParams): Promise<Models.ListApplicationsResult>;
    list(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.ListApplicationsResult>): void;
    list(resourceGroupName: string, accountName: string, options: Models.ApplicationListOptionalParams, callback: msRest.ServiceCallback<Models.ListApplicationsResult>): void;
    /**
     * Lists all of the applications in the specified account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ListApplicationsResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ListApplicationsResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.ListApplicationsResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ListApplicationsResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ListApplicationsResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListApplicationsResult>): void;
}
