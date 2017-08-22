import * as msRest from "ms-rest-ts";
import * as Models from "../models";
import { BatchManagementClient } from '../batchManagementClient';
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
     * @param {object} parameters Additional parameters for account creation.
     *
     * @param {string} parameters.location The region in which to create the
     * account.
     *
     * @param {object} [parameters.tags] The user-specified tags associated with
     * the account.
     *
     * @param {object} [parameters.autoStorage] The properties related to the
     * auto-storage account.
     *
     * @param {string} parameters.autoStorage.storageAccountId The resource ID of
     * the storage account to be used for auto-storage account.
     *
     * @param {string} [parameters.poolAllocationMode] The allocation mode to use
     * for creating pools in the Batch account. The pool allocation mode also
     * affects how clients may authenticate to the Batch Service API. If the mode
     * is BatchService, clients may authenticate using access keys or Azure Active
     * Directory. If the mode is UserSubscription, clients must use Azure Active
     * Directory. The default is BatchService. Possible values include:
     * 'BatchService', 'UserSubscription'
     *
     * @param {object} [parameters.keyVaultReference] A reference to the Azure key
     * vault associated with the Batch account.
     *
     * @param {string} parameters.keyVaultReference.id The resource ID of the Azure
     * key vault associated with the Batch account.
     *
     * @param {string} parameters.keyVaultReference.url The URL of the Azure key
     * vault associated with the Batch account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {function} [optionalCallback] - The optional callback.
     *
     * @returns {function|Promise} If a callback was passed as the last parameter
     * then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned
     *
     *                      @resolve {BatchAccount} - The deserialized result object.
     *
     *                      @reject {Error} - The error object.
     *
     * {function} optionalCallback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {object} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link BatchAccount} for more information.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    createWithHttpOperationResponse(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters, options?: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Updates the properties of an existing Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {object} parameters Additional parameters for account update.
     *
     * @param {object} [parameters.tags] The user-specified tags associated with
     * the account.
     *
     * @param {object} [parameters.autoStorage] The properties related to the
     * auto-storage account.
     *
     * @param {string} parameters.autoStorage.storageAccountId The resource ID of
     * the storage account to be used for auto-storage account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<BatchAccount>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountUpdateParameters, options?: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Deletes the specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {function} [optionalCallback] - The optional callback.
     *
     * @returns {function|Promise} If a callback was passed as the last parameter
     * then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error} - The error object.
     *
     * {function} optionalCallback(err, result, request, response)
     *
     *                      {Error}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {object} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {stream} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about the specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<BatchAccount>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about the Batch accounts associated with the subscription.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<BatchAccountListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about the Batch accounts associated with the specified
     * resource group.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<BatchAccountListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listByResourceGroupWithHttpOperationResponse(resourceGroupName: string, options?: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Synchronizes access keys for the auto-storage account configured for the
     * specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
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
    synchronizeAutoStorageKeysWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Regenerates the specified account key for the Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {string} keyName The type of account key to regenerate. Possible
     * values include: 'Primary', 'Secondary'
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<BatchAccountKeys>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    regenerateKeyWithHttpOperationResponse(resourceGroupName: string, accountName: string, keyName: string, options?: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<BatchAccountKeys>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getKeysWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} parameters Additional parameters for account creation.
     *
     * @param {string} parameters.location The region in which to create the
     * account.
     *
     * @param {object} [parameters.tags] The user-specified tags associated with
     * the account.
     *
     * @param {object} [parameters.autoStorage] The properties related to the
     * auto-storage account.
     *
     * @param {string} parameters.autoStorage.storageAccountId The resource ID of
     * the storage account to be used for auto-storage account.
     *
     * @param {string} [parameters.poolAllocationMode] The allocation mode to use
     * for creating pools in the Batch account. The pool allocation mode also
     * affects how clients may authenticate to the Batch Service API. If the mode
     * is BatchService, clients may authenticate using access keys or Azure Active
     * Directory. If the mode is UserSubscription, clients must use Azure Active
     * Directory. The default is BatchService. Possible values include:
     * 'BatchService', 'UserSubscription'
     *
     * @param {object} [parameters.keyVaultReference] A reference to the Azure key
     * vault associated with the Batch account.
     *
     * @param {string} parameters.keyVaultReference.id The resource ID of the Azure
     * key vault associated with the Batch account.
     *
     * @param {string} parameters.keyVaultReference.url The URL of the Azure key
     * vault associated with the Batch account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<BatchAccount>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginCreateWithHttpOperationResponse(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters, options?: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Deletes the specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
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
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about the Batch accounts associated with the subscription.
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
     * @resolve {HttpOperationResponse<BatchAccountListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about the Batch accounts associated with the specified
     * resource group.
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
     * @resolve {HttpOperationResponse<BatchAccountListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listByResourceGroupNextWithHttpOperationResponse(nextPageLink: string, options?: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
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
     * @param {object} parameters Additional parameters for account creation.
     *
     * @param {string} parameters.location The region in which to create the
     * account.
     *
     * @param {object} [parameters.tags] The user-specified tags associated with
     * the account.
     *
     * @param {object} [parameters.autoStorage] The properties related to the
     * auto-storage account.
     *
     * @param {string} parameters.autoStorage.storageAccountId The resource ID of
     * the storage account to be used for auto-storage account.
     *
     * @param {string} [parameters.poolAllocationMode] The allocation mode to use
     * for creating pools in the Batch account. The pool allocation mode also
     * affects how clients may authenticate to the Batch Service API. If the mode
     * is BatchService, clients may authenticate using access keys or Azure Active
     * Directory. If the mode is UserSubscription, clients must use Azure Active
     * Directory. The default is BatchService. Possible values include:
     * 'BatchService', 'UserSubscription'
     *
     * @param {object} [parameters.keyVaultReference] A reference to the Azure key
     * vault associated with the Batch account.
     *
     * @param {string} parameters.keyVaultReference.id The resource ID of the Azure
     * key vault associated with the Batch account.
     *
     * @param {string} parameters.keyVaultReference.url The URL of the Azure key
     * vault associated with the Batch account.
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
     *                      {BatchAccount} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link BatchAccount} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    create(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters): Promise<Models.BatchAccount>;
    create(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.BatchAccount>;
    create(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters, callback: msRest.ServiceCallback<Models.BatchAccount>): void;
    create(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.BatchAccount>): void;
    /**
     * Updates the properties of an existing Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {object} parameters Additional parameters for account update.
     *
     * @param {object} [parameters.tags] The user-specified tags associated with
     * the account.
     *
     * @param {object} [parameters.autoStorage] The properties related to the
     * auto-storage account.
     *
     * @param {string} parameters.autoStorage.storageAccountId The resource ID of
     * the storage account to be used for auto-storage account.
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
     *                      {BatchAccount} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link BatchAccount} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountUpdateParameters): Promise<Models.BatchAccount>;
    update(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountUpdateParameters, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.BatchAccount>;
    update(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountUpdateParameters, callback: msRest.ServiceCallback<Models.BatchAccount>): void;
    update(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountUpdateParameters, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.BatchAccount>): void;
    /**
     * Deletes the specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
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
    deleteMethod(resourceGroupName: string, accountName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets information about the specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
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
     *                      {BatchAccount} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link BatchAccount} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, accountName: string): Promise<Models.BatchAccount>;
    get(resourceGroupName: string, accountName: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.BatchAccount>;
    get(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.BatchAccount>): void;
    get(resourceGroupName: string, accountName: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.BatchAccount>): void;
    /**
     * Gets information about the Batch accounts associated with the subscription.
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
     *                      {BatchAccountListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link BatchAccountListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.BatchAccountListResult>;
    list(options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.BatchAccountListResult>;
    list(callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
    list(options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
    /**
     * Gets information about the Batch accounts associated with the specified
     * resource group.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
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
     *                      {BatchAccountListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link BatchAccountListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroup(resourceGroupName: string): Promise<Models.BatchAccountListResult>;
    listByResourceGroup(resourceGroupName: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.BatchAccountListResult>;
    listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
    listByResourceGroup(resourceGroupName: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
    /**
     * Synchronizes access keys for the auto-storage account configured for the
     * specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
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
    synchronizeAutoStorageKeys(resourceGroupName: string, accountName: string): Promise<void>;
    synchronizeAutoStorageKeys(resourceGroupName: string, accountName: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    synchronizeAutoStorageKeys(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<void>): void;
    synchronizeAutoStorageKeys(resourceGroupName: string, accountName: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * Regenerates the specified account key for the Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
     *
     * @param {string} keyName The type of account key to regenerate. Possible
     * values include: 'Primary', 'Secondary'
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
     *                      {BatchAccountKeys} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link BatchAccountKeys} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    regenerateKey(resourceGroupName: string, accountName: string, keyName: string): Promise<Models.BatchAccountKeys>;
    regenerateKey(resourceGroupName: string, accountName: string, keyName: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.BatchAccountKeys>;
    regenerateKey(resourceGroupName: string, accountName: string, keyName: string, callback: msRest.ServiceCallback<Models.BatchAccountKeys>): void;
    regenerateKey(resourceGroupName: string, accountName: string, keyName: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.BatchAccountKeys>): void;
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
     *                      {BatchAccountKeys} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link BatchAccountKeys} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    getKeys(resourceGroupName: string, accountName: string): Promise<Models.BatchAccountKeys>;
    getKeys(resourceGroupName: string, accountName: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.BatchAccountKeys>;
    getKeys(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.BatchAccountKeys>): void;
    getKeys(resourceGroupName: string, accountName: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.BatchAccountKeys>): void;
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
     * @param {object} parameters Additional parameters for account creation.
     *
     * @param {string} parameters.location The region in which to create the
     * account.
     *
     * @param {object} [parameters.tags] The user-specified tags associated with
     * the account.
     *
     * @param {object} [parameters.autoStorage] The properties related to the
     * auto-storage account.
     *
     * @param {string} parameters.autoStorage.storageAccountId The resource ID of
     * the storage account to be used for auto-storage account.
     *
     * @param {string} [parameters.poolAllocationMode] The allocation mode to use
     * for creating pools in the Batch account. The pool allocation mode also
     * affects how clients may authenticate to the Batch Service API. If the mode
     * is BatchService, clients may authenticate using access keys or Azure Active
     * Directory. If the mode is UserSubscription, clients must use Azure Active
     * Directory. The default is BatchService. Possible values include:
     * 'BatchService', 'UserSubscription'
     *
     * @param {object} [parameters.keyVaultReference] A reference to the Azure key
     * vault associated with the Batch account.
     *
     * @param {string} parameters.keyVaultReference.id The resource ID of the Azure
     * key vault associated with the Batch account.
     *
     * @param {string} parameters.keyVaultReference.url The URL of the Azure key
     * vault associated with the Batch account.
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
     *                      {BatchAccount} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link BatchAccount} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreate(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters): Promise<Models.BatchAccount>;
    beginCreate(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.BatchAccount>;
    beginCreate(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters, callback: msRest.ServiceCallback<Models.BatchAccount>): void;
    beginCreate(resourceGroupName: string, accountName: string, parameters: Models.BatchAccountCreateParameters, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.BatchAccount>): void;
    /**
     * Deletes the specified Batch account.
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains the Batch account.
     *
     * @param {string} accountName The name of the Batch account.
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
    beginDeleteMethod(resourceGroupName: string, accountName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, accountName: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, accountName: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets information about the Batch accounts associated with the subscription.
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
     *                      {BatchAccountListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link BatchAccountListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.BatchAccountListResult>;
    listNext(nextPageLink: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.BatchAccountListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
    listNext(nextPageLink: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
    /**
     * Gets information about the Batch accounts associated with the specified
     * resource group.
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
     *                      {BatchAccountListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link BatchAccountListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroupNext(nextPageLink: string): Promise<Models.BatchAccountListResult>;
    listByResourceGroupNext(nextPageLink: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.BatchAccountListResult>;
    listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
    listByResourceGroupNext(nextPageLink: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.BatchAccountListResult>): void;
}
