### 学习TypeScript 的一些案例代码
```Bash
# 安装依赖
yarn 
# 启动项目
npm run start:hot
```
> app.ts 是项目的主入口，所以要运行任何函数，需要在App.ts中引入
----

#### src/sort
> TS实现的各种排序算法
> 
|更新时间|记录|
|---|---|
|2020/3/31|修复快排,while死循环bug|


#### src/design-mode 
> TS实现各种设计模式

|更新时间|记录|
|---|---|
|2020/4/1|修复快排,while死循环bug|

#### src/log


> 自己封装的输入日志类，通过`log.show()` 函数把，函数的返回值，输出到html页面上，ts,转js，然后再被html引入，这一部分是webpack处理的。

|更新时间|记录|
|---|---|
|2020/2/9|实现类基本功能|

```TS
function bindLi(value: string, info?: string): void {
  let ol: HTMLElement = document.getElementById('logInfo') as HTMLElement
  let li = document.createElement("li")
  console.log(li)
  li.innerHTML = `${info}===>${value}`
  ol.appendChild(li)
}
```
#### 页面展示
```TS
import HTMLLog from './log/Log';
const log = new HTMLLog()
function add(a: number, b: number): number {
  return a + b
}
let sum = add(3, 2)
log.show(sum, '测试number类型')
function userInfo(name: string): string;
function userInfo(age: number): number;
function userInfo(info: any): any {
  if (typeof info === 'string') {
    return `my name is ${info}`
  } else {
    return `my age is ${info}`
  }
}
log.show(userInfo('wmw'), '函数重载')
log.show(userInfo(18)) //  my age is 18
```
![页面展示](http://blogqiniu.wangminwei.top/202002122116_235.png?/)