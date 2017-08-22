import * as msRest from "ms-rest-ts";
import * as Models from "../models";
import { BatchManagementClient } from '../batchManagementClient';
/** Class representing a Operations. */
export declare class Operations {
    private readonly client;
    /**
     * Create a Operations.
     * @param {BatchManagementClient} client Reference to the service client.
     */
    constructor(client: BatchManagementClient);
    /**
     * Lists available operations for the Microsoft.Batch provider
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<OperationListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Lists available operations for the Microsoft.Batch provider
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
     * @resolve {HttpOperationResponse<OperationListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<msRest.HttpOperationResponse>;
    /**
     * Lists available operations for the Microsoft.Batch provider
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
     *                      {OperationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link OperationListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.OperationListResult>;
    list(options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.OperationListResult>;
    list(callback: msRest.ServiceCallback<Models.OperationListResult>): void;
    list(options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.OperationListResult>): void;
    /**
     * Lists available operations for the Microsoft.Batch provider
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
     *                      {OperationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link OperationListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.OperationListResult>;
    listNext(nextPageLink: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }): Promise<Models.OperationListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.OperationListResult>): void;
    listNext(nextPageLink: string, options: {
        customHeaders?: {
            [headerName: string]: string;
        };
    }, callback: msRest.ServiceCallback<Models.OperationListResult>): void;
}
