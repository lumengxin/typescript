interface Bird {
  fly: boolean
  sing: () => {}
}

interface Dog {
  fly: boolean
  bark: () => {}
}

// 类型断言的方式
function trainAnimal(animal: Dog | Bird) {
  // animal.sing()
  // 通过if逻辑和as类型断言进行类型保护
  if (animal.fly) {
    (animal as Bird).sing()
  } else {
    (animal as Dog).bark()
  }
}

// in语法
function trainAnimalSce(animal: Dog | Bird) {
  if ('sing' in animal) {
    animal.sing()
  } else {
    animal.bark()
  }
}

// typeof
function add(first: string | number, second: string | number) {
  // return first + second
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}+${second}`
  } else {
    return first + second
  }
}

// instanceof (使用类定义的接口)
class NumberObj {
  count: number
}
function addSec(first: object | NumberObj, second: object | NumberObj) {
  // return first.count + second.count
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count
  }
  return 0
}