"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
function use(middleware) {
    return function (target, key) {
        // Reflect.defineMetadata('middleware', middleware, target, key)
        var originMiddleware = Reflect.getMetadata('middlewares', target, key) || [];
        originMiddleware.push(middleware);
        Reflect.defineMetadata('middlewares', originMiddleware, target, key);
    };
}
exports.use = use;
