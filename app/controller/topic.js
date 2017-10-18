'use strict';

const Controller = require('egg').Controller;

class TopicController extends Controller {
  async index() {
    const topicList = await this.ctx.service.topic.findAll();
    this.ctx.body = {
      success: true,
      data: topicList,
    };
    this.ctx.status = 200;
  }

  async get() {
    const params = this.ctx.params;
    const { id } = params;
    const topic = await this.ctx.service.topic.find(id);
    this.ctx.body = {
      success: true,
      data: topic,
    };
    this.ctx.status = 200;
  }

  async create() {
    const id = await this.ctx.service.topic.create(this.ctx.request.body);
    this.ctx.body = {
      success: true,
      data: id,
    };
    this.ctx.status = 201;
  }

  async update() {
    const queries = this.ctx.params;
    const { id } = queries;
    const params = this.ctx.request.body;
    const result = await this.ctx.service.topic.update(id, params);
    this.ctx.body = {
      success: true,
      data: result,
    };
    this.ctx.status = 200;
  }

  async destroy() {
    const params = this.ctx.params;
    const { id } = params;
    const result = await this.ctx.service.topic.destroy(id);
    this.ctx.body = {
      success: true,
      data: result,
    };
    this.ctx.status = 200;
  }
}
module.exports = TopicController;
