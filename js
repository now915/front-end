### 函数参数
es 所有函数的参数都是按值传递的  
``` javascript
// 基本数据类型
function addTen(num) {
  num += 10
  return num
}
let count = 10
let result = addTen(count)
console.log(count, result) // 10, 20  count 指向的值没变 所以时值传递

// 对象
function setName(obj) {
  obj.name = 'corgi'
}
let pet = new Object()
setName(pet)
console.log(pet.name)  // 'corgi'

function setColor(obj) {
  obj.color = 'red'
  obj = new Object()
  obj.color = 'blue'
}

let cl = new Object()
setColor(cl)
console.log(cl.color) // 'red'  如果是引用传递的话， cl 应该指向 对象 { color: 'blue'} 而不是 对象 { color: 'red' }
```
