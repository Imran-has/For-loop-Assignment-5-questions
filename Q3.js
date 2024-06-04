function incrementCounter(step) {
    // Initialize the counter
    let counter = 0;
    // Use a do...while loop
    do {
        // Print the current counter value
        console.log(counter);
        // Increment the counter by the step value
        counter += step;
    } while (counter < 100);
}
// Specify the step value
let stepValue = 10;
// Call the function with the step value
incrementCounter(stepValue);
export {};
