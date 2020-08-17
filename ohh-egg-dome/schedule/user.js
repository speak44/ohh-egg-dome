module.exports={
  // 30秒之后执行
  interval:"30 * * * * *",
  handler(){
    console.log('定时任务 每分钟30秒执行一次'+ new Date())
  }
}