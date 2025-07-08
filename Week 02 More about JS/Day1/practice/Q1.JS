/** sum of two numbers */
/*function to add two numbers and return the sum*/

function sum(a,b){
    return a +b;
}
// calling the function and the result in a variable
let ans = sum(2,3)
// print hte result
console.log(ans);

//NEW
function add (j,k) {
    return j + k ;

}
let ans1 = add(6,8);
console.log(ans1);

//q2. function to Find the sum from 1 to a number n
function sum(num){
    let ans = 0;
    for (let i = 1; i<= num; i++){
    ans = ans + i;
}
    return  ans;
}
// calling the function and the result in a variable
//let result = sum(5);
const myans = sum(100);
console.log(myans);



// Synchronous code is executed line by line, in the order it's written. Each operation waits for the previous one to complete before moving on to the next one.
function sum (n) {
    let ans = 0;
    for (let i =1; i <=n; i++){
        ans = ans +i;
    }
    return ans ;

}
const ans11 = sum (100);
console.log(ans1);
const ans2 = sum (1000);
console.log(ans2);
const ans3 = sum (10000);
console.log(ans3);

//creat a folder with a.txt and also with b.txt..
const fs = require("fs");

const contents = fs.readFileSync("a.txt"), "utf-8");
console.log(contents);