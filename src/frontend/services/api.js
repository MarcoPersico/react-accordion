import axios from 'axios';
import Utils from './Utils';

// App Config
import AppConfiguration from './AppConfiguration';

/**
 * Class with all the methods required to make RESTful calls. Supported methods:
 * - `GET`: `this.get()`
 * - `POST`: `this.post()`
 */
class Api {
  /**
   * Class constructor.
   * @property {String} url         API base URL.
   * @property {Object} endpoints   Key: Value set of API endpoints, where `Key` is a formal name
   *                                for that endpoint, and `Value` is the URL path to the
   *                                endpoint. `Value` will be retrieved when calling.
   */
  constructor() {
    /**
     * Instance of the App configuration data.
     * @type {Object}
     */
    this.appConfig = AppConfiguration.getConfig();

    /**
     * The API base URL.
     * @type {String}
     */
    this.url = this.appConfig.api.url;

    /**
     * A dictionary with the API endpoints.
     * @type {Object}
     */
    this.endpoints = this.appConfig.api.endpoints;
  }

  /**
   * Get and format an endpoint for the API.
   * @param {String} name       The name of the endpoint on the app configuration (The
   *                            appConstant constant).
   * @param {Object} parameters Optional. A dictionary with placeholder values for the endpoint.
   *                            If there's no placeholder for one of the paramters, it will be
   *                            added as a query string.
   * @return {String}
   * @throws {Error} If the requested enpdoint is not on the configuration.
   */
  _getEndpoint(name, parameters = {}) {
    const endpoint = this.endpoints[name];
    if (!endpoint) {
      throw new Error(`Trying to use an unkown endpoint: ${name}`);
    }
    return Utils.formatURL(`${this.url}${endpoint}`, Object.assign({}, parameters));
  }

  getMockedData(data) {
    return this._post(this._getEndpoint('getMockedData'), data);
  }

  /**
   * Makes a GET request.
   * @param {String} url    The request URL.
   * @param {Object} config A config object that will be merged with the default request data.
   * @return {Promise}
   */
  _get(url, config = {}) {
    return axios(Object.assign({
      method: 'GET',
      url,
    }, config));
  }

  /**
   * Makes a POST request.
   * @param {String} url    The request URL.
   * @param {Object} data   The data you want to send as the request body.
   * @param {Object} config A config object that will be merged with the default request data.
   * @return {Promise}
   */
  _post(url, data, config = {}) {
    return axios(Object.assign({
      method: 'POST',
      url,
      data,
    }, config));
  }
}

export default Api;
