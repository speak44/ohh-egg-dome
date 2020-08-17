const {Service} = require('egg');
class ProductService extends Service{
  async getAll(){
    return {
      id: 1,
      name: '测试数据'
    }
    // return await this.ctx.model.Product.findAll()
  }
}

module.exports = ProductService