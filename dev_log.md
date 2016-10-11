# 开发日志：

## 2016-10-04
* 工程背景：生产开发中 mysql + nodejs比 mongodb + nodejs更主流。
* 项目工程中的[debug](https://www.npmjs.com/package/debug)模块后续将去除， 因为习惯了inspector调试：[nodejs调试](http://i5ting.github.io/node-debug-tutorial/)

## 2016-10-05
* 完成nodejs连接mysql代码， [教程](http://www.cnblogs.com/whoamme/p/3459071.html)
* [mac navicat 破解版下载](http://download.csdn.net/detail/lpluck08/5122765)；

## 2016-10-06
* express 的主流模板引擎：`jade`已更名为 [pug](https://pugjs.org/api/getting-started.html)
* 完成 express骨架，[官方教程](http://www.expressjs.com.cn/starter/installing.html)

## 2016-10-07
* 完成mysql数据库连接, [常用mysql语句](http://www.cnblogs.com/zhangzhu/archive/2013/07/04/3172486.html)
* mysql库完成读写数据库操作:[mysql](https://www.npmjs.com/package/mysql)

## 2016-10-11
* [nodejs forever用法简介](http://tcrct.iteye.com/blog/2043644)
* [forever github](https://github.com/foreverjs/forever)
* 打印的信息太多，上线得去除；
* forever 无法关闭日志文件记录，只能指定输出日志的文件名称(默认在 ~/.forever/forever.log 生成日志文件)：
```
forever start -a -l out.log app.js  
```