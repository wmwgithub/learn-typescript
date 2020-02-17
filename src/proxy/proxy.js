function clone(obj) {
  if (Object.prototype.toString.call(obj) !== '[object Object]' || obj == null) return obj;
  let newObj = new Object();
  for (let key in obj) {
    newObj[key] = clone(obj[key]);
  }
  return newObj;
}

//深度克隆当前对象
//遍历当前对象所有属性
function MyProxy(target, handle) {
  let targetCopy = clone(target);
  console.log(targetCopy)
  Object.keys(target).forEach(function (key) {
    //Object.defineProperty 修改每一项的方法 
    Object.defineProperty(targetCopy, key, {
      get: function () {
        return handle.get && handle.get(target, key);
      },
      set: function (newVal) {
        handle.set && handle.set(target, key, newVal);
      }
    });
  });
  return targetCopy;
}

let myProxy = new MyProxy({ name: "wmw", son: { sonName: "sonName" } }, {
  set: function () { console.log("set方法被拦截") },
  get: function () {
    console.log('get方法被拦截')
  }
})

myProxy.name = 'xxx'
myProxy.year = "2020"