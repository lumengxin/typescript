"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var crowller_1 = __importDefault(require("./crowller"));
var baiduAnalyzer_1 = __importDefault(require("./analyzer/baiduAnalyzer"));
var util_1 = require("./utils/util");
// 验证是否登录的中间件
var checkLogin = function (req, res, next) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        next();
    }
    else {
        // res.send('请先登录')
        res.json(util_1.getResponseData(null, '请先登录'));
    }
};
var router = express_1.Router();
router.get('/', function (req, res) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.send("\n      <html>\n        <body>\n          <a href=\"/getData\">\u722C\u53D6\u6570\u636E</a>\n          <a href=\"/showData\">\u5C55\u793A\u6570\u636E</a>\n          <a href=\"/logout\">\u9000\u51FA</a>\n        </body>\n      </html>\n    ");
    }
    else {
        res.send("\n      <html>\n        <body>\n          <form method=\"post\" action=\"/login\">\n            <input type=\"password\" name=\"password\" />\n            <button>\u63D0\u4EA4</button>\n          </form>\n        </body>\n      </html>\n    ");
    }
});
router.get('/logout', function (req, res) {
    if (req.session) {
        req.session.login = undefined;
    }
    // res.redirect('/')
    res.json(util_1.getResponseData(true));
});
router.post('/login', function (req, res) {
    // 解析body,form表单需要借助express中间件body-parser
    var password = req.body.password;
    var isLogin = req.session ? req.session.login : false;
    // console.log("req.session", req.session)
    if (isLogin) {
        // res.send('已经登录过')
        res.json(util_1.getResponseData(false, '已经登录过'));
    }
    else {
        if (password === '123' && req.session) {
            req.session.login = true;
            // res.send('登录成功')
            res.json(util_1.getResponseData(true));
        }
        else {
            // res.send('登录失败')
            res.json(util_1.getResponseData(false, '登录失败'));
        }
    }
});
router.get('/getData', checkLogin, function (req, res) {
    // 解析body,form表单需要借助express中间件body-parser
    // const {password} =req.body
    /* const isLogin = req.session ? req.session.login : false
  
    if (isLogin) {
      const url = `http://www.baidu.com/`
      const baiduAnalyzer = BaiduAnalytics.getInstance()
      new Crowller(url, baiduAnalyzer)
      res.send('getData success')
    } else {
      res.send(`${req.teacherName}, 请登录后再爬取内容`)
    } */
    var url = "http://www.baidu.com/";
    var baiduAnalyzer = baiduAnalyzer_1.default.getInstance();
    new crowller_1.default(url, baiduAnalyzer);
    // res.send('getData success')
    res.json(util_1.getResponseData(true));
});
router.get('/showData', checkLogin, function (req, res) {
    // const isLogin = req.session ? req.session.login : false
    // if (isLogin) {
    try {
        var position = path_1.default.resolve(__dirname, '../data/course.json');
        var result = fs_1.default.readFileSync(position, 'utf8');
        // res.json(JSON.parse(result))
        res.json(util_1.getResponseData(JSON.parse(result)));
    }
    catch (err) {
        // res.send('尚未爬取到内容\n' + err)
        res.json(util_1.getResponseData(false, '尚未爬取到内容'));
    }
    // } else {
    //   res.send('请登录后查看数据')
    //   // setTimeout(() => res.redirect('/login'), 2000)
    // }
});
exports.default = router;
