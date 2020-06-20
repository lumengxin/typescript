class Person {
  name = 'dell'
  getName() {
    return this.name
  }
}
const person2 = new Person
console.log(person2.getName())

// 继承
class Teacher extends Person {
  getTeacherName() {
    return 'jack'
  }
  // 重写
  getName() {
    // return 'lee'
    // super重新调用父类
    return super.getName() + 'lee'
  }
}
const teacher2 = new Teacher()
console.log(teacher2.getName())
console.log(teacher2.getTeacherName())

/* 访问类型 
private: 允许在类内被使用, 
protected: 允许在类内及继承的子类中使用, 
public: 允许在类的外部调用 
*/
class Human {
  /* // 默认前面是public
  public name: string
  
  // constructor, new实例时自动执行
  constructor(name: string) {
    this.name = name
  } */
  // 简化写法 name前加上public等价上面代码
  constructor(public name: string) {}
}
const human = new Human('jack')
console.log(human)

class Human2 {
  constructor(public name: string) {}
}
class Teacher2 extends Human2 {
  // sayHi() {
  //   this.name
  // }
  constructor(public age: number) {
    // 父类中有构造器，子类中也要声明构造器时，需要手动调用下父类构造器且按要求传参
    // super 指父类； super() 调父类构造函数。父类没有构造器，继承空类 super()
    super('zhang')
  }
}
const teach2 = new Teacher2(23)
console.log("teach2 ->", teach2)
