// estElement` that takes an array of numbers and returns the largest element.//
//Example: - Input: [3, 7, 2, 9, 1]- Output: 9//

function findLargestElement(arr) {
    let largestNum = numbers[0];
    for (let i = 0; i < numbers.length ; i++) {
        if (numbers [i] > largestNum[i]) {
            largestNum = numbers[i];
            
        } 
    }
    return largestNum;

}
numbers = [3, 7, 2, 9, 1];
console.log(findLargestElement(numbers)); // Output: 9
// This function iterates through the array and compares each element with the current largest number.
// We took a array input and pass it into a function and after that hmne uske pehle element ko largest number assume kr liya phr usko sabhi rest of compare kr rhe hai
// if woh lasgest number hi last hai toh wahi rhega wrna value swap ho jyega like jo if statement ke andar ho rha !
