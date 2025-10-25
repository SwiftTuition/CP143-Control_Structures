# Exercise 2: Grade Statistics Calculator

**Difficulty:** MEDIUM
**Concepts:** for loops, counter-controlled repetition, arithmetic operations, conditional logic

## Problem Description

Write a program that reads grades for a class of students and calculates various statistics including average, highest, lowest, and pass/fail counts.

## Requirements

1. Ask the user how many students are in the class (1-50)

2. Validate the number of students:
   - Must be between 1 and 50
   - If invalid, display error and exit

3. Use a **for loop** to:
   - Prompt for each student's grade
   - Validate each grade (0-100)
   - Keep track of:
     - Sum of all grades
     - Highest grade
     - Lowest grade
     - Number of passes (>= 50)
     - Number of failures (< 50)

4. After all grades are entered, calculate and display:
   - Class average (2 decimal places)
   - Highest grade
   - Lowest grade
   - Number of passes
   - Number of failures
   - Pass percentage (2 decimal places)

## Sample Output

```
=== Grade Statistics Calculator ===
Enter number of students (1-50): 5

Enter grade for student 1: 85
Enter grade for student 2: 72
Enter grade for student 3: 45
Enter grade for student 4: 90
Enter grade for student 5: 68

=== Grade Statistics ===
Class Average: 72.00
Highest Grade: 90
Lowest Grade: 45
Passes: 4
Failures: 1
Pass Rate: 80.00%
```

```
=== Grade Statistics Calculator ===
Enter number of students (1-50): 60
Error: Number of students must be between 1 and 50
```

```
=== Grade Statistics Calculator ===
Enter number of students (1-50): 3

Enter grade for student 1: 78
Enter grade for student 2: 150
Error: Grade must be between 0 and 100
Enter grade for student 2: 82
Enter grade for student 3: 91

=== Grade Statistics ===
Class Average: 83.67
Highest Grade: 91
Lowest Grade: 78
Passes: 3
Failures: 0
Pass Rate: 100.00%
```

## What You'll Practice

- Using for loops for counter-controlled repetition
- Keeping track of multiple values simultaneously
- Finding maximum and minimum values
- Calculating averages and percentages
- Input validation with loops
- Formatted output

## Hints

- Initialize highest to 0 and lowest to 101 before the loop
- Update highest/lowest inside the loop as you read grades
- Use a do-while loop to validate individual grades if needed
- Remember: average = sum / count
- Pass rate = (passes / total) × 100
- Use `%.2f` for 2 decimal places
- You can use nested loops: outer for loop for students, inner do-while for validation
