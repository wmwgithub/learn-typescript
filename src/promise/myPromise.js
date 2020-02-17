const Pending = 'pending'
const Fullfilled = 'fullfilled'
const Rejected = 'rejected'

function MyPromise(executor) {
  let self = this
  self.status = Pending
  self.value = null
  self.reason = null
  /**
   * 定义resolve 函数接收成功时候的返回值
   */
  function resolve(value) {
    if (self.status === Pending) {
      self.status = Fullfilled
      self.value = value
    }
  }
  /**
   * 定义 reject函数 接收失败的时候的原因
   */
  function reject(reason) {
    if (self.status === Pending) {
      self.status = Rejected
      self.reason = reason
    }
  }
  try {
    // 把传入 resolve和reject函数
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}
/**
 * 实现then 方法 分别接收处理不同状态的函数
 */
MyPromise.prototype.then = function (onFullfilled, OnRejected) {
  if (this.status === Fullfilled) {
    onFullfilled(this.value)
  }
  if (this.status === OnRejected) {
    OnRejected(this.reason)
  }
  if (this.status === Pending) {
    return undefined
  }
  // 返回Promise 对象
  return this
}

let myPromise = new MyPromise(function (resolve, reject) { resolve("Hello world哈哈哈") })
myPromise.then((res) => {
  console.log(res) // Hello World 哈哈哈
}).then((res) => {
  console.log(res) // Hello World 哈哈哈
})