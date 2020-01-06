const express = require('express');
const router = express.Router();
const api = require('./api');

// post方法通过body获取参数，需要使用body-parser，否则body为空
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

router.use(bodyParser.urlencoded({
  extended: false
}));

router.post('/spring_boot/user/login', (req, res, next) => {
  api.login(req, res, next);
})

router.post('/spring_boot/user/getUserInfo', (req, res, next) => {
  api.getUserInfo(req, res, next);
})


module.exports = router;
