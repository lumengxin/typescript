// 加上之后，可以直接直观看到引用关系
///<reference path="./components.ts" />

namespace Home {

  export class Page {
    user: Components.User = {
      name: 'zhang'
    }

    constructor() {
      new Components.Header()
      new Components.Content()
      new Components.Footer()
    }
  }

}
