import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { BatchManagementClient } from "../batchManagementClient";
/** Class representing a ApplicationPackageOperations. */
export declare class ApplicationPackageOperations {
    private readonly client;
    /**
     * Create a ApplicationPackageOperations.
     * @param {BatchManagementClient} client Reference to the service client.
     */
    constructor(client: BatchManagementClient);
    /**
     * Activates the specified application package.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {string} applicationId The ID of the application.
     *
     * @param {string} version The version of the application to activate.
     *
     * @param {string} format The format of the application package binary file.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    activateWithHttpOperationResponse(resourceGroupName: string, accountName: string, applicationId: string, version: string, format: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates an application package record.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {string} applicationId The ID of the application.
     *
     * @param {string} version The version of the application.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createWithHttpOperationResponse(resourceGroupName: string, accountName: string, applicationId: string, version: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Deletes an application package record and its associated binary file.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {string} applicationId The ID of the application.
     *
     * @param {string} version The version of the application to delete.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, applicationId: string, version: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about the specified application package.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {string} applicationId The ID of the application.
     *
     * @param {string} version The version of the application.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, accountName: string, applicationId: string, version: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Activates the specified application package.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {string} applicationId The ID of the application.
     *
     * @param {string} version The version of the application to activate.
     *
     * @param {string} format The format of the application package binary file.
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
    activate(resourceGroupName: string, accountName: string, applicationId: string, version: string, format: string): Promise<void>;
    activate(resourceGroupName: string, accountName: string, applicationId: string, version: string, format: string, options: msRest.RequestOptionsBase): Promise<void>;
    activate(resourceGroupName: string, accountName: string, applicationId: string, version: string, format: string, callback: msRest.ServiceCallback<void>): void;
    activate(resourceGroupName: string, accountName: string, applicationId: string, version: string, format: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates an application package record.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {string} applicationId The ID of the application.
     *
     * @param {string} version The version of the application.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ApplicationPackage} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ApplicationPackage} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    create(resourceGroupName: string, accountName: string, applicationId: string, version: string): Promise<Models.ApplicationPackage>;
    create(resourceGroupName: string, accountName: string, applicationId: string, version: string, options: msRest.RequestOptionsBase): Promise<Models.ApplicationPackage>;
    create(resourceGroupName: string, accountName: string, applicationId: string, version: string, callback: msRest.ServiceCallback<Models.ApplicationPackage>): void;
    create(resourceGroupName: string, accountName: string, applicationId: string, version: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationPackage>): void;
    /**
     * Deletes an application package record and its associated binary file.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {string} applicationId The ID of the application.
     *
     * @param {string} version The version of the application to delete.
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
    deleteMethod(resourceGroupName: string, accountName: string, applicationId: string, version: string): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, applicationId: string, version: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, applicationId: string, version: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, applicationId: string, version: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets information about the specified application package.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {string} applicationId The ID of the application.
     *
     * @param {string} version The version of the application.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.ApplicationPackage} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ApplicationPackage} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, accountName: string, applicationId: string, version: string): Promise<Models.ApplicationPackage>;
    get(resourceGroupName: string, accountName: string, applicationId: string, version: string, options: msRest.RequestOptionsBase): Promise<Models.ApplicationPackage>;
    get(resourceGroupName: string, accountName: string, applicationId: string, version: string, callback: msRest.ServiceCallback<Models.ApplicationPackage>): void;
    get(resourceGroupName: string, accountName: string, applicationId: string, version: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationPackage>): void;
}
