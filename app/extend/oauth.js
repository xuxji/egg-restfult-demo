'use strict';

/*
其中获取 token 的 API app.oauth.grant() 依次调用上述 API 的顺序是：
getClient --> grantTypeAllowed --> getUser --> saveAccessToken

验证 token 正确性的中间件 app.oauth.authorise() 只调用 getAccessToken
*/

const path = require('path');
const nconf = require('nconf');

module.exports = app => {

  // Mock Data
  nconf.use('file', {
    file: path.join(app.config.baseDir, 'app/mock/db.json'),
  });

  class Model {
    constructor(ctx) {
      this.ctx = ctx;
    }

    async getClient(clientId, clientSecret) {
      const client = nconf.get('client');
      if (clientId !== client.clientId || clientSecret !== client.clientSecret) {
        return;
      }
      return client;
    }

    async getUser(username, password) {
      const user = nconf.get('user');
      if (username !== user.username || password !== user.password) {
        return;
      }
      return { userId: user.id };
    }

    async getAccessToken(bearerToken) {
      const token = nconf.get('token');
      token.accessTokenExpiresAt = new Date(token.accessTokenExpiresAt);
      token.refreshTokenExpiresAt = new Date(token.refreshTokenExpiresAt);
      const user = nconf.get('user');
      const client = nconf.get('client');
      token.user = user;
      token.client = client;
      return token;
    }

    async saveToken(token, client, user) {
      const _token = Object.assign({}, token, { user }, { client });
      nconf.set('token', _token);
      nconf.save();
      return _token;
    }
  }

  return Model;
};
