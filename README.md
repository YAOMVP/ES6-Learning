# ES6-Learning
# ES6

## 4 Foundamental principles of OOP

![1671107682911](README.assets/1671107682911.png)

### Abstraction

![1671107701835](README.assets/1671107701835.png)



### Encapsulation:封装性

![1671107714265](README.assets/1671107714265.png)



### Inheritance

![1671107729604](README.assets/1671107729604.png)



### Polymorphism

![1671107745549](README.assets/1671107745549.png)

 

## Prototypes

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





## Challange

![1671247114866](README.assets/1671247114866.png)





