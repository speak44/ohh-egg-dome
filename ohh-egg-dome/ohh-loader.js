const fs = require('fs')
const path= require('path')
const Router = require('koa-router')


function load(dir, cb){
  // 加工成绝对路径
  const url = path.resolve(__dirname, dir)
  // 列表
  const files = fs.readdirSync(url)
  // 遍历
  files.forEach(filename=>{
    // 将 user.js 中的js去掉
    filename = filename.replace('.js','')
    const file = require(url+'/'+filename)
    cb(filename,file)
  })
}

function initRouter(app){
  const router =new Router()
  load('routes',(filename, routes)=>{
    // 是index 路径直接是/ 如果是别的前缀，那么就需要拼接： /user
    const prefix =filename ==='index'?'':`/${filename}`
    // 判断传进来的是柯里化函数
    routes = typeof routes === 'function' ? routes(app): routes
    Object.keys(routes).forEach(key=>{
      const [method,path] = key.split(' ')
      console.log(`正在映射地址： ${method.toLocaleUpperCase()} ${prefix}${path}`)
      // router[method](prefix + path, routes[key])
      router[method](prefix + path, async ctx=>{
        app.ctx =ctx
        await routes[key](app)
      })
    })
  })
  // console.log('router', router);
  return router
}
// controller 加载进来
function initController(app){
  const controllers={}
  load('controller', (filename, controller)=>{
    // console.log('controller-filename', filename, controller);
    controllers[filename] = controller(app)
  })
  console.log(controllers,'controllers')
  return controllers
}

// 加载service文件
function initService(app){
  const services={}
  // filename 在service 中的文件名称； 
  // service  在文件中默认导出对象的内容
  load('service',(filename,service)=>{
    services[filename]= service(app)
  })
  return services
}

// 主要功能是自动加载config函数，判断里面是有数据库相应的配置，自动初始化数据库
const Sequelize = require('sequelize')
function loadConfig(app){
  load('config', (filename,conf)=>{
     if(conf.db){
       console.log('加载数据库');
        app.$db = new Sequelize(conf.db)
        
        // 加载模型
        app.$model = {} 
        load('model',(filename, {schema, options})=>{
          // 创建模型
          app.$model[filename] = app.$db.define(filename,schema,options)
        })
        app.$db.sync()
     }
     // 如果有中间件配置
     if(conf.middlerware){
      // 不需要load，不用全部加载。所以依次加载

      // 首先处理绝对路径
      // 三段体， /xxx+ '/middleware/'+ 'logger'
      const midPath =path.resolve(_dirname,'middleware', mid)
      app.$app.use(require(midPath))
     }
  })
}

const schedule = require('node-schedule')
function initschecule(){
  load('schedule',(filename, scheduleConfig)=>{
    schedule.scheduleJob(scheduleConfig.interval,  scheduleConfig.handler)
  })
}

module.exports = {initRouter, initController, initService, loadConfig ,initschecule}