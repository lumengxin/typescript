"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = __importDefault(require("cheerio"));
var fs_1 = __importDefault(require("fs"));
var BaiduAnalyzer = /** @class */ (function () {
    function BaiduAnalyzer() {
    }
    BaiduAnalyzer.getInstance = function () {
        if (!BaiduAnalyzer.instance) {
            BaiduAnalyzer.instance = new BaiduAnalyzer();
        }
        return BaiduAnalyzer.instance;
    };
    BaiduAnalyzer.prototype.getCourseInfo = function (html) {
        var $ = cheerio_1.default.load(html);
        var bookBox = $('.hotsearch-item');
        var courseInfo = [];
        bookBox.map(function (index, element) {
            var descs = $(element).find('span');
            var rank = parseInt(descs.eq(0).text(), 10);
            var title = descs.eq(1).text();
            courseInfo.push({ rank: rank, title: title });
        });
        return {
            time: new Date().getTime(),
            data: courseInfo
        };
    };
    BaiduAnalyzer.prototype.generateJsonContent = function (courseInfo, filePath) {
        var fileContent = {};
        if (fs_1.default.existsSync(filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, 'utf8'));
        }
        fileContent[courseInfo.time] = courseInfo.data;
        return fileContent;
    };
    BaiduAnalyzer.prototype.analyzer = function (html, filePath) {
        var courseInfo = this.getCourseInfo(html);
        var fileContent = this.generateJsonContent(courseInfo, filePath);
        return JSON.stringify(fileContent);
    };
    return BaiduAnalyzer;
}());
exports.default = BaiduAnalyzer;
