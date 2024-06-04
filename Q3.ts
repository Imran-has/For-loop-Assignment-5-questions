function incrementCounter(step: number): void {
    // Initialize the counter
    let counter: number = 0;

    // Use a do...while loop
    do {
        // Print the current counter value
        console.log(counter);
        
        // Increment the counter by the step value
        counter += step;
    } while (counter < 100);
}

// Specify the step value
let stepValue: number = 10;

// Call the function with the step value
incrementCounter(stepValue);
