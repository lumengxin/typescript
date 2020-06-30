// 普通方法，target 对应的是类的 prototype
// 静态方法，target 对应的是类的 构造函数
function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  // console.log(target, key)
  // 对方法做一些改变。类似 Object.defineProperty()
  // descriptor.writable = true
  descriptor.value = function() {
    return 'hahaha'
  }
}

class Test3 {
  name: string
  constructor(name: string) {
    this.name = name
  }
  @getNameDecorator
  getName() {
    return this.name
  }
  // static getName() {
  //   return '111'
  // }
}

const test3 = new Test3('zhangfei')
// test3.getName = () => {
//   return '张飞'
// }
console.log(test3.getName())