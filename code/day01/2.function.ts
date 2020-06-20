function add (first: number, second: number): number {
  // return first + second + ''
  return first + second
}
const totals = add(3, 4)

function sayHello(): void {
  console.log('hello')
  // void: 不能有返回值
  // return ''
}

function errorEmitter(): never {
  throw new Error()
  // never: 函数永远不可能执行完
  console.log(222)
}

function add3({ first, second }: 
  {first: number, second: number}
): number {
  return first + second
}
const total3 = add3({first: 1, second: 3})

function getNumber({first}: {first: number}) {
  return first
}
