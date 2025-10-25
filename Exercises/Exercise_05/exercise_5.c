/*
 * Exercise 5: Student Grade Manager
 * Difficulty: HARD
 *
 * Create a menu-driven student grade management system that allows entering
 * grades, viewing statistics, and analyzing pass/fail rates.
 *
 * See README.md for full requirements and sample output.
 */

#include <stdio.h>

int main() {
    // TODO: Declare variables
    // - grades[30]: array to store up to 30 grades
    // - num_students: how many grades have been entered (0 initially)
    // - choice: menu selection
    // - i: loop counter


    // TODO: Main menu loop - use do-while to repeat until exit
    // do {


        // TODO: Display menu
        printf("\n=== Student Grade Manager ===\n");
        printf("1. Enter grades for students\n");
        printf("2. Display all grades\n");
        printf("3. Calculate class statistics\n");
        printf("4. Find highest and lowest grades\n");
        printf("5. Count pass/fail\n");
        printf("6. Exit\n\n");


        // TODO: Get and validate choice (1-6)
        // Use a do-while loop for validation


        // TODO: Switch statement for menu options
        // switch (choice) {


            // TODO: Case 1 - Enter Grades
            // - Ask how many students (1-30)
            // - Validate count
            // - Use for loop to enter each grade
            // - Validate each grade (0-100)
            // - Store in grades array
            // - Update num_students
            // - Display success message


            // TODO: Case 2 - Display All Grades
            // - Check if num_students == 0
            // - If yes, display "No grades to display"
            // - If no, display table:
            //   printf("Student #   Grade\n");
            //   printf("---------   -----\n");
            //   Use for loop to display each grade


            // TODO: Case 3 - Calculate Statistics
            // - Check if num_students == 0
            // - Calculate total (sum all grades)
            // - Calculate average: (double)total / num_students
            // - Display:
            //   - Number of students
            //   - Total points
            //   - Average grade (2 decimal places)


            // TODO: Case 4 - Find Highest and Lowest
            // - Check if num_students == 0
            // - Initialize: highest = -1, lowest = 101
            // - Initialize: highest_student = 0, lowest_student = 0
            // - Loop through grades to find max and min
            // - Track which student number has max/min
            // - Display results


            // TODO: Case 5 - Count Pass/Fail
            // - Check if num_students == 0
            // - Initialize: passes = 0, failures = 0
            // - Loop through grades
            // - Count passes (>= 50) and failures (< 50)
            // - Calculate percentages
            // - Display counts and percentages


            // TODO: Case 6 - Exit
            // - Display "Thank you for using Grade Manager!"
            // - break (will exit do-while)


            // TODO: Default case
            // - Display "Invalid choice!"


        // } end switch


    // TODO: Continue loop while choice != 6
    // } while (choice != 6);


    return 0;
}
