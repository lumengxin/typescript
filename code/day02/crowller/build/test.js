"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ts 引用 js， 通过.d.ts翻译 npm install @types/superagent -D
var superagent_1 = __importDefault(require("superagent"));
// const {readFile, writeFile} = require('fs')
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var Crowller = /** @class */ (function () {
    function Crowller() {
        // private secret = 'secretKey'
        // private url = `http://127.0.0.1:3000/typescript/test-crowller.html?secret=${this.secret}`
        // private url = `http://www.baidu.com/`
        this.url = "https://www.99csw.com/";
        this.filePath = path_1.default.resolve(__dirname, '../data/test.json');
        this.initSpiderProcess();
    }
    /* saveRawHtml(crowHtml: string) {
      return new Promise((resolve, reject) => {
        writeFile('crowHtml.html', crowHtml, (err: string) => {
          if (!err) {
            console.log('文件保存成功.')
            resolve()
          } else {
            reject('保存失败' + err)
          }
        })
      })
    } */
    Crowller.prototype.getCourseInfo = function (html) {
        var courseInfo = [];
        /*  const $ = cheerio.load(html)
         const bookBox = $('.hotsearch-item')
        
         bookBox.map((index, element) => {
           const descs = $(element).find('span')
           const rank = parseInt(descs.eq(0).text(), 10)
           const title = descs.eq(1).text()
           courseInfo.push({rank, title})
         }) */
        return {
            time: new Date().getTime(),
            data: courseInfo
        };
    };
    Crowller.prototype.getRawHtml = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, superagent_1.default.get(this.url)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.text
                            // this.saveRawHtml(result.text)
                        ];
                }
            });
        });
    };
    Crowller.prototype.generateJsonContent = function (courseInfo) {
        var fileContent = {};
        if (fs_1.default.existsSync(this.filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(this.filePath, 'utf8'));
        }
        fileContent[courseInfo.time] = courseInfo.data;
        return fileContent;
    };
    Crowller.prototype.writeFile = function (content) {
        fs_1.default.writeFileSync(this.filePath, content);
    };
    Crowller.prototype.initSpiderProcess = function () {
        return __awaiter(this, void 0, void 0, function () {
            var html, courseInfo, fileContent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRawHtml()];
                    case 1:
                        html = _a.sent();
                        courseInfo = this.getCourseInfo(html);
                        console.log("Crowller -> initSpiderProcess -> courseInfo", courseInfo);
                        fileContent = this.generateJsonContent(courseInfo);
                        this.writeFile(JSON.stringify(fileContent));
                        return [2 /*return*/];
                }
            });
        });
    };
    return Crowller;
}());
var crowller = new Crowller();
/* 1.指定元素生成pdf */
// const browser = await puppeteer.launch();
// const page = await browser.newPage();
// await page.goto('https://www.google.com/', {waitUntil: 'networkidle2'});
// const dom = await page.$eval('div.jsb', (element) => {
//      return element.innerHTML
// }) // Get DOM HTML
// await page.setContent(dom)   // HTML markup to assign to the page for generate pdf
// await page.pdf(options)
/* 2.将jquery注入puppeteer页面 */
// import { launch } from 'puppeteer'
// (async () => {
//     const browser = await launch({headless: false});
//     const page = await browser.newPage();
//     await page.goto('https://example.com', {waitUntil: 'networkidle'});
//     await page.addScriptTag({url: 'https://code.jquery.com/jquery-3.2.1.min.js'});
//     await page.close();
//     await browser.close();
// })();
// await page.addScriptTag({ url: 'https://code.jquery.com/jquery-3.2.1.min.js' });
// const title = await page.evaluate(() => {
//   const $ = window.$; //otherwise the transpiler will rename it and won't work
//   return $('h1 > span').text();
// });
