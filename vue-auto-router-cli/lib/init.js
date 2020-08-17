
// 打印欢迎界面
const {clone} =require('./download')
const {promisify} = require('util')

const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')

const log=content=>console.log(chalk.green(content))
module.exports = async name=>{
  //清屏幕
  clear()
  // 打印
  const data= await figlet('mycli-ohh Welocome')
  log(data)
  // 克隆
  log('🚀创建项目：'+name) //  name是传进来的参数，创建的项目名称
  // 当我们去执行 myclie init abc 时，相当于把项目克隆下来，放在abc文件里面
  await clone('github:su37josephxia/vue-template', name)
}