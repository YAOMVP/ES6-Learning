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











# Synchronous p31

- Most code is synchronous 
- Synchronous code is executed line by line



![1672542146518](README.assets/1672542146518.png)



Alert is blocking synchronous code. Only after we click ok, the window disappears, the next line can run!

**Most of the time synchronous code is fine, and makes perfect sense, but the execution would have to wait, for example for a 5 seconds timer to finish. That would be terrible, coz meanwhile nothing happed during the 5 seconds.**





The callback is asynchronous, it is only going to be executed after the timer has finished. That is non-blocking. The rest of the code can keep running normally.

When the timer finishes after 5 seconds, the callback function will be executed.

Asynchronous coordinating behavior of a program over a period time.

![1672543047171](README.assets/1672543047171.png)

![1672543126361](README.assets/1672543126361.png)





for example

![1672544192812](README.assets/1672544192812.png)





# AJAX

Asynchronous Javascript And XML(xml Is widely used to **transmit data on the web**, recently we don ot use XML anymore, use JSON, just a javascript object convert in into string.)





# API

![1672546166370](README.assets/1672546166370.png)



# :sunglasses:Request-response model~请求响应模型~ / Client-server architecture~客户端-服务器架构~

![1672713492444](README.assets/1672713492444.png)

When we try to access a web server, the browser which is the client, sends a request to the server, and then the server will send back a response,  that response contains the data, or the web page that we requested.  :



![1672714229588](README.assets/1672714229588.png)



Every URL gets~有~ an HTTP(Hypertext Transfer protocol~超文本传输协议~) and HTTPS(is encrypted using TLS or SSL), which is for the ==protocol==. 

Then we have the ==Domain name==, (rest..eu), after a slash we have a so-called ==Resource== that we want to access.

Now the ==Domain name==(restc..eu) is not the real address of the server that we are trying to access, is just a name that easy for us to remember.



![1672714643752](README.assets/1672714643752.png)

We need a way to convert the ==Domain name== to the real address of the server, that happens through a so-called ==DNS== stands for Domain name server.



![1672715209886](README.assets/1672715209886.png)

The first step that happens when we access any web server, is the browser makes a request to a DNS, the DNS will match the web address of the URL to the server's real IP address, (this happens through the Internet service provider.) after the IP address has been sent back to the browser, we can finally call it.





![1672715009131](README.assets/1672715009131.png)

 This is the real address looks like, it has the protocol, the IP address, and the port(think like a sub address) that we access on the server.



![1672715317804](README.assets/1672715317804.png)

Once we have the real IP address, a TCP socket connection is established between the browser and the server. The connection is kept alive for the entire time that transfer all files of the website.

- TCP Transmission control protocol~传输控制协议~.   IP Internet Protocol ~互联网协议~ They are communication protocols(a system of the rules that allows 2 or more parties to communicate.) that defines how data travels across the web.



![1672715563608](README.assets/1672715563608.png)

Then the request that we make is an http request, after TCP/IP, HTTP is another communication protocol, that allows the clients and the server to communciate, that works by sending requests and response messages from clients to the server.



 A request message:

![1672716167386](README.assets/1672716167386.png)

- Start line: the (/rest/v2) which is the resource now it as the target in the HTTP request, so the server can figure out what to do with it.

- request headers: some information that we sent about the request itself.(What browser that we use, the user's language...).
- request body:will contain the data that we are sending, like the html form.

 

Our request is formed, and now hits the server, and then working on it until it has our data or website ready to send back using http response.



![1672716535357](README.assets/1672716535357.png)

A response message:

- Start line: wheter the request has been successful or failed.
- response headers: about the response itself.
- response body: contains the JSON data coming back from an API or the HTML of the web page that we requested.



如果是个html 发生的过程：

![1672716616739](README.assets/1672716616739.png)





How the TCP/IP request and response is sent across the web?

TCP that defines how data travels across the web.~TCP是定义数据如何通过web传输的~

![1672716932499](README.assets/1672716932499.png)

The job of TCP is to break the requests and responses down into thousands of small chunks, called packets before they are sent. Once the small packets arrive at their final destination,  TCP will reassemble all the packets into the original request or response, so the each packets can take a different route through the Internet, the message can get the destination as quick as possible.



![1672717168557](README.assets/1672717168557.png)

Then the job of IP protocol is to send and route these packets through the Internet. It ensure that they arrive at the destination they should go using Ip addresses on each packet。