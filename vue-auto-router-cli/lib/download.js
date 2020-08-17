const {promisify} =require('util')


// 实现一个clone函数，远程去拉取
// 是一个异步函数
module.exports.clone = async function (repo,desc) {
  // repo,从哪拉
  // desc 拉到哪里去
  const download=  promisify(require('download-git-repo'))

  //进度条
  const ora = require('ora')
  // 进度条内容
  const process = ora(`下载....${repo}`)
  // 开启进度条
  process.start()
  // 开始下载
  await download(repo,desc)
  //显示完成
  process.succeed()
}