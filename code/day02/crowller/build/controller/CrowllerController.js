"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrowllerController = void 0;
require("reflect-metadata");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var decorator_1 = require("../decorator");
var util_1 = require("../utils/util");
var crowller_1 = __importDefault(require("../crowller"));
var baiduAnalyzer_1 = __importDefault(require("../analyzer/baiduAnalyzer"));
var checkLogin = function (req, res, next) {
    // isLogin: any -> boolean
    var isLogin = !!(req.session ? req.session.login : false);
    console.log('checkLogin middleware');
    if (isLogin) {
        next();
    }
    else {
        res.json(util_1.getResponseData(null, '请先登录'));
    }
};
var test = function (req, res, next) {
    console.log('test middleware');
    next();
};
// @controller('/abc') // localhost:7001/abc/showData
var CrowllerController = /** @class */ (function () {
    function CrowllerController() {
    }
    CrowllerController.prototype.getData = function (req, res) {
        var url = "http://www.baidu.com/";
        var baiduAnalyzer = baiduAnalyzer_1.default.getInstance();
        new crowller_1.default(url, baiduAnalyzer);
        res.json(util_1.getResponseData(true));
    };
    CrowllerController.prototype.showData = function (req, res) {
        try {
            var position = path_1.default.resolve(__dirname, '../../data/course.json');
            var result = fs_1.default.readFileSync(position, 'utf8');
            res.json(util_1.getResponseData(JSON.parse(result)));
        }
        catch (err) {
            res.json(util_1.getResponseData(false, '尚未爬取到内容'));
        }
    };
    __decorate([
        decorator_1.get('/getData'),
        decorator_1.use(checkLogin),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], CrowllerController.prototype, "getData", null);
    __decorate([
        decorator_1.get('/showData')
        // 'middleware'元数据会被覆盖
        ,
        decorator_1.use(test),
        decorator_1.use(checkLogin),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], CrowllerController.prototype, "showData", null);
    CrowllerController = __decorate([
        decorator_1.controller('/api')
    ], CrowllerController);
    return CrowllerController;
}());
exports.CrowllerController = CrowllerController;
