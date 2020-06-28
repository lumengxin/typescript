/* class DataManager {
  constructor(private data: string[]) {}
  getItem(index: number): string {
    return this.data[index]
  }
}

const data = new DataManager(['1', '3'])
data.getItem(0) */

class DataManager<T> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index]
  }
}
const data = new DataManager(['1', 3])
data.getItem(0)


interface Item {
  name: string
}
// T extends number | string
class DataManager2<T extends Item> {
  constructor(private data: T[]) {}
  getItem(index: number): string {
    return this.data[index].name
  }
}
new DataManager2([
  { name: 'zhang' }
])

/* const func: () => string = () => {
  return '123'
} */
// 泛型作为一个具体的类型注解
function hello<T>(params: T) {
  return params
}

const func: <T>(params: T) =>  T = hello