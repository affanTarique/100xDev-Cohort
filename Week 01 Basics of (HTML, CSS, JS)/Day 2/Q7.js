// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
function greet(username){
    console.log("Hi Mr." + username.name +  "Your age is " + username.age);

}
let username ={
    name : "Harkirat",
    age : 30,
    gender: "Male",
}
greet(username);
console.log("Test file is running");