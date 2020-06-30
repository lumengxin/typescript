// 属性的装饰器，只接受两个参数
// function nameDecorator(target: any, key: string): any {
//   // 改变属性的descriptor, 覆盖原来的
//   const descriptor: PropertyDescriptor = {
//     writable: false
//   }
//   return descriptor
// }

// const test5 = new Test5()
// test5.name = '泰勒'
// console.log(test5)


function nameDecorator(target: any, key: string): any {
  // 修改属性的值（只能改变原型上的name）
  target[key] = '泰勒'
}

class Test5 {
  @nameDecorator
  name = 'taylor'
}

const test5 = new Test5()
console.log(test5)
console.log((test5 as any).__proto__.name)
