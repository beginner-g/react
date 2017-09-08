// 父类
class Person{
  sayName(){
    console.log('humen')
  }
}
// 子类
class Men extends Person{
  sayKind(){
    console.log('men')
  }
}
const person=new Person
const men=new Men
person.sayName()
men.sayName()
men.sayKind()
