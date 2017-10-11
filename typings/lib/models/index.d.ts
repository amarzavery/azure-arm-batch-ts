import { BaseResource, CloudError } from "ms-rest-azure-js";
import { RequestOptionsBase } from "ms-rest-js";
export { BaseResource, CloudError };
/**
 * @interface
 * An interface representing AutoStorageBaseProperties.
 * The properties related to the auto-storage account.
 *
 */
export interface AutoStorageBaseProperties {
    /**
     * @member {string} storageAccountId The resource ID of the storage account
     * to be used for auto-storage account.
     */
    storageAccountId: string;
}
/**
 * @interface
 * An interface representing KeyVaultReference.
 * Identifies the Azure key vault associated with a Batch account.
 *
 */
export interface KeyVaultReference {
    /**
     * @member {string} id The resource ID of the Azure key vault associated with
     * the Batch account.
     */
    id: string;
    /**
     * @member {string} url The URL of the Azure key vault associated with the
     * Batch account.
     */
    url: string;
}
/**
 * @interface
 * An interface representing BatchAccountCreateParameters.
 * Parameters supplied to the Create operation.
 *
 */
export interface BatchAccountCreateParameters {
    /**
     * @member {string} location The region in which to create the account.
     */
    location: string;
    /**
     * @member {{ [propertyName: string]: string }} [tags] The user-specified
     * tags associated with the account.
     */
    tags?: {
        [propertyName: string]: string;
    };
    /**
     * @member {AutoStorageBaseProperties} [autoStorage] The properties related
     * to the auto-storage account.
     */
    autoStorage?: AutoStorageBaseProperties;
    /**
     * @member {string} [poolAllocationMode] The allocation mode to use for
     * creating pools in the Batch account. The pool allocation mode also affects
     * how clients may authenticate to the Batch Service API. If the mode is
     * BatchService, clients may authenticate using access keys or Azure Active
     * Directory. If the mode is UserSubscription, clients must use Azure Active
     * Directory. The default is BatchService. Possible values include:
     * 'BatchService', 'UserSubscription'
     */
    poolAllocationMode?: string;
    /**
     * @member {KeyVaultReference} [keyVaultReference] A reference to the Azure
     * key vault associated with the Batch account.
     */
    keyVaultReference?: KeyVaultReference;
}
/**
 * @interface
 * An interface representing AutoStorageProperties.
 * Contains information about the auto-storage account associated with a Batch
 * account.
 *
 * @extends AutoStorageBaseProperties
 */
export interface AutoStorageProperties extends AutoStorageBaseProperties {
    /**
     * @member {Date} lastKeySync The UTC time at which storage keys were last
     * synchronized with the Batch account.
     */
    lastKeySync: Date;
}
/**
 * @interface
 * An interface representing Resource.
 * A definition of an Azure resource.
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
    /**
     * @member {string} [id] The ID of the resource.
     */
    readonly id?: string;
    /**
     * @member {string} [name] The name of the resource.
     */
    readonly name?: string;
    /**
     * @member {string} [type] The type of the resource.
     */
    readonly type?: string;
    /**
     * @member {string} [location] The location of the resource.
     */
    readonly location?: string;
    /**
     * @member {{ [propertyName: string]: string }} [tags] The tags of the
     * resource.
     */
    readonly tags?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing BatchAccount.
 * Contains information about an Azure Batch account.
 *
 * @extends Resource
 */
export interface BatchAccount extends Resource {
    /**
     * @member {string} [accountEndpoint] The account endpoint used to interact
     * with the Batch service.
     */
    readonly accountEndpoint?: string;
    /**
     * @member {string} [provisioningState] The provisioned state of the
     * resource. Possible values include: 'Invalid', 'Creating', 'Deleting',
     * 'Succeeded', 'Failed', 'Cancelled'
     */
    readonly provisioningState?: string;
    /**
     * @member {string} [poolAllocationMode] The allocation mode to use for
     * creating pools in the Batch account. Possible values include:
     * 'BatchService', 'UserSubscription'
     */
    readonly poolAllocationMode?: string;
    /**
     * @member {KeyVaultReference} [keyVaultReference] A reference to the Azure
     * key vault associated with the Batch account.
     */
    readonly keyVaultReference?: KeyVaultReference;
    /**
     * @member {AutoStorageProperties} [autoStorage] The properties and status of
     * any auto-storage account associated with the Batch account.
     */
    readonly autoStorage?: AutoStorageProperties;
    /**
     * @member {number} [dedicatedCoreQuota] The dedicated core quota for this
     * Batch account.
     */
    readonly dedicatedCoreQuota?: number;
    /**
     * @member {number} [lowPriorityCoreQuota] The low-priority core quota for
     * this Batch account.
     */
    readonly lowPriorityCoreQuota?: number;
    /**
     * @member {number} [poolQuota] The pool quota for this Batch account.
     */
    readonly poolQuota?: number;
    /**
     * @member {number} [activeJobAndJobScheduleQuota] The active job and job
     * schedule quota for this Batch account.
     */
    readonly activeJobAndJobScheduleQuota?: number;
}
/**
 * @interface
 * An interface representing BatchAccountUpdateParameters.
 * Parameters for updating an Azure Batch account.
 *
 */
export interface BatchAccountUpdateParameters {
    /**
     * @member {{ [propertyName: string]: string }} [tags] The user-specified
     * tags associated with the account.
     */
    tags?: {
        [propertyName: string]: string;
    };
    /**
     * @member {AutoStorageBaseProperties} [autoStorage] The properties related
     * to the auto-storage account.
     */
    autoStorage?: AutoStorageBaseProperties;
}
/**
 * @interface
 * An interface representing BatchAccountRegenerateKeyParameters.
 * Parameters supplied to the RegenerateKey operation.
 *
 */
export interface BatchAccountRegenerateKeyParameters {
    /**
     * @member {string} keyName The type of account key to regenerate. Possible
     * values include: 'Primary', 'Secondary'
     */
    keyName: string;
}
/**
 * @interface
 * An interface representing BatchAccountKeys.
 * A set of Azure Batch account keys.
 *
 */
export interface BatchAccountKeys {
    /**
     * @member {string} [accountName] The Batch account name.
     */
    readonly accountName?: string;
    /**
     * @member {string} [primary] The primary key associated with the account.
     */
    readonly primary?: string;
    /**
     * @member {string} [secondary] The secondary key associated with the
     * account.
     */
    readonly secondary?: string;
}
/**
 * @interface
 * An interface representing ActivateApplicationPackageParameters.
 * Parameters for an activating an application package.
 *
 */
export interface ActivateApplicationPackageParameters {
    /**
     * @member {string} format The format of the application package binary file.
     */
    format: string;
}
/**
 * @interface
 * An interface representing ApplicationCreateParameters.
 * Parameters for adding an Application.
 *
 */
export interface ApplicationCreateParameters {
    /**
     * @member {boolean} [allowUpdates] A value indicating whether packages
     * within the application may be overwritten using the same version string.
     */
    allowUpdates?: boolean;
    /**
     * @member {string} [displayName] The display name for the application.
     */
    displayName?: string;
}
/**
 * @interface
 * An interface representing ApplicationPackage.
 * An application package which represents a particular version of an
 * application.
 *
 */
export interface ApplicationPackage {
    /**
     * @member {string} [id] The ID of the application.
     */
    readonly id?: string;
    /**
     * @member {string} [version] The version of the application package.
     */
    readonly version?: string;
    /**
     * @member {string} [state] The current state of the application package.
     * Possible values include: 'pending', 'active', 'unmapped'
     */
    readonly state?: string;
    /**
     * @member {string} [format] The format of the application package, if the
     * package is active.
     */
    readonly format?: string;
    /**
     * @member {string} [storageUrl] The URL for the application package in Azure
     * Storage.
     */
    readonly storageUrl?: string;
    /**
     * @member {Date} [storageUrlExpiry] The UTC time at which the Azure Storage
     * URL will expire.
     */
    readonly storageUrlExpiry?: Date;
    /**
     * @member {Date} [lastActivationTime] The time at which the package was last
     * activated, if the package is active.
     */
    readonly lastActivationTime?: Date;
}
/**
 * @interface
 * An interface representing Application.
 * Contains information about an application in a Batch account.
 *
 */
export interface Application {
    /**
     * @member {string} [id] A string that uniquely identifies the application
     * within the account.
     */
    id?: string;
    /**
     * @member {string} [displayName] The display name for the application.
     */
    displayName?: string;
    /**
     * @member {ApplicationPackage[]} [packages] The list of packages under this
     * application.
     */
    packages?: ApplicationPackage[];
    /**
     * @member {boolean} [allowUpdates] A value indicating whether packages
     * within the application may be overwritten using the same version string.
     */
    allowUpdates?: boolean;
    /**
     * @member {string} [defaultVersion] The package to use if a client requests
     * the application but does not specify a version.
     */
    defaultVersion?: string;
}
/**
 * @interface
 * An interface representing ApplicationUpdateParameters.
 * Parameters for an update application request.
 *
 */
export interface ApplicationUpdateParameters {
    /**
     * @member {boolean} [allowUpdates] A value indicating whether packages
     * within the application may be overwritten using the same version string.
     */
    allowUpdates?: boolean;
    /**
     * @member {string} [defaultVersion] The package to use if a client requests
     * the application but does not specify a version.
     */
    defaultVersion?: string;
    /**
     * @member {string} [displayName] The display name for the application.
     */
    displayName?: string;
}
/**
 * @interface
 * An interface representing BatchLocationQuota.
 * Quotas associated with a Batch region for a particular subscription.
 *
 */
export interface BatchLocationQuota {
    /**
     * @member {number} [accountQuota] The number of Batch accounts that may be
     * created under the subscription in the specified region.
     */
    readonly accountQuota?: number;
}
/**
 * @interface
 * An interface representing OperationDisplay.
 * @summary The object that describes the operation.
 *
 */
export interface OperationDisplay {
    /**
     * @member {string} [provider] Friendly name of the resource provider.
     */
    provider?: string;
    /**
     * @member {string} [operation] The operation type. For example: read, write,
     * delete, or listKeys/action
     */
    operation?: string;
    /**
     * @member {string} [resource] The resource type on which the operation is
     * performed.
     */
    resource?: string;
    /**
     * @member {string} [description] The friendly name of the operation.
     */
    description?: string;
}
/**
 * @interface
 * An interface representing Operation.
 * @summary A REST API operation
 *
 */
export interface Operation {
    /**
     * @member {string} [name] The operation name. This is of the format
     * {provider}/{resource}/{operation}
     */
    name?: string;
    /**
     * @member {OperationDisplay} [display] The object that describes the
     * operation.
     */
    display?: OperationDisplay;
    /**
     * @member {string} [origin] The intended executor of the operation.
     */
    origin?: string;
    /**
     * @member {any} [properties] Properties of the operation.
     */
    properties?: any;
}
/**
 * @interface
 * An interface representing CheckNameAvailabilityParameters.
 * Parameters for a check name availability request.
 *
 */
export interface CheckNameAvailabilityParameters {
    /**
     * @member {string} name The name to check for availability
     */
    name: string;
}
/**
 * @interface
 * An interface representing CheckNameAvailabilityResult.
 * The CheckNameAvailability operation response.
 *
 */
export interface CheckNameAvailabilityResult {
    /**
     * @member {boolean} [nameAvailable] Gets a boolean value that indicates
     * whether the name is available for you to use. If true, the name is
     * available. If false, the name has already been taken or invalid and cannot
     * be used.
     */
    readonly nameAvailable?: boolean;
    /**
     * @member {string} [reason] Gets the reason that a Batch account name could
     * not be used. The Reason element is only returned if NameAvailable is
     * false. Possible values include: 'Invalid', 'AlreadyExists'
     */
    readonly reason?: string;
    /**
     * @member {string} [message] Gets an error message explaining the Reason
     * value in more detail.
     */
    readonly message?: string;
}
/**
 * @interface
 * An interface representing ApplicationCreateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ApplicationCreateOptionalParams extends RequestOptionsBase {
    /**
     * @member {ApplicationCreateParameters} [parameters] The parameters for the
     * request.
     */
    parameters?: ApplicationCreateParameters;
}
/**
 * @interface
 * An interface representing ApplicationListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ApplicationListOptionalParams extends RequestOptionsBase {
    /**
     * @member {number} [maxresults] The maximum number of items to return in the
     * response.
     */
    maxresults?: number;
}
/**
 * @interface
 * An interface representing the BatchAccountListResult.
 * Values returned by the List operation.
 *
 * @extends Array<BatchAccount>
 */
export interface BatchAccountListResult extends Array<BatchAccount> {
    /**
     * @member {string} [nextLink] The continuation token.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the ListApplicationsResult.
 * The result of performing list applications.
 *
 * @extends Array<Application>
 */
export interface ListApplicationsResult extends Array<Application> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the OperationListResult.
 * @summary Result of the request to list REST API operations. It contains a
 * list of operations and a URL nextLink to get the next set of results.
 *
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
    /**
     * @member {string} [nextLink]
     */
    nextLink?: string;
}
