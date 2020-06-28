"use strict";
define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Content = exports.Header = void 0;
    var Header = /** @class */ (function () {
        function Header() {
            var ele = document.createElement('h2');
            ele.innerText = 'this is header';
            document.body.appendChild(ele);
        }
        return Header;
    }());
    exports.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var ele = document.createElement('div');
            ele.innerText = 'this is content';
            document.body.appendChild(ele);
        }
        return Content;
    }());
    exports.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var ele = document.createElement('div');
            ele.innerText = 'this is footer';
            document.body.appendChild(ele);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
define("page", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* 打包后的amd规范不能直接在浏览器端运行 */
    var Page = /** @class */ (function () {
        function Page() {
            new components_1.Header();
            new components_1.Content();
            new components_1.Footer();
        }
        return Page;
    }());
    exports.default = Page;
});
var Components;
(function (Components) {
    var SubComponents;
    (function (SubComponents) {
        var Test = /** @class */ (function () {
            function Test() {
            }
            return Test;
        }());
        SubComponents.Test = Test;
    })(SubComponents = Components.SubComponents || (Components.SubComponents = {}));
    var Header = /** @class */ (function () {
        function Header() {
            var ele = document.createElement('h2');
            ele.innerText = 'this is header';
            document.body.appendChild(ele);
        }
        return Header;
    }());
    Components.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var ele = document.createElement('div');
            ele.innerText = 'this is content';
            document.body.appendChild(ele);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var ele = document.createElement('div');
            ele.innerText = 'this is footer';
            document.body.appendChild(ele);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
// 加上之后，可以直接直观看到引用关系
///<reference path="./components.ts" />
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            this.user = {
                name: 'zhang'
            };
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
