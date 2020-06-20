// js:动态类型
/* let a = 123
a = '34' */

// ts:静态类型
let b: number = 123
b = 45

/* ts优势
 * 支持类型检查
 * 更友好的代码提示
 * 代码语义更清晰易懂
 */
// type Point = {x: number, y: number}
interface Point {
  x: number
  y: number
}

function demo(data: Point) {
  console.log('bbb')
  return Math.sqrt(data.x ** 2 + data.y ** 2)
}
demo({ x: 3, y: 4 })

/* 静态类型理解 */
// count为一个number静态类型
const count: number = 2020
// count具备number类型所有属性和方法(自动提示)
count.toString()
const point1: Point = {
  x: 6,
  y: 8,
}

/* 
基础类型：null,undefined,symbol,boolean,void
对象类型：object,array,function
*/
class Person {}

const numbers: number[] = [1, 2, 3]
const dell: Person = new Person()
const getTotal: () => number = () => {
  return 122
}

/* 
type annotation 类型注解
type inference 类型推断
*/
let count2: number // 类型注解，告诉ts变量是什么类型
count2 = 123

let countInference = 123  // 类型推断，ts会自动去尝试分析变量类型（光标移动变量上）

const fristNumber = 1
const secondNumber = 34
// 自动推算出total类型，不需要写类型
const total = fristNumber + secondNumber

function getTotal2(fristNumber: number, secondNumber: number) {
  return fristNumber + secondNumber
}

const total2 = getTotal2(1, 3)

const obj = {
  name: 'dave',
  age: 34
}

