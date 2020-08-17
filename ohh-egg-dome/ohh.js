const Koa = require('koa')
const {initRouter, initController, initService, loadConfig ,initschecule} = require('./ohh-loader')

class ohh{
  constructor(conf){
    this.$app = new Koa(conf)
    loadConfig(this)
    this.$service = initService(this)
    this.$ctrl =initController(this)
    this.$router =initRouter(this) // 把this传进来，在
    this.$app.use(this.$router.routes())
    initschecule()
  }
  start(port){
    this.$app.listen(port, ()=>{
      console.log('服务启动 at '+ port);
    })
  }
}

module.exports = ohh