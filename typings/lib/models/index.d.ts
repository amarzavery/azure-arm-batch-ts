import { BaseResource, CloudError } from "ms-rest-azure-ts";
export { BaseResource, CloudError };
/**
 * @class
 * Initializes a new instance of the AutoStorageBaseProperties class.
 * @constructor
 * The properties related to the auto-storage account.
 *
 * @member {string} storageAccountId The resource ID of the storage account to
 * be used for auto-storage account.
 */
export interface AutoStorageBaseProperties {
    storageAccountId: string;
}
/**
 * @class
 * Initializes a new instance of the KeyVaultReference class.
 * @constructor
 * Identifies the Azure key vault associated with a Batch account.
 *
 * @member {string} id The resource ID of the Azure key vault associated with
 * the Batch account.
 * @member {string} url The URL of the Azure key vault associated with the
 * Batch account.
 */
export interface KeyVaultReference {
    id: string;
    url: string;
}
/**
 * @class
 * Initializes a new instance of the BatchAccountCreateParameters class.
 * @constructor
 * Parameters supplied to the Create operation.
 *
 * @member {string} location The region in which to create the account.
 * @member {object} [tags] The user-specified tags associated with the account.
 * @member {object} [autoStorage] The properties related to the auto-storage
 * account.
 * @member {string} [autoStorage.storageAccountId] The resource ID of the
 * storage account to be used for auto-storage account.
 * @member {string} [poolAllocationMode] The allocation mode to use for
 * creating pools in the Batch account. The pool allocation mode also affects
 * how clients may authenticate to the Batch Service API. If the mode is
 * BatchService, clients may authenticate using access keys or Azure Active
 * Directory. If the mode is UserSubscription, clients must use Azure Active
 * Directory. The default is BatchService. Possible values include:
 * 'BatchService', 'UserSubscription'
 * @member {object} [keyVaultReference] A reference to the Azure key vault
 * associated with the Batch account.
 * @member {string} [keyVaultReference.id] The resource ID of the Azure key
 * vault associated with the Batch account.
 * @member {string} [keyVaultReference.url] The URL of the Azure key vault
 * associated with the Batch account.
 */
export interface BatchAccountCreateParameters {
    location: string;
    tags?: {
        [propertyName: string]: string;
    };
    autoStorage?: AutoStorageBaseProperties;
    poolAllocationMode?: string;
    keyVaultReference?: KeyVaultReference;
}
/**
 * @class
 * Initializes a new instance of the AutoStorageProperties class.
 * @constructor
 * Contains information about the auto-storage account associated with a Batch
 * account.
 *
 * @member {date} lastKeySync The UTC time at which storage keys were last
 * synchronized with the Batch account.
 */
export interface AutoStorageProperties extends AutoStorageBaseProperties {
    lastKeySync: Date;
}
/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * A definition of an Azure resource.
 *
 * @member {string} [id] The ID of the resource.
 * @member {string} [name] The name of the resource.
 * @member {string} [type] The type of the resource.
 * @member {string} [location] The location of the resource.
 * @member {object} [tags] The tags of the resource.
 */
export interface Resource extends BaseResource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
    readonly location?: string;
    readonly tags?: {
        [propertyName: string]: string;
    };
}
/**
 * @class
 * Initializes a new instance of the BatchAccount class.
 * @constructor
 * Contains information about an Azure Batch account.
 *
 * @member {string} [accountEndpoint] The account endpoint used to interact
 * with the Batch service.
 * @member {string} [provisioningState] The provisioned state of the resource.
 * Possible values include: 'Invalid', 'Creating', 'Deleting', 'Succeeded',
 * 'Failed', 'Cancelled'
 * @member {string} [poolAllocationMode] The allocation mode to use for
 * creating pools in the Batch account. Possible values include:
 * 'BatchService', 'UserSubscription'
 * @member {object} [keyVaultReference] A reference to the Azure key vault
 * associated with the Batch account.
 * @member {string} [keyVaultReference.id] The resource ID of the Azure key
 * vault associated with the Batch account.
 * @member {string} [keyVaultReference.url] The URL of the Azure key vault
 * associated with the Batch account.
 * @member {object} [autoStorage] The properties and status of any auto-storage
 * account associated with the Batch account.
 * @member {date} [autoStorage.lastKeySync] The UTC time at which storage keys
 * were last synchronized with the Batch account.
 * @member {number} [dedicatedCoreQuota] The dedicated core quota for this
 * Batch account.
 * @member {number} [lowPriorityCoreQuota] The low-priority core quota for this
 * Batch account.
 * @member {number} [poolQuota] The pool quota for this Batch account.
 * @member {number} [activeJobAndJobScheduleQuota] The active job and job
 * schedule quota for this Batch account.
 */
export interface BatchAccount extends Resource {
    readonly accountEndpoint?: string;
    readonly provisioningState?: string;
    readonly poolAllocationMode?: string;
    readonly keyVaultReference?: KeyVaultReference;
    readonly autoStorage?: AutoStorageProperties;
    readonly dedicatedCoreQuota?: number;
    readonly lowPriorityCoreQuota?: number;
    readonly poolQuota?: number;
    readonly activeJobAndJobScheduleQuota?: number;
}
/**
 * @class
 * Initializes a new instance of the BatchAccountUpdateParameters class.
 * @constructor
 * Parameters for updating an Azure Batch account.
 *
 * @member {object} [tags] The user-specified tags associated with the account.
 * @member {object} [autoStorage] The properties related to the auto-storage
 * account.
 * @member {string} [autoStorage.storageAccountId] The resource ID of the
 * storage account to be used for auto-storage account.
 */
export interface BatchAccountUpdateParameters {
    tags?: {
        [propertyName: string]: string;
    };
    autoStorage?: AutoStorageBaseProperties;
}
/**
 * @class
 * Initializes a new instance of the BatchAccountRegenerateKeyParameters class.
 * @constructor
 * Parameters supplied to the RegenerateKey operation.
 *
 * @member {string} keyName The type of account key to regenerate. Possible
 * values include: 'Primary', 'Secondary'
 */
export interface BatchAccountRegenerateKeyParameters {
    keyName: string;
}
/**
 * @class
 * Initializes a new instance of the BatchAccountKeys class.
 * @constructor
 * A set of Azure Batch account keys.
 *
 * @member {string} [accountName] The Batch account name.
 * @member {string} [primary] The primary key associated with the account.
 * @member {string} [secondary] The secondary key associated with the account.
 */
export interface BatchAccountKeys {
    readonly accountName?: string;
    readonly primary?: string;
    readonly secondary?: string;
}
/**
 * @class
 * Initializes a new instance of the ActivateApplicationPackageParameters class.
 * @constructor
 * Parameters for an activating an application package.
 *
 * @member {string} format The format of the application package binary file.
 */
export interface ActivateApplicationPackageParameters {
    format: string;
}
/**
 * @class
 * Initializes a new instance of the ApplicationCreateParameters class.
 * @constructor
 * Parameters for adding an Application.
 *
 * @member {boolean} [allowUpdates] A value indicating whether packages within
 * the application may be overwritten using the same version string.
 * @member {string} [displayName] The display name for the application.
 */
export interface ApplicationCreateParameters {
    allowUpdates?: boolean;
    displayName?: string;
}
/**
 * @class
 * Initializes a new instance of the ApplicationPackage class.
 * @constructor
 * An application package which represents a particular version of an
 * application.
 *
 * @member {string} [id] The ID of the application.
 * @member {string} [version] The version of the application package.
 * @member {string} [state] The current state of the application package.
 * Possible values include: 'pending', 'active', 'unmapped'
 * @member {string} [format] The format of the application package, if the
 * package is active.
 * @member {string} [storageUrl] The URL for the application package in Azure
 * Storage.
 * @member {date} [storageUrlExpiry] The UTC time at which the Azure Storage
 * URL will expire.
 * @member {date} [lastActivationTime] The time at which the package was last
 * activated, if the package is active.
 */
export interface ApplicationPackage {
    readonly id?: string;
    readonly version?: string;
    readonly state?: string;
    readonly format?: string;
    readonly storageUrl?: string;
    readonly storageUrlExpiry?: Date;
    readonly lastActivationTime?: Date;
}
/**
 * @class
 * Initializes a new instance of the Application class.
 * @constructor
 * Contains information about an application in a Batch account.
 *
 * @member {string} [id] A string that uniquely identifies the application
 * within the account.
 * @member {string} [displayName] The display name for the application.
 * @member {array} [packages] The list of packages under this application.
 * @member {boolean} [allowUpdates] A value indicating whether packages within
 * the application may be overwritten using the same version string.
 * @member {string} [defaultVersion] The package to use if a client requests
 * the application but does not specify a version.
 */
export interface Application {
    id?: string;
    displayName?: string;
    packages?: ApplicationPackage[];
    allowUpdates?: boolean;
    defaultVersion?: string;
}
/**
 * @class
 * Initializes a new instance of the ApplicationUpdateParameters class.
 * @constructor
 * Parameters for an update application request.
 *
 * @member {boolean} [allowUpdates] A value indicating whether packages within
 * the application may be overwritten using the same version string.
 * @member {string} [defaultVersion] The package to use if a client requests
 * the application but does not specify a version.
 * @member {string} [displayName] The display name for the application.
 */
export interface ApplicationUpdateParameters {
    allowUpdates?: boolean;
    defaultVersion?: string;
    displayName?: string;
}
/**
 * @class
 * Initializes a new instance of the BatchLocationQuota class.
 * @constructor
 * Quotas associated with a Batch region for a particular subscription.
 *
 * @member {number} [accountQuota] The number of Batch accounts that may be
 * created under the subscription in the specified region.
 */
export interface BatchLocationQuota {
    readonly accountQuota?: number;
}
/**
 * @class
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * @summary The object that describes the operation.
 *
 * @member {string} [provider] Friendly name of the resource provider.
 * @member {string} [operation] The operation type. For example: read, write,
 * delete, or listKeys/action
 * @member {string} [resource] The resource type on which the operation is
 * performed.
 * @member {string} [description] The friendly name of the operation.
 */
export interface OperationDisplay {
    provider?: string;
    operation?: string;
    resource?: string;
    description?: string;
}
/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * @summary A REST API operation
 *
 * @member {string} [name] The operation name. This is of the format
 * {provider}/{resource}/{operation}
 * @member {object} [display] The object that describes the operation.
 * @member {string} [display.provider]
 * @member {string} [display.operation] For example: read, write, delete, or
 * listKeys/action
 * @member {string} [display.resource]
 * @member {string} [display.description]
 * @member {string} [origin] The intended executor of the operation.
 * @member {object} [properties] Properties of the operation.
 */
export interface Operation {
    name?: string;
    display?: OperationDisplay;
    origin?: string;
    properties?: any;
}
/**
 * @class
 * Initializes a new instance of the CheckNameAvailabilityParameters class.
 * @constructor
 * Parameters for a check name availability request.
 *
 * @member {string} name The name to check for availability
 */
export interface CheckNameAvailabilityParameters {
    name: string;
}
/**
 * @class
 * Initializes a new instance of the CheckNameAvailabilityResult class.
 * @constructor
 * The CheckNameAvailability operation response.
 *
 * @member {boolean} [nameAvailable] Gets a boolean value that indicates
 * whether the name is available for you to use. If true, the name is
 * available. If false, the name has already been taken or invalid and cannot
 * be used.
 * @member {string} [reason] Gets the reason that a Batch account name could
 * not be used. The Reason element is only returned if NameAvailable is false.
 * Possible values include: 'Invalid', 'AlreadyExists'
 * @member {string} [message] Gets an error message explaining the Reason value
 * in more detail.
 */
export interface CheckNameAvailabilityResult {
    readonly nameAvailable?: boolean;
    readonly reason?: string;
    readonly message?: string;
}
/**
 * @class
 * Initializes a new instance of the BatchAccountListResult class.
 * @constructor
 * Values returned by the List operation.
 *
 * @member {string} [nextLink] The continuation token.
 */
export interface BatchAccountListResult extends Array<BatchAccount> {
    nextLink?: string;
}
/**
 * @class
 * Initializes a new instance of the ListApplicationsResult class.
 * @constructor
 * The result of performing list applications.
 *
 * @member {string} [nextLink] The URL to get the next set of results.
 */
export interface ListApplicationsResult extends Array<Application> {
    nextLink?: string;
}
/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * @summary Result of the request to list REST API operations. It contains a
 * list of operations and a URL nextLink to get the next set of results.
 *
 * @member {string} [nextLink]
 */
export interface OperationListResult extends Array<Operation> {
    nextLink?: string;
}