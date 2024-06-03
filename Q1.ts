//Q1

let myWork: { name: string; status: boolean }[] = [];

// Step 2: Use a loop to create lessons
for (let i = 1; i <= 10; i++) {
    // Step 2a: Create an object representing a lesson
    let lesson = {
        name: `Lesson ${i}`,
        // Step 2b: Use a ternary operator to set the status property based on whether the lesson number is odd or even
        status: i % 2 === 1 ? true : false
    };

    // Step 3: Add the lesson object to the array
    myWork.push(lesson);
}

// Step 4: Print the result to the console
console.log(myWork);
