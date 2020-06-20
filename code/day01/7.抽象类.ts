class PersonB {
  /* private _name: string
  constructor(name: string) {
    this._name = name
  }
  get name() {
    return this._name
  } */
  public readonly name: string
  constructor(name: string) {
    this.name = name
  }
}

const perb = new PersonB('wang')
console.log(perb.name)

/* 抽象类
* - 只能被继承，不能实例化
*/
abstract class Geom {
  width: number
  getType() {
    return 'Geom'
  }
  // 定义一个抽象方法
  abstract getArea(): number
}

class Circle extends Geom {
  // 需要将抽象方法实现
  getArea() {
    return 111
  }
}
class Square {}

// 简化接口
interface PersonC {
  name: string
}
interface Teacher extends PersonC {
  teacherAge: 12
}
// interface Teacher {
//   name: string,
//   teacherAge: 12
// }
interface Student {
  name: string,
  age: number
}
interface Driver {
  name: string
}
const teacher = {name: 'wu'}
const student = {name: 'liu', age: 32}
// const getUserInfo = (user: Teacher | Student | Driver) => {
const getUserInfo = (user: PersonC) => {
  console.log(user.name);
}
getUserInfo(teacher)
