console.log(Array.prototype);
/* 我们可以通过内置对象给他自定义添加进去！！！ */

//在原型对象了里.追加sum()的方法：
Array.prototype.sum = function(a, b, c) {
    let sum = 0;
    for (let i = 0; i < this.length; i++) { //谁调用了sum()就是谁的length;
        // sum = sum + this[i];
        sum += this[i];
    }
    /* ！！！！！我忘了第一次!!!!!!! */
    return sum;
}
let arr = new Array(11, 22, 33); //new了构造函数就有实例对象arr
let arr1 = [1, 2, 3]; //也可以这么写；arr1是通过Array构造函数创建出来的
console.log(arr.sum());
console.log(arr1.sum());