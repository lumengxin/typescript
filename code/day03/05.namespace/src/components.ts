export class Header {
  constructor() {
    const ele = document.createElement('h2')
    ele.innerText = 'this is header'
    document.body.appendChild(ele)
  }
}
export class Content {
  constructor() {
    const ele = document.createElement('div')
    ele.innerText = 'this is content'
    document.body.appendChild(ele)
  }
}
export class Footer {
  constructor() {
    const ele = document.createElement('div')
    ele.innerText = 'this is footer'
    document.body.appendChild(ele)
  }
}
