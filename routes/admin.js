var express = require('express');
var router = express.Router();
var adminControl = require('../control/adminCtrl');

/* 后台首页 */
router.get('/', adminControl.userList);

/* 新增用户 */
router.route('/user/add')
.get(adminControl.addUser)
.post(adminControl.addUserPost);

/* 更新用户 */
router.route('/user/update')
.get(adminControl.updateUser)
.post(adminControl.updateUserPost);

/* 删除用户 */
router.post('/user/delete', adminControl.deleteUser);

module.exports = router;
