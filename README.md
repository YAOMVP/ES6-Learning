# ES6-Learning Review
# Constructor and prototype

## 4 Foundamental principles of OOP

![1671107682911](README.assets/1671107682911.png)

### Abstraction

![1671107701835](README.assets/1671107701835.png)



### Encapsulation:封装性

![1671107714265](README.assets/1671107714265.png)



### Inheritance

![1671107729604](README.assets/1671107729604.png)



### Poly'morphism~多态性~

![1671107745549](README.assets/1671107745549.png)

 

## :sunglasses:Prototypes p197~回顾~

1.Each object has a prototype.

2.The prototype object contains properties and methods, coz all the object that are linked to that prototype can access and use.

![1671107755962](README.assets/1671107755962.png)

3.This behavior is called prototypal inheritance.

4.We can also say that object delegate~委托~ behavior to the linked to that prototype object.

5.We also call this mechanism delegation.~我们也将这种机制称为委托~

6.This arrow is pointing upwards, objects delegate their behavior to the prototype.



**For example**

![1671107770089](README.assets/1671107770089.png)

Array.prototype is the prototype of the num array, since num is linked to that prototype, therefore, num array has access to all that methods, like the map().





## Prototype inheritance

![1671238871063](README.assets/1671238871063.png)==Coz any object has access to the methods and properties from **its prototype**, and prototype of olivia which is _ _ proto_ _ is Person.prototype.   Each object has a special property called __proto__==



The **prototype of the olivia object** is essentially the **prototype property** of the constructor function.~例如下~ 

```javascript
console.log(olivia.__proto__ === Person.prototype)  //true
```

~再解释~  olivia's prototype which is the  olivia._ _proto _ _ is the prototype property of the Person constructor function.





```javascript
console.log(Person.prototype.isPrototypeOf(olivia))  //true
//Person.prototype is indeed the prototype of olivia.
console.log(Person.prototype.isPrototypeOf(Person))  //false
//改成： Person.prototypeOfLinkedObjects  <-> prototype
```



~prototype添加继承的proprty：如下图~

![1671241055588](README.assets/1671241055588.png)





### Challenge  prototype

![1671247114866](README.assets/1671247114866.png)





##Class

![1671248398451](README.assets/1671248398451.png)



### Getters and setters

![1671498933700](README.assets/1671498933700.png)



磨石视频：

Getters: We can read the *fullName* like a **property**.

![1671498986641](README.assets/1671498986641.png)



Setters:We can set it from the outside.

![1671499015777](README.assets/1671499015777.png)



###Challenge  Class/set get

![1671499451375](README.assets/1671499451375.png)



## Object.create 

==Used For: Defining prototype manually==

When we use the **new** operator in constructor function or classes, it automatically sets the **prototype** of the instances to the *constructor prototype proterty*.

 With Object.create, we can set the prototype of objects manually to any object.

In the example. we manually set the **prototype of the steven object to the PersonProto object**.  (PersonProto === steven._ _ proto _ _)

The two object are linked through the _ _proto_ _ proterty.

The big difference is that we did not need any constructor function and no prototype property at all.

![1671703891253](README.assets/1671703891253.png)



![1671704309050](README.assets/1671704309050.png)

The big takeaway~最大收获~ is

==Object.create creates a new object, and the prototype of that object will be the object that we passed in.==



### :sunglasses:Use 3 ways inheritance p5

- Constructor functions
- ES6 Classes
- Object.create()

==call方法  1).可以调用函数  2).改变this指向==

![1671705603875](README.assets/1671705603875.png)



![1671705855611](README.assets/1671705855611.png)



##Challenge parent.call(this,   ,  )

![1671505485026](README.assets/1671505485026.png)



## Static

**Static methods are not available on the instances, ** sometimes they are still useful to implement ablout a class or a constructor function.

![1671701149684](README.assets/1671701149684.png)







## Encapsulation and data privacy~封装性和数据隐私~

Encapsulation: To keep some properties and methods private inside the class, so they are not accessible from outside of the class.

2 reasons that we need encapsulation and data privacy

- To prevent code from outside of a class to accidently manipulate a class or data inside the class.
-  External code does not rely on these private methods, therefore the code will not break when we do internal changes.





## Class fields and methods

- Public fields: Present on all the instances that we are creating through the class. Thay are not on the prototype.

- Private fields: The properties are not accessible from the outside.

- Public methods

- Private methods

  (There is also the static version)



## Chinning Challenge (return~别忘记~)

![1671764261397](README.assets/1671764261397.png)





 # mapty

## User stories

![1672190342589](README.assets/1672190342589.png)

for example:

![1672190431814](README.assets/1672190431814.png)



![1672190647384](README.assets/1672190647384.png)



![1672190988946](README.assets/1672190988946.png)