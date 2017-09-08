let obj={
  a:1,
  b:2,
  c:3
}
let obj1=Object.keys(obj)//['a','b','c']
console.log(obj1)
obj1.map(t=>console.log(obj[t]))
