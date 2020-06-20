const numArr: number[] = [1,2,4]

const arr: (number | string)[] = ['fa', 4, 9]

// const objectArr: {name: string, age: number}[] = [{
//   name: 'tom',
//   age: 8
// }]
// type alias 类型别名
type User = {name: string, age: number}
const objectArr: User[] = [{
  name: 'tom', 
  age: 8
}]

class Teacher {
  name: string
  age: number
}
const teacherArr: Teacher[] = [
  new Teacher(),
  {
    name: 'techer',
    age: 23
  }
]

/* tuple 元组 */
// const teacherInfo: (number | string)[] = ['Dell', 'male', 21]
// 元组: 第一二项必须是string；第三项是number(长度，类型都固定)
const teacherInfo: [string, string, number] = ['Dell', 'male', 21]
// csv
const teacherList: [string, string, number][] = [
  ['Dell', 'male', 21],
  ['Tom', 'male', 22]
]