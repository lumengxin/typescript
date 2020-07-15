"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = exports.get = void 0;
var Methods;
(function (Methods) {
    Methods["get"] = "get";
    Methods["post"] = "post";
})(Methods || (Methods = {}));
/* 工厂函数，生成各种装饰器，如post,get,put... */
function getRequestDecorator(type) {
    return function (path) {
        return function (target, key) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', type, target, key);
        };
    };
}
exports.get = getRequestDecorator(Methods.get);
exports.post = getRequestDecorator(Methods.post);
// export const put = getRequestDecorator('put')
