module.exports= {
  // 时间间隔 crontab 时间间隔的字符串
  // */ 表示先执行一次，3秒后，在执行。
  interval:'*/3 * * * * *', // 3秒执行一次
  handler(){
    console.log('定时任务，每三秒执行一次'+ new Date());

  }
}