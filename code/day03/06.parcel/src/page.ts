// npm i @types/jquery -D || 自定义.d.ts类型注解文件
// $(function() {
//   console.log(13211)

//   $('body').html('<div>hello</div>')

//   new $.fn.init();
// })

import $ from 'jquery'

$(function() {

  $('body').html('<div>hello</div>')

  new $.fn.init();
})


interface Person {
  name: string;
  age: number;
  gender: string;
}

class Teacher {
  constructor(private info: Person) {}
  /* getInfo(key: string) {
    // key: love  类型保护
    // return this.info[key]
    if (key === 'name' || key === 'age' || key === 'gender') {
      return this.info[key];
    }
  } */
  // 泛型中keyof使用   类型的值可以就是一个字符串
  // keyof遍历： type T = 'name'; key: 'name'; Person['name'] ...
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key];
  }
}

const teacher = new Teacher({
  name: 'angler',
  age: 32,
  gender: 'male'
})

const test = teacher.getInfo('name')
console.log(test);
