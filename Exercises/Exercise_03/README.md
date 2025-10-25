# Exercise 3: Number Guessing Game

**Difficulty:** MEDIUM
**Concepts:** while loops, sentinel-controlled repetition, conditional logic, logical operators

## Problem Description

Write a number guessing game where the computer picks a random number and the user tries to guess it. The program should provide hints and track the number of attempts.

## Requirements

1. Generate a random number between 1 and 100
   - Use: `int secret = (rand() % 100) + 1;`
   - Include: `#include <stdlib.h>` and `#include <time.h>`
   - Seed the random generator: `srand(time(NULL));`

2. Use a **while loop** to:
   - Prompt the user for a guess
   - Validate the guess (1-100)
   - If invalid, display error and ask again (don't count as attempt)
   - Compare guess to secret number
   - Provide feedback: "Too high!", "Too low!", or "Correct!"
   - Count the number of valid attempts
   - Continue until correct guess

3. After correct guess, display:
   - Congratulations message
   - Number of attempts it took
   - Performance rating based on attempts:
     - 1-3 attempts: "Amazing! You're a mind reader!"
     - 4-7 attempts: "Great job! Very good guessing!"
     - 8-10 attempts: "Good work! You found it!"
     - 11+ attempts: "You got it! Keep practicing!"

4. Ask if user wants to play again
   - If yes (enter 'y'), generate new number and restart
   - If no (enter 'n'), thank user and exit

## Sample Output

```
=== Number Guessing Game ===
I'm thinking of a number between 1 and 100...

Enter your guess: 50
Too low! Try again.

Enter your guess: 75
Too high! Try again.

Enter your guess: 63
Too low! Try again.

Enter your guess: 69
Too high! Try again.

Enter your guess: 66
Correct! You guessed it!

You found the number in 5 attempts.
Great job! Very good guessing!

Play again? (y/n): y

=== Number Guessing Game ===
I'm thinking of a number between 1 and 100...

Enter your guess: 150
Error: Guess must be between 1 and 100

Enter your guess: 25
Too low! Try again.

Enter your guess: 50
Correct! You guessed it!

You found the number in 2 attempts.
Amazing! You're a mind reader!

Play again? (y/n): n
Thanks for playing! Goodbye!
```

## What You'll Practice

- Using while loops for indefinite repetition
- Generating random numbers
- Input validation within loops
- Nested control structures (loops within loops)
- Logical operators for range checking
- Character input for yes/no questions

## Hints

- Seed random number generator ONCE at start of main: `srand(time(NULL));`
- Generate new random number each game: `secret = (rand() % 100) + 1;`
- Use a while loop that continues until guess == secret
- Use nested loops: outer for "play again", inner for guessing
- Don't count invalid guesses as attempts
- Use `scanf(" %c", &choice)` to read yes/no (note the space before %c)
- Test boundary cases: 0, 1, 100, 101
