var webCtrol = {
}

webCtrol.index = function(req, res){
  res.render('index', { 
    title: 'mysqlDemo 首页' ,
    // 暂时显示空数组
    users: []
  });
}

module.exports = webCtrol