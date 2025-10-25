/*
 * Exercise 4: Pattern Printer
 * Difficulty: MEDIUM-HARD
 *
 * Write a program that displays various patterns using nested loops.
 * Includes right triangle, inverted triangle, pyramid, diamond, and hollow square.
 *
 * See README.md for full requirements and sample output.
 */

#include <stdio.h>

int main() {
    // TODO: Declare variables
    // - choice: pattern selection (1-5)
    // - size: pattern size
    // - i, j, k: loop counters


    // TODO: Display menu
    printf("=== Pattern Printer ===\n");
    printf("Select a pattern:\n");
    printf("1. Right Triangle\n");
    printf("2. Inverted Right Triangle\n");
    printf("3. Pyramid\n");
    printf("4. Diamond\n");
    printf("5. Hollow Square\n\n");


    // TODO: Get pattern choice


    // TODO: Validate choice (1-5)


    // TODO: Get size


    // TODO: Validate size (5-20)


    printf("\n");

    // TODO: Use switch statement to select pattern
    // switch (choice)


        // TODO: Case 1 - Right Triangle
        // Row i should have i stars
        // for (i = 1; i <= size; i++)
        //     for (j = 1; j <= i; j++)
        //         print star
        //     print newline


        // TODO: Case 2 - Inverted Right Triangle
        // Row i should have (size - i + 1) stars
        // for (i = 1; i <= size; i++)
        //     for (j = i; j <= size; j++)
        //         print star
        //     print newline


        // TODO: Case 3 - Pyramid
        // Row i needs (size - i) spaces, then (2*i - 1) stars
        // for (i = 1; i <= size; i++)
        //     for (j = 1; j <= size - i; j++)
        //         print space
        //     for (j = 1; j <= 2*i - 1; j++)
        //         print star
        //     print newline


        // TODO: Case 4 - Diamond
        // Top half (pyramid)
        // for (i = 1; i <= size; i++)
        //     spaces and stars like pyramid
        // Bottom half (inverted pyramid)
        // for (i = size - 1; i >= 1; i--)
        //     spaces and stars like pyramid


        // TODO: Case 5 - Hollow Square
        // for (i = 1; i <= size; i++)
        //     for (j = 1; j <= size; j++)
        //         if first/last row OR first/last column
        //             print star
        //         else
        //             print space
        //     print newline


        // TODO: Default case - should not reach here


    // End switch

    return 0;
}
