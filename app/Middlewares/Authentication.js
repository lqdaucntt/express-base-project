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

    req.user = auth.value;

    // Check token exist in token repo
    const response = await this.tokeRepo.get({ userId: req.user.id, token});

    if(!response) {
      const error = errorCode.invalid_token;
      return next(error);
    }

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

      req.user = auth.value;

      // Check token exist in token repo
      const response = await this.tokeRepo.get({ userId: req.user.id, token});

      if(!response) {
        const error = errorCode.invalid_token;
        return next(error);
      }

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
  
      req.user = auth.value;

      // Check token exist in token repo
      const response = await this.tokeRepo.get({ userId: req.user.id, token});
  
      if(!response) {
        const error = errorCode.invalid_token;
        return next(error);
      }
  
      // Check user is not an admin
      if (req.user.role !== ROLE_USER.admin) {
        const error = errorCode.user_not_permission;
        return next(error);
      }

      return next();
    } catch(e) {
      console.log(e);
    }
  }
}

module.exports = Authentication;
