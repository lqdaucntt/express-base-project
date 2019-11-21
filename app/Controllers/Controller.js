'use strict';

class Controller {
  /**
   * response for another error requests
   * @param res
   * @param options
   * @returns {*}
   */
  errorResponse (res, options) {
    return res.status(400).send({
      status: options.status || 400,
      data: options.data || null,
      message: options.message || 'bad_request',
      error: options.error || 400,
    });
  }

  /**
   * response for success requests
   * @param res
   * @param options
   * @returns {*}
   */
  successResponse (res, options) {
    return res.status(200).send({
      status: options.status || 200,
      data: options.data || null,
      message: options.message || 'success',
      error: 0,
    });
  }

  /**
   * response for create requests
   * @param res
   * @param options
   * @returns {*}
   */
  createdResponse (res, options) {
    return res.status(201).send({
      status: options.status || 201,
      data: options.status || 201,
      message: options.message || 'success',
      error: 0,
    });
  }

  /**
   * response when server error
   * @param res
   * @param options
   * @returns {*}
   */
  systemErrorResponse (res, options) {
    return res.status(500).send({
      status: options.status || 500,
      data: options.data || null,
      message: options.message || 'system_error',
      error: 500,
    });
  }

  /**
   * unauthorized response
   * @param res
   * @param options
   * @returns {*|Socket|Namespace|void}
   */
  unauthorizedResponse (res, options) {
    return res.status(401).send({
      status: options.status || 401,
      data: options.data || null,
      message: options.message || 'unauthorized_request',
      error: 500,
    });
  }
}

module.exports = Controller;
