/*
 * Exercise 3: Number Guessing Game
 * Difficulty: MEDIUM
 *
 * Write a number guessing game where the computer picks a random number
 * and the user tries to guess it with hints and attempt tracking.
 *
 * See README.md for full requirements and sample output.
 */

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    // TODO: Seed the random number generator (do this ONCE at start)


    // TODO: Declare variables
    // - secret: the random number to guess
    // - guess: user's current guess
    // - attempts: count of valid guesses
    // - play_again: character for yes/no


    // TODO: Outer loop for "play again" functionality
    // Use a do-while loop


        // TODO: Generate random number between 1 and 100
        // secret = (rand() % 100) + 1;


        // TODO: Reset attempts counter


        // TODO: Display game header
        printf("=== Number Guessing Game ===\n");
        printf("I'm thinking of a number between 1 and 100...\n\n");


        // TODO: Inner while loop for guessing
        // Continue while guess != secret


            // TODO: Prompt for guess


            // TODO: Validate guess (1-100)
            // If invalid, display error and continue (don't count attempt)


            // TODO: Increment attempts counter (only for valid guesses)


            // TODO: Compare guess to secret
            // If too low: print "Too low! Try again."
            // If too high: print "Too high! Try again."
            // If correct: print "Correct! You guessed it!"


        // End of guessing while loop

        // TODO: Display number of attempts


        // TODO: Display performance rating based on attempts
        // 1-3: "Amazing! You're a mind reader!"
        // 4-7: "Great job! Very good guessing!"
        // 8-10: "Good work! You found it!"
        // 11+: "You got it! Keep practicing!"


        // TODO: Ask if user wants to play again


        // TODO: Read play_again character (use " %c" with space)


    // TODO: Continue outer loop while play_again == 'y' || play_again == 'Y'


    // TODO: Display goodbye message


    return 0;
}
