'use strict';

// had enabled by egg
// exports.static = true;

exports.oAuth2Server = {
  enable: true,
  package: 'egg-oauth2-server',
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
