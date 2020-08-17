'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.product.getAll()
    await ctx.render('index.html',{
      res,
      list:['a','b','c']
    })

    // ctx.body = res;
  }
}

module.exports = HomeController;
