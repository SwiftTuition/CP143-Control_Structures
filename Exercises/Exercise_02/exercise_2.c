/*
 * Exercise 2: Grade Statistics Calculator
 * Difficulty: MEDIUM
 *
 * Write a program that reads grades for a class and calculates statistics
 * including average, highest, lowest, and pass/fail counts.
 *
 * See README.md for full requirements and sample output.
 */

#include <stdio.h>

int main() {
    // TODO: Declare variables
    // - num_students: number of students
    // - grade: current grade being entered
    // - total: sum of all grades
    // - highest, lowest: track max and min
    // - passes, failures: count pass/fail
    // - average, pass_rate: calculated statistics


    // TODO: Display header
    printf("=== Grade Statistics Calculator ===\n");


    // TODO: Ask for number of students


    // TODO: Validate number of students (1-50)
    // If invalid, display error and return


    // TODO: Initialize tracking variables
    // - total = 0
    // - highest = 0
    // - lowest = 101
    // - passes = 0
    // - failures = 0


    // TODO: Use a for loop to process each student
    // for (int i = 1; i <= num_students; i++)


        // TODO: Prompt for grade for student i


        // TODO: Validate grade (0-100)
        // If invalid, ask again (use a do-while or while loop)


        // TODO: Add grade to total


        // TODO: Update highest if this grade is higher


        // TODO: Update lowest if this grade is lower


        // TODO: Count pass (>= 50) or failure (< 50)



    // TODO: Calculate statistics
    // - average = (double)total / num_students
    // - pass_rate = (double)passes / num_students * 100.0


    // TODO: Display all statistics with proper formatting
    printf("\n=== Grade Statistics ===\n");
    // Display average, highest, lowest, passes, failures, pass rate


    return 0;
}
