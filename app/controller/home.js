'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  * index() {
    this.ctx.body = 'hi, egg11';
    this.ctx.status = 200;
  }
}
module.exports = HomeController;
