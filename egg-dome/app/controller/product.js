const {Controller} = require('egg')

class ProductController extends Controller {
  async index(){
    const {ctx} = this
    const res = await ctx.service.product.getAll()
    ctx.body=res
  }
  async detail(){
    const {ctx} =this
    // console.log(ctx.query)/
    ctx.body =`look over here id=${ctx.query.id}`
  }
  async detail2(){
    const {ctx}=this
    ctx.body=`detail2-----${ctx.params.cid}`
  }
  async create(){
    const {ctx}=this
    console.log(ctx.request.body,'ererer');
    ctx.body={
      id:123
    }
  }
  async deletename(){
    const {ctx}= this
    ctx.body={
      dele_id:ctx.params.id
    }
  }
  async update(){
    const {ctx} =this
    ctx.body={
      id:ctx.params.id
    }
  }
}

module.exports = ProductController