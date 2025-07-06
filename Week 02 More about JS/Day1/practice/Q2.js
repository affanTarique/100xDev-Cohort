// function to calculate  the sum of number from 1 to n
function sum(num){
    // varibale to store the sume
    let ans = 0;

    // loop from 1 to n
    for (let i= 1; i<= num; i++){
        // add the number to the sum
        ans = ans + i;
    }
    // return the sum
    return ans;

}
// calling the function and the result in a variable

let ans = ans(5);

// print the result
console.log(ans);