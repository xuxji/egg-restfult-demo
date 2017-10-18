'use strict';

const Service = require('egg').Service;

class Topic extends Service {

  constructor(ctx) {
    super(ctx); // 必须要有ctx，才能通过this.app拿到app
    this.db = this.app.mysql;
    this.table = 'topic';
  }

  async findAll() {
    const topics = await this.db.select(this.table);
    return topics;
  }

  async find(id) {
    const topic = await this.db.get(this.table, { id });
    return topic;
  }

  async create(topic) {
    const result = await this.db.insert(this.table, topic);
    console.log(result);
    if (result.affectedRows === 1) {
      return result.insertId;
    }
  }

  async update(id, topic) {
    const result = await this.db.update(this.table, topic, { id });
    console.log(result);
    if (result.affectedRows === 1) {
      return result.affectedRows;
    }
  }

  async destroy(id) {
    const result = await this.db.delete(this.table, { id });
    console.log(result);
    return result.affectedRows;
  }
}

module.exports = Topic;
