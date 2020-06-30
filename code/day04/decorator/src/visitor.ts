// 访问器（get, set）的装饰器

function visitDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  descriptor.writable = true;
}

class Test4 {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  @visitDecorator
  set name(name: string) {
    this._name = name;
  }
}

const test4 = new Test4('lily')
test4.name = '莉莉'
console.log(test4)
