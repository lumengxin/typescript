class PersonA {
  constructor(private _name: string) {}
  // 对name保护后，再对外使用
  get name() {
    // 加工/加密
    return this._name + ' lili'
  }
  set name(name: string) {
    const realName = name.split(' ')[0]
    this._name = realName
  }
}

const pera = new PersonA('liu')
// pera.name
console.log(pera.name)  // get写法，不需要()
pera.name = 'zhang san'
console.log(pera.name)

/* 单例模式: 只有一个类的实例 */
class Demo {
  private static instance: Demo

  // 规避通过new 反复创建实例
  private constructor(public name: string) {}

  // static: 将该方法直接挂载到类上，而不是实例
  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo('zhang wang')
    }
    return this.instance
  }
}

const demo1 = Demo.getInstance()
const demo2 = Demo.getInstance()
console.log(demo1, demo2)