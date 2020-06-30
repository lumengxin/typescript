// 类的装饰器。@符号使用
// 对类增加额外的修饰。本身是一个函数
// function testDecorator(constructor: any) {
//   // console.log('ddd')
//   constructor.prototype.getName = () => {
//     console.log('dell')
//   }
// }
function testDecorator(flag: boolean) {
  if (flag) {
    return function(constructor: any) {
      constructor.prototype.getName = () => {
        console.log('dell')
      }
    }
  } else {
    return function(constructor: any) {}
  }
  
}


// 实验性语法。需要修改配置项。在定义类时执行，不是实例化
// 多个装饰器时，执行顺序相反（从下到上，从右到左）
// @testDecorator
@testDecorator(true)
class Test {}

const test = new Test()
;(test as any).getName()
