### 继承
* 父类
````
  class Person{
    sayName(){
      console.log('humen')
    }
  }
````
* 子类
````
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

````
其实我们可以采用继承的方式，让 Men 中可以拥有 Person 中的属性和方法
******
### super() 方法在类继承中的作用
我们现在来看，既然方法可以被继承，那么属性当然也应该是可以被继承的。
```
  class Person {
    constructor() {
      this.weight = "around 100kg";
      this.height = "around 170cm";
    }
  }
  class Men extends Person {
    constructor() {
      super();
      this.gender = "Male";
    }
  }

  let peter = new Men;
  console.log(peter.weight);
```
  那么，super() 到底是什么呢？

  答案是这个样子的：子类的 this 是基于父类的 this 的（先创建父类的对象，然后再在上面进行增加） ，也就是说在父类对象没有被创建的时候，子类是没有办法被创建的。而 super() 指的就是父类的 constructor() 所以添加了 super() 在子类中，问题就解决了。

  经验就是：子类的 constructor() 中必须先呼叫 super() ，然后才能使用 this 。
