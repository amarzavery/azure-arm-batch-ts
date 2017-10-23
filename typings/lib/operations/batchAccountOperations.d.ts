import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { BatchManagementClient } from "../batchManagementClient";
/** Class representing a BatchAccountOperations. */
export declare class BatchAccountOperations {
    private readonly client;
    /**
     * Create a BatchAccountOperations.
     * @param {BatchManagementClient} client Reference to the service client.
     */
    constructor(client: BatchManagementClient);
    /**
     * Creates a new Batch account with the specified parameters. Existing accounts
     * cannot be updated with this API and should instead be updated with the
     * Update Batch Account API.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName A name for the Batch account which must be
     * unique within the region. Batch account names must be between 3 and 24
     * characters in length and must use only numbers and lowercase letters. This
     * name is used as part of the DNS name that is used to access the Batch
     * service in the region in which the account is created. For example:
     * http://accountname.region.batch.azure.com/.
     *
     * @param {BatchAccountCreateParameters} parameters Additional parameters for
     * account creation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createWithHttpOperationResponse(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Updates the properties of an existing Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {BatchAccountUpdateParameters} parameters Additional parameters for
     * account update.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Deletes the specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about the specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about the Batch accounts associated with the subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about the Batch accounts associated with the specified
     * resource group.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listByResourceGroupWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Synchronizes access keys for the auto-storage account configured for the
     * specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    synchronizeAutoStorageKeysWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Regenerates the specified account key for the Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {AccountKeyType} keyName The type of account key to regenerate.
     * Possible values include: 'Primary', 'Secondary'
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    regenerateKeyWithHttpOperationResponse(resourceGroupName: string, accountName: string, keyName: Models.AccountKeyType, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Gets the account keys for the specified Batch account.
     *
     * This operation applies only to Batch accounts created with a
     * poolAllocationMode of 'BatchService'. If the Batch account was created with
     * a poolAllocationMode of 'UserSubscription', clients cannot use access to
     * keys to authenticate, and must use Azure Active Directory instead. In this
     * case, getting the keys will fail.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getKeysWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates a new Batch account with the specified parameters. Existing accounts
     * cannot be updated with this API and should instead be updated with the
     * Update Batch Account API.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName A name for the Batch account which must be
     * unique within the region. Batch account names must be between 3 and 24
     * characters in length and must use only numbers and lowercase letters. This
     * name is used as part of the DNS name that is used to access the Batch
     * service in the region in which the account is created. For example:
     * http://accountname.region.batch.azure.com/.
     *
     * @param {BatchAccountCreateParameters} parameters Additional parameters for
     * account creation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginCreateWithHttpOperationResponse(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Deletes the specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about the Batch accounts associated with the subscription.
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
     * Gets information about the Batch accounts associated with the specified
     * resource group.
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
    listByResourceGroupNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates a new Batch account with the specified parameters. Existing accounts
     * cannot be updated with this API and should instead be updated with the
     * Update Batch Account API.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName A name for the Batch account which must be
     * unique within the region. Batch account names must be between 3 and 24
     * characters in length and must use only numbers and lowercase letters. This
     * name is used as part of the DNS name that is used to access the Batch
     * service in the region in which the account is created. For example:
     * http://accountname.region.batch.azure.com/.
     *
     * @param {BatchAccountCreateParameters} parameters Additional parameters for
     * account creation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.BatchAccount} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.BatchAccount} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    create(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters): Promise<Models.BatchAccount>;
    create(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters, options: msRest.RequestOptionsBase): Promise<Models.BatchAccount>;
    create(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters, callback: msRest.ServiceCallback<Models.BatchAccount>): void;
    create(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchAccount>): void;
    /**
     * Updates the properties of an existing Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {BatchAccountUpdateParameters} parameters Additional parameters for
     * account update.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.BatchAccount} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.BatchAccount} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountUpdateParameters): Promise<Models.BatchAccount>;
    update(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountUpdateParameters, options: msRest.RequestOptionsBase): Promise<Models.BatchAccount>;
    update(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountUpdateParameters, callback: msRest.ServiceCallback<Models.BatchAccount>): void;
    update(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchAccount>): void;
    /**
     * Deletes the specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
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
    deleteMethod(resourceGroupName: string, accountName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets information about the specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.BatchAccount} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.BatchAccount} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, accountName: string): Promise<Models.BatchAccount>;
    get(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase): Promise<Models.BatchAccount>;
    get(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.BatchAccount>): void;
    get(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchAccount>): void;
    /**
     * Gets information about the Batch accounts associated with the subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.BatchAccountListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.BatchAccountListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.BatchAccountListResult>;
    list(options: msRest.RequestOptionsBase): Promise<Models.BatchAccountListResult>;
    list(callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
    list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
    /**
     * Gets information about the Batch accounts associated with the specified
     * resource group.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.BatchAccountListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.BatchAccountListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroup(resourceGroupName: string): Promise<Models.BatchAccountListResult>;
    listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.BatchAccountListResult>;
    listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
    listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
    /**
     * Synchronizes access keys for the auto-storage account configured for the
     * specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
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
    synchronizeAutoStorageKeys(resourceGroupName: string, accountName: string): Promise<void>;
    synchronizeAutoStorageKeys(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase): Promise<void>;
    synchronizeAutoStorageKeys(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<void>): void;
    synchronizeAutoStorageKeys(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Regenerates the specified account key for the Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {AccountKeyType} keyName The type of account key to regenerate.
     * Possible values include: 'Primary', 'Secondary'
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.BatchAccountKeys} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.BatchAccountKeys} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    regenerateKey(resourceGroupName: string, accountName: string, keyName: Models.AccountKeyType): Promise<Models.BatchAccountKeys>;
    regenerateKey(resourceGroupName: string, accountName: string, keyName: Models.AccountKeyType, options: msRest.RequestOptionsBase): Promise<Models.BatchAccountKeys>;
    regenerateKey(resourceGroupName: string, accountName: string, keyName: Models.AccountKeyType, callback: msRest.ServiceCallback<Models.BatchAccountKeys>): void;
    regenerateKey(resourceGroupName: string, accountName: string, keyName: Models.AccountKeyType, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchAccountKeys>): void;
    /**
     * @summary Gets the account keys for the specified Batch account.
     *
     * This operation applies only to Batch accounts created with a
     * poolAllocationMode of 'BatchService'. If the Batch account was created with
     * a poolAllocationMode of 'UserSubscription', clients cannot use access to
     * keys to authenticate, and must use Azure Active Directory instead. In this
     * case, getting the keys will fail.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.BatchAccountKeys} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.BatchAccountKeys} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    getKeys(resourceGroupName: string, accountName: string): Promise<Models.BatchAccountKeys>;
    getKeys(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase): Promise<Models.BatchAccountKeys>;
    getKeys(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.BatchAccountKeys>): void;
    getKeys(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchAccountKeys>): void;
    /**
     * Creates a new Batch account with the specified parameters. Existing accounts
     * cannot be updated with this API and should instead be updated with the
     * Update Batch Account API.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName A name for the Batch account which must be
     * unique within the region. Batch account names must be between 3 and 24
     * characters in length and must use only numbers and lowercase letters. This
     * name is used as part of the DNS name that is used to access the Batch
     * service in the region in which the account is created. For example:
     * http://accountname.region.batch.azure.com/.
     *
     * @param {BatchAccountCreateParameters} parameters Additional parameters for
     * account creation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback - The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Models.BatchAccount} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.BatchAccount} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreate(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters): Promise<Models.BatchAccount>;
    beginCreate(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters, options: msRest.RequestOptionsBase): Promise<Models.BatchAccount>;
    beginCreate(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters, callback: msRest.ServiceCallback<Models.BatchAccount>): void;
    beginCreate(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchAccount>): void;
    /**
     * Deletes the specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
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
    beginDeleteMethod(resourceGroupName: string, accountName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets information about the Batch accounts associated with the subscription.
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
     *                      {Models.BatchAccountListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.BatchAccountListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.BatchAccountListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.BatchAccountListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
    /**
     * Gets information about the Batch accounts associated with the specified
     * resource group.
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
     *                      {Models.BatchAccountListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.BatchAccountListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {Response} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroupNext(nextPageLink: string): Promise<Models.BatchAccountListResult>;
    listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.BatchAccountListResult>;
    listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
    listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
}
