### 设计模式TypeScript版本
```Bash
# 安装依赖
yarn 
# 启动项目
npm run start:hot
```
### 说明

`app.ts` 中的 `import  Log from '../utils/Log'` 是我自己封装的log函数,
代码文件在 `utils/Log.ts`,使用方法 `log.show(sum,'测试number类型')`
核心代码如下。
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
import Log from '../utils/Log';
const log = new Log()
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

**项目更多介绍见我的[博客](http://lemonlife.top/2020/02/09/typescript/)**