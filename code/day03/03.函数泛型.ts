/* function join(first: string | number, second: string | number) {
  return `${first}${second}`;
}

console.log(join('4', 5)) */

// 需求：必须同时传入都是数字或者字符串
// 泛型 generic 泛指的类型
function join<T, P>(first: T, second: P) {
  return `${first}${second}`
}
console.log(join<string, number>('4', 2))
// 自动类型推断
join(4, 8)

// or Array<ABC>
function map<ABC>(params: ABC[]) {
  return params
}
map<string>(['2'])

function join2<T>(first: T, second: T): T {
  return first
}