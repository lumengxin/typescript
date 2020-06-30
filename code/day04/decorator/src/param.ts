// 方法的参数的装饰器。原型、方法名、参数所在的位置
function paramDecorator(target: any, method: string, paramIndex: number) {
  console.log(target, method, paramIndex)
}

class Test6 {
  getInfo(name: string, @paramDecorator age: number) {
    console.log(name, age)
  }
}

const test6 = new Test6()
test6.getInfo('li', 22)
