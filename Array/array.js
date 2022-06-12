let data = [{
    id: 1,
    pname: '小米',
    price: 3999
}, {
    id: 2,
    pname: 'oppo',
    price: 999
}, {
    id: 3,
    pname: '荣耀',
    price: 1299
}, {
    id: 4,
    pname: '华为',
    price: 1999
}, ];


let tbody = document.querySelector("tbody");
let start = document.querySelector(".start");
let end = document.querySelector(".end");
let search = document.querySelector(".search-price");
let product = document.querySelector(".product");
let find = document.querySelector(".search-pro");



render(data); // 一上来先调用 因为4个商品要显示在页面中

function render(data) { //传递之前的4个商品的数据
    tbody.innerHTML = '';
    data.forEach(function(value) { //😝忘记传入value了  对象.属性
        //创建tr
        let tr = document.createElement("tr");
        tbody.innerHTML += `
            <td>${value.id}</td>  
            <td>${value.pname}</td>
            <td>${value.price}</td>
        `
            //追加给tbody
        tbody.appendChild(tr);
    })
}



// requirements：typing0-1000price,and find the relevent products

search.addEventListener("click", function() {
    let arr = data.filter(function(value, index) { //value指的是每个对象  要是第一个表单里面的值 是start.value  end.value
            return value.price >= start.value && value.price <= end.value;


        })
        // console.log(arr);
    render(arr); //调用新的数组
});

//重新渲染 所以可以封装一个render函数

find.addEventListener("click", function() {
    let newArray = data.filter(function(value) {
        return value.pname === product.value;
    })
    console.log(newArray);
    render(newArray);
});