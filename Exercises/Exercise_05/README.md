# Exercise 5: Student Grade Manager

**Difficulty:** HARD
**Concepts:** do-while loops, switch statements, arrays, multiple functions, comprehensive validation

## Problem Description

Create a student grade management system with a menu-driven interface. The program should allow users to enter grades, view statistics, and manage student data through a professional menu system.

## Requirements

### Menu System
Use a **do-while loop** to display a menu that repeats until user chooses to exit:

```
=== Student Grade Manager ===
1. Enter grades for students
2. Display all grades
3. Calculate class statistics
4. Find highest and lowest grades
5. Count pass/fail
6. Exit

Enter choice (1-6):
```

### Functionality Details

**Option 1: Enter Grades**
- Ask how many students (1-30)
- Validate student count
- Use a for loop to enter each grade
- Validate each grade (0-100)
- Store grades in an array

**Option 2: Display All Grades**
- If no grades entered, display "No grades to display"
- Otherwise, display all grades in a formatted table:
  ```
  Student #   Grade
  ---------   -----
  1           85
  2           72
  3           90
  ```

**Option 3: Calculate Statistics**
- If no grades, display error
- Calculate and display:
  - Number of students
  - Total of all grades
  - Average grade (2 decimal places)
  - Standard deviation (optional challenge)

**Option 4: Find Highest and Lowest**
- If no grades, display error
- Display highest grade and student number
- Display lowest grade and student number

**Option 5: Count Pass/Fail**
- If no grades, display error
- Count passes (>= 50) and failures (< 50)
- Display counts and percentages

**Option 6: Exit**
- Display "Thank you for using Grade Manager!"
- Exit the program

### Validation Requirements
- Menu choice must be 1-6 (use do-while for validation)
- Number of students must be 1-30
- Each grade must be 0-100
- Handle "no grades entered" case for options 2-5

## Sample Output

```
=== Student Grade Manager ===
1. Enter grades for students
2. Display all grades
3. Calculate class statistics
4. Find highest and lowest grades
5. Count pass/fail
6. Exit

Enter choice (1-6): 1

How many students? (1-30): 4

Enter grade for student 1: 85
Enter grade for student 2: 72
Enter grade for student 3: 45
Enter grade for student 4: 90

✓ 4 grades entered successfully!

=== Student Grade Manager ===
1. Enter grades for students
2. Display all grades
3. Calculate class statistics
4. Find highest and lowest grades
5. Count pass/fail
6. Exit

Enter choice (1-6): 2

Student #   Grade
---------   -----
1           85
2           72
3           45
4           90

=== Student Grade Manager ===
1. Enter grades for students
2. Display all grades
3. Calculate class statistics
4. Find highest and lowest grades
5. Count pass/fail
6. Exit

Enter choice (1-6): 3

=== Class Statistics ===
Number of Students: 4
Total Points: 292
Average Grade: 73.00

=== Student Grade Manager ===
1. Enter grades for students
2. Display all grades
3. Calculate class statistics
4. Find highest and lowest grades
5. Count pass/fail
6. Exit

Enter choice (1-6): 4

=== Highest and Lowest Grades ===
Highest: 90 (Student #4)
Lowest: 45 (Student #3)

=== Student Grade Manager ===
1. Enter grades for students
2. Display all grades
3. Calculate class statistics
4. Find highest and lowest grades
5. Count pass/fail
6. Exit

Enter choice (1-6): 5

=== Pass/Fail Analysis ===
Passes (>= 50): 3 (75.00%)
Failures (< 50): 1 (25.00%)

=== Student Grade Manager ===
1. Enter grades for students
2. Display all grades
3. Calculate class statistics
4. Find highest and lowest grades
5. Count pass/fail
6. Exit

Enter choice (1-6): 9
Invalid choice! Please enter 1-6.

Enter choice (1-6): 6

Thank you for using Grade Manager!
```

## What You'll Practice

- Using do-while loops for menu systems
- Switch statements for menu selection
- Arrays to store multiple values
- Breaking complex programs into manageable pieces
- Comprehensive input validation
- Handling edge cases (no data entered)
- Formatted table output
- Keeping track of program state
- Professional user interface design

## Hints

### Program Structure
```c
int main() {
    int grades[30];  // Array to store up to 30 grades
    int num_students = 0;  // Track how many grades entered
    int choice;

    do {
        // Display menu
        // Get choice (validate with do-while)

        switch (choice) {
            case 1: // Enter grades
            case 2: // Display grades
            case 3: // Statistics
            case 4: // High/Low
            case 5: // Pass/Fail
            case 6: // Exit
            default: // Invalid
        }
    } while (choice != 6);
}
```

### Tips
- Use `num_students` to track if grades have been entered (0 = no grades)
- For menu validation, use nested do-while:
  ```c
  do {
      scanf("%d", &choice);
      if (choice < 1 || choice > 6)
          printf("Invalid! Enter 1-6: ");
  } while (choice < 1 || choice > 6);
  ```
- To find highest: initialize to -1, update in loop if grade > highest
- To find lowest: initialize to 101, update in loop if grade < lowest
- Remember array indices start at 0, but student numbers start at 1
- Use `printf("%-9s   %s\n", "Student #", "Grade");` for table headers

### Common Pitfalls
- Forgetting to check if `num_students == 0` before processing
- Off-by-one errors with arrays vs student numbers
- Not validating menu choice properly
- Not clearing input buffer after scanf
- Forgetting to update `num_students` after entering grades
