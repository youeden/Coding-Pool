//1. 什么是Promise
//2. 创建Promise的方式及区别
//3. 

let num = Math.floor(Math.random() * 10 ) + 1;
// Promise is an [object]

let count = (num) => { let abs = Math.abs(-121); num + abs};

 let promise = new Promise( (resolve, reject) => {
    // do anything over here.
    let abs = Math.abs(-1);
    setTimeout( () => resolve(`${abs}`), 1000);//延时执行
 });

 promise.then( (result) => {
     console.log(result);
 });


 let  promise2 = new Promise((resolve, reject) => {
     resolve(count(num));//立即执行
 })

 promise2.then(result => {
     console.log(result);
 })


 
