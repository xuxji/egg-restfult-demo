'use strict';

module.exports = app => {

  // Topics
  app.get('/topics', 'topic.index');
  app.get('/topics/:id', 'topic.get');
  app.post('/topics', app.oAuth2Server.authenticate(), 'topic.create');
  app.put('/topics/:id', app.oAuth2Server.authenticate(), 'topic.update');
  app.del('/topics/:id', app.oAuth2Server.authenticate(), 'topic.destroy');

  app.get('/', 'home.index');
  app.all('/user/token', app.oAuth2Server.token());
  app.get('/private/get', app.oAuth2Server.authenticate(), 'home.index');
};
