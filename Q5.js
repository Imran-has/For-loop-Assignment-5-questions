//Q5 loop
// Step 1: Create an empty array
let myArray = [];
// Step 2: Run a loop 10 times, adding a new incrementing value to the array
for (let i = 1; i <= 10; i++) {
    myArray.push(i);
}
// Step 3: Log the array into the console
console.log(myArray);
// Step 4: Use the for loop to iterate through the array
for (let i = 0; i < myArray.length; i++) {
    console.log(`Index: ${i}, Value: ${myArray[i]}`);
}
// Step 5: Use the for...of loop to output the value into the console from the array
for (const value of myArray) {
    console.log(value);
}
export {};
