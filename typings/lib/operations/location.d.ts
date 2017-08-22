import * as msRest from "ms-rest-ts";
import * as Models from "../models";
import { BatchManagementClient } from '../batchManagementClient';
/** Class representing a Location. */
export declare class Location {
    private readonly client;
    /**
     * Create a Location.
     * @param {BatchManagementClient} client Reference to the service client.
     */
    constructor(client: BatchManagementClient);
    /**
     * Gets the Batch service quotas for the specified subscription at the given
     * location.
     *
     * @param {string} locationName The region for which to retrieve Batch service
     * quotas.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<BatchLocationQuota>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getQuotasWithHttpOperationResponse(locationName: string, options?: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Checks whether the Batch account name is available in the specified region.
     *
     * @param {string} locationName The desired region for the name check.
     *
     * @param {string} name The name to check for availability
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<CheckNameAvailabilityResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    checkNameAvailabilityWithHttpOperationResponse(locationName: string, name: string, options?: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the Batch service quotas for the specified subscription at the given
     * location.
     *
     * @param {string} locationName The region for which to retrieve Batch service
     * quotas.
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
     *                      {BatchLocationQuota} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link BatchLocationQuota} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    getQuotas(locationName: string): Promise<Models.BatchLocationQuota>;
    getQuotas(locationName: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.BatchLocationQuota>;
    getQuotas(locationName: string, callback: msRest.ServiceCallback<Models.BatchLocationQuota>): void;
    getQuotas(locationName: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.BatchLocationQuota>): void;
    /**
     * Checks whether the Batch account name is available in the specified region.
     *
     * @param {string} locationName The desired region for the name check.
     *
     * @param {string} name The name to check for availability
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
     *                      {CheckNameAvailabilityResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link CheckNameAvailabilityResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    checkNameAvailability(locationName: string, name: string): Promise<Models.CheckNameAvailabilityResult>;
    checkNameAvailability(locationName: string, name: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.CheckNameAvailabilityResult>;
    checkNameAvailability(locationName: string, name: string, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): void;
    checkNameAvailability(locationName: string, name: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): void;
}
