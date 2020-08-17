module.exports = app=>({
  // index: async ctx=>{
  //   ctx.body = "柯里化-首页"
  // },
  // 这里需要用上app， 所以需要整个对象进行升阶
  index: async ctx=>{
    const name= await app.$service.user.getName()
    app.ctx.body = name
  },

  detail:ctx=>{
    ctx.body="柯里化-详请页面"
  }
})