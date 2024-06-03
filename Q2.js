// Step 1: Set a maximum value for the number guessing game
const maxValue = 100;
// Step 2: Generate a random number between 1 and the maximum value
const randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log(`Random Number (for development purposes): ${randomNumber}`);
// Step 3: Create a variable to track whether the user's guess is correct
let isGuessCorrect = false;
// Step 4: Use an array to store a series of predefined guesses
const guesses = [50, 25, 75, 60, 80, 70, 65, 55, 45, 35];
// Step 5: Use a while loop to iterate over the predefined guesses
let guessIndex = 0;
while (!isGuessCorrect && guessIndex < guesses.length) {
    // Get the current guess
    const currentGuess = guesses[guessIndex];
    console.log(`User's guess: ${currentGuess}`);
    // Step 6: Check if the current guess matches the random number
    if (currentGuess === randomNumber) {
        console.log('Congratulations! You guessed the correct number.');
        isGuessCorrect = true;
    }
    else if (currentGuess < randomNumber) {
        console.log('Your guess is too low.');
    }
    else {
        console.log('Your guess is too high.');
    }
}
export {};
