const JWT = require('json-web-token');
const { Env, ROLE_USER } = require('../../config/index');

const TokenRepository = require('../Repositories/TokenRepository');

class Authentication {
  constructor() {
    this.tokeRepo = new TokenRepository();
  }

  /**
   * Authenticate User
   *
   * @param req 
   * @param res 
   * @param next 
   * @returns {Promise<*>}
   */
  async auth(req, res, next) {
    
    // Get token from header
    const token = req.header('Authorization');

    if(!token) {
      const error = errorCode.not_authentication;
      return next(error);
    }

    // Decode token
    const auth = await JWT.decode(Env.APP_KEY,token);

    if(auth.error) {
      const error = errorCode.not_authentication;
      return next(error);
    }

    // write your code...

    return next();
  }

  /**
   * Authenticate User
   *
   * @param req
   * @param res
   * @param next
   * @returns {Promise<*>}
   */
  async noAuth(req, res, next) {

    // Get token from header
    const token = req.header('Authorization');

    if(!token) {
      return next();
    } else {
      // Decode token
      const auth = await JWT.decode(Env.APP_KEY,token);

      if(auth.error) {
        const error = errorCode.not_authentication;
        return next(error);
      }

      // write your code...

      return next();
    }

  }

  /**
   * Authenticate request from an Admin
   *
   * @param req 
   * @param res 
   * @param next 
   * @returns {Promise<*>}
   */
  async authAdmin(req, res, next) {
    try {

      // Get token from header
      const token = req.header('Authorization');

      if(!token) {
        const error = errorCode.not_authentication;
        return next(error);
      }
      
      // Decode token
      const auth = await JWT.decode(Env.APP_KEY, token);
  
      if(auth.error) {
        const error = errorCode.not_authentication;
        return next(error);
      }
  
      // write your code.

      return next();
    } catch(e) {
      console.log(e);
    }
  }
}

module.exports = Authentication;
