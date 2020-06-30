
const userInfo: any = undefined;

// 改进：工厂模式，使得返回的console.log内容不同
function catchError(msg: string) {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function() {
      try {
        fn();
      } catch (e) {
        // console.log('userInfo 存在问题')
        console.log(msg)
      }
    }
  }
}

class Demo {
  @catchError('userInfo.name有问题')
  getName() {
    // try {
    //   return userInfo.name
    // } catch (e) {
    //   console.log('userInfo.name不存在')
    // }
    return userInfo.name
  }
  getAge() {
    try {
      return userInfo.age
    } catch (e) {
      console.log('userInfo.age不存在')
    }
  }
}

const demo = new Demo()
demo.getName()