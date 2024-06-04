//Step 1: Define the object
const myObject = {
    item1: "motor cycle",
    item2: "car",
    item3: "computer"
};

// Step 2: Use a for...in loop to iterate through the properties
for (const property in myObject) {
    if (myObject.hasOwnProperty(property)) {
        // Print each property's name and its corresponding value
        console.log(`${property}: ${myObject[property as keyof typeof myObject]}`);
    }  
}
