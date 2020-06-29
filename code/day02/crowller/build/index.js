"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var app = express_1.default();
// 问题1：express库的类型定义文件.d.ts文件类型描述不准确
// 问题2：使用中间件时，对req或者res做了修改后，实际上的类型并不能改变
// app.get('/', (req: Request, res: Response) => {
//   res.send('hello')
// })
// app.get('/getData', (req: Request, res: Response) => {
//   res.send('byb byb')
// })
app.use(body_parser_1.default.urlencoded({ extended: false }));
// 自定义中间件。函数，接收三个参数
app.use(function (req, res, next) {
    req.teacherName = 'zhang';
    next();
});
app.use(cookie_session_1.default({
    name: 'session',
    keys: ['techer zhang'],
    maxAge: 24 * 3600 * 1000
}));
app.use(router_1.default);
app.listen(7001, function () {
    console.log('server is running at: http://localhost:7001');
});
