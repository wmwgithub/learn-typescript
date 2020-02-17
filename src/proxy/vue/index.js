let data = {
  name: 'wmw',
  age: 21
}
let template = `
<div>
姓名：{{name}}
年龄：{{age}}
<input type="text" v-model="name">
</div>
`

function render() {
  // console.log(template)
  let res = template.replace(/\{\{\w+\}\}/g, key => {
    // console.log(key)
    key = key.slice(2, key.length - 2)
    console.log(key)
    return data[key]
  })
  console.log(res)
  el.innerHTML = res
}
render()