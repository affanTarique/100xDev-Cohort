// Also tell the user if they are legal to vote or not.
const user = [{
    name: "Ansha",
    age: 25
},{
    name: "Affan",
    age: 17
}];

function isEligibletoVote (user){
    for(let i=0; i<user.length; i++){
        if(user[i].age>=18){
            console.log( user[i].name + "You are eligible for voting");
        }else{
            console.log(user[i].name + "You are not eligible for voting");
        }
    }
}
isEligibletoVote (user);