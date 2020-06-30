// new (...args: any[]) => any : 构造函数接收若干any类型参数，返回一个any。T : 包含构造函数的‘类’
/* function testDecorator2<T extends new (...args: any[]) => any>(constructor: T) {
  return class extends constructor {
    name = 'zhangsan'
    getName() { 
      return this.name 
    }
  }
}

// 实验性语法。需要修改配置项。在定义类时执行，不是实例化
// 多个装饰器时，执行顺序相反（从下到上，从右到左）
// @testDecorator
@testDecorator2
class Test2 {
  name: string
  constructor(name: string) {
    console.log(11)
    this.name = name
    console.log(22)
  }
}

const test2 = new Test2('Dell')
// 装饰器添加的无法直接获取
// test2.getName()  // ;(test2 as any).getName() */


function testDecorator2() {
  return function <T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
      name = 'lily'
      getName() { 
        return this.name 
      }
    }
  }
}

const Test2 = testDecorator2()(
  class {
    name: string
    constructor(name: string) {
      this.name = name
    }
  }
)

const test2 = new Test2('Dell')
console.log(test2.getName())


