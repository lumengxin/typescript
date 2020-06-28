// const Status = {
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETED: 2
// }

// 枚举，值默认从0开始
enum Status {
  OFFLINE,
  ONLINE = 4,
  DELETED
}

console.log(Status.DELETED) // 0,4,5
console.log(Status[4])

function getResult(status) {
  if (status === Status.OFFLINE) {
    return 'offline'
  } else if (status === Status.ONLINE) {
    return 'online'
  } else if (status === Status.DELETED) {
    return 'deleted'
  } else {
    return 'error'
  }
}

let result = getResult(Status.ONLINE)
result = getResult(2)
console.log(result)

