'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1508227270916_8409';

  config.oAuth2Server = {
    debug: config.env === 'local',
    grants: [ 'password', 'client_credentials' ],
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  // add your config here
  config.middleware = [];

  return config;
};
