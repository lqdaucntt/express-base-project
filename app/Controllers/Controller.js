/**
 * Created by daulq on 3/8/18.
 */

class Controller {

  /**
   * response for invalid requests
   *
   * @param res
   * @param options
   * @returns {*}
   */
  invalidResponse(res, options) {
    let {
      status,
      data,
      message,
      error
    } = options;

    status = status || 400;
    data = data || null;
    message = message || 'bad_request';
    error = error || 400;

    return res.status(200).send({
      status,
      data,
      message,
      error
    });
  }

  /**
   * response for another error requests
   *
   * @param res
   * @param options
   * @returns {*}
   */
  errorResponse(res, options) {
    let {
      status,
      data,
      message,
      error
    } = options;

    status = status || 400;
    data = data || null;
    message = message || 'bad_request';
    error = error || 400;

    return res.status(200).send({
      status,
      data,
      message,
      error
    });
  }

  /**
   * response for success requests
   *
   * @param res
   * @param options
   * @returns {*}
   */
  successResponse(res, options) {
    let {
      status,
      data,
      message,
      error
    } = options;

    status = status || 200;
    data = data || null;
    message = message || 'success';
    error = 0;

    return res.status(status).send({
      status,
      data,
      message,
      error
    });
  }

  /**
   * response for create requests
   *
   * @param res
   * @param options
   * @returns {*}
   */
  createdResponse(res, options) {
    let {
      status,
      data,
      message,
      error
    } = options;

    status = status || 201;
    data = data || null;
    message = message || 'success';
    error = 0;

    return res.status(status).send({
      status,
      data,
      message,
      error
    });
  }

  /**
   * response when server error
   *
   * @param res
   * @param options
   * @returns {*}
   */
  errorServerResponse(res, options) {
    let {
      status,
      data,
      message,
      error
    } = options;

    status = status || 500;
    data = data || null;
    message = message || 'error_server';
    error = 500;

    return res.status(200).send({
      status,
      data,
      message,
      error
    });
  }

  /**
   * responseSuccess function.
   * @param res
   * @param response
   * @returns {*}
   */
  responseSuccess(res, response) {
    if(response.error) {
      return this.errorResponse(res, response);
    }
    return this.successResponse(res, response);
  }

  /**
   * createSuccess function.
   * @param res
   * @param response
   * @returns {*}
   */
  createSuccess(res, response) {
    if(response.error) {
      return this.errorResponse(res, response);
    }

    return this.createdResponse(res, response);
  }
}

module.exports = Controller;
