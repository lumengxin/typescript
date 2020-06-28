/* 全局类型，类型定义（描述）文件 */
/* // 声明一个全局变量 $
// declare var $: (param: () => void) => void;

// 定义一个全局函数
// declare function $(param: () => void): void;
// // 同名函数重载
// declare function $(param: string): {
//   html: (html: string) => {};
// };

// 优化：
interface JqueryInterface {
  html: (html: string) => JqueryInterface;
}
// 1.函数重载
declare function $(readyFunc: () => void): void;
declare function $(selector: string): JqueryInterface;
// 声明一个对象
declare namespace $ {
  namespace fn {
    class init {}
  }
}

// 2.使用interface语法，实现函数重载
// interface JQuery {
//   (readyFunc: () => void): void;
//   (selector: string): JqueryInterface;
// }
// declare var $: JQuery; */

/* es6 模块化 */
declare module "jquery" {
  interface JqueryInterface {
    html: (html: string) => JqueryInterface;
  }

  // 混合类型
  function $(readyFunc: () => void): void;
  function $(selector: string): JqueryInterface;
  namespace $ {
    namespace fn {
      class init {}
    }
  }

  export = $;
}