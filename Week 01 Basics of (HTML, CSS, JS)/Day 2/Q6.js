// Write a function that takes a user as an input and greets them with their name and age

function greet(username){
    console.log("Hi " + username.name + "your age is " + username.age);

}
let username ={
    name: "Ansha",
    age: 25
}

greet(username);
console.log("Test file is running");