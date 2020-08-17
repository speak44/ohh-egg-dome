// 数据库配置
module.exports = {
  db:{
    dialect:'mysql',
    host:'localhost',
    database:'ohh',
    username:'root',
    password:'example'
  },
  // 中间件配置，定义为数组
  middleware:[
    // 中间件的名字
    'logger'
  ]
}