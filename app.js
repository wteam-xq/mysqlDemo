var express = require('express'),
    path = require('path'),
    // 显示网站icon的中间件
    favicon = require('serve-favicon'),
    // 在控制台中，显示req请求信息(上线注释)： GET /200 39.753 ms - 1126
    logger = require('morgan'),
    // 读取cookie
    cookieParser = require('cookie-parser'),
    // 对post请求参数的解析
    bodyParser = require('body-parser');

var routes = require('./routes/index'),
    admin = require('./routes/admin'),
    MysqlObj = require('./models/mysql_obj'),
    UserObj = require('./models/user_obj');

var app = express();

// 连接数据库
MysqlObj.init();
// 用户数据库对象初始化
UserObj.init();

// 设置模板引擎（设置为最新jade-pug）
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// 显示小图标、读取缓存、读取请求参数
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/favicon.ico'));

app.use('/', routes);
app.use('/admin', admin);

// 404 页面处理
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// 错误处理， 错误页面显示异常内容
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
