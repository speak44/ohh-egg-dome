#!/usr/bin/env node 
// 以sheel 脚本的形式来执行
// 执行解释器类型是node。使用node去执行
// 程序执行入口bin
// 整个程序入口文件mycli

// console.log('cli.....')

// 定制命令行界面的介绍
// 比如我们执行 vue cli 的时候，出来的命令行界面
const program = require('commander')

// -v 时候 的版本号。我们直接用package上的version字段
program.version(require('../package.json').version)

// 创建，命令，命令行定制 
// <name> 代表参数
program
    .command('init <name>')
    .description('init project') //描写
    .action(require('../lib/init')
    )
    console.log('process.argv', process.argv)
  program.parse(process.argv)// 现在进程的argv，最后一行是固定的


