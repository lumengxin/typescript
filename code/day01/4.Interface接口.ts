// 接口，只能代表函数和对象（ts中尽量使用接口）
interface Person {
  // readonly name: string
  name: string
  age?: number
  // [propName: string]: any
  say(): string
}

// 接口继承
interface Teacher extends Person {
  teach(): string
}

// 接口定义一个函数
interface SayHi {
  (word: string): string
}
const say: SayHi = (word: string) => {
  return word
}

// 类型别名，可以直接代表基础类型
// type Person1 = {
//   name: string
// }
type Person1 = string

const getPersonName = (person: Person) => {
  console.log(person.name)
}

// js中person为undefined时，整个程序报错
const setPersonName = (person: Person, name: string) => {
  person.name = name
}

const person = {
  name: 'dell',
  sex: 'male',
  say() {
    return 'hello'
  }
}
// getPersonName(person)
// 字面量形式传入，强校验
getPersonName({
  name: 'dell',
  sex: 'male'
})

setPersonName(person, 'lee')

// 类中应用接口
class User implements Person {
  name = 'jack'
  say() {
    return 'hello,jack!'
  }
}

