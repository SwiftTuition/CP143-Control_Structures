# Exercise 4: Pattern Printer

**Difficulty:** MEDIUM-HARD
**Concepts:** nested loops, logical operators, pattern recognition, loop control

## Problem Description

Write a program that displays a menu of different patterns and prints the selected pattern based on user input. This exercise focuses on mastering nested loops and understanding how to control loop iterations to create visual patterns.

## Requirements

1. Display a menu with 5 pattern options:
   - Pattern 1: Right Triangle
   - Pattern 2: Inverted Right Triangle
   - Pattern 3: Pyramid
   - Pattern 4: Diamond
   - Pattern 5: Hollow Square

2. Ask user to select a pattern (1-5)

3. Validate the choice:
   - If invalid, display error and exit

4. Ask for the size of the pattern (5-20)
   - For triangles and pyramid: height
   - For diamond: half-height (total height will be 2*size-1)
   - For square: side length

5. Validate the size (5-20)
   - If invalid, display error and exit

6. Print the selected pattern using nested for loops

## Pattern Specifications

### Pattern 1: Right Triangle
```
Size: 5
*
**
***
****
*****
```

### Pattern 2: Inverted Right Triangle
```
Size: 5
*****
****
***
**
*
```

### Pattern 3: Pyramid
```
Size: 5
    *
   ***
  *****
 *******
*********
```

### Pattern 4: Diamond
```
Size: 5 (creates 9-row diamond)
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

### Pattern 5: Hollow Square
```
Size: 7
*******
*     *
*     *
*     *
*     *
*     *
*******
```

## Sample Output

```
=== Pattern Printer ===
Select a pattern:
1. Right Triangle
2. Inverted Right Triangle
3. Pyramid
4. Diamond
5. Hollow Square

Enter choice (1-5): 3
Enter size (5-20): 6

    *
   ***
  *****
 *******
*********
***********
```

```
=== Pattern Printer ===
Select a pattern:
1. Right Triangle
2. Inverted Right Triangle
3. Pyramid
4. Diamond
5. Hollow Square

Enter choice (1-5): 5
Enter size (5-20): 5

*****
*   *
*   *
*   *
*****
```

## What You'll Practice

- Using nested for loops
- Understanding loop indices and relationships
- Logical operators in loop conditions
- Pattern recognition and mathematical relationships
- Switch statements for menu selection
- Multiple validation checks

## Hints

### General Approach
- Use nested loops: outer loop for rows, inner loop(s) for columns
- Think about what to print in each position: space, star, or nothing

### Pattern-Specific Hints

**Right Triangle:**
- Row i should have i stars
- Outer loop: `for (int i = 1; i <= size; i++)`
- Inner loop: `for (int j = 1; j <= i; j++)`

**Inverted Triangle:**
- Row i should have (size - i + 1) stars
- Outer loop: `for (int i = 1; i <= size; i++)`
- Inner loop: `for (int j = i; j <= size; j++)`

**Pyramid:**
- Row i needs (size - i) spaces, then (2*i - 1) stars
- Use two inner loops: one for spaces, one for stars

**Diamond:**
- Combine pyramid (top half) and inverted pyramid (bottom half)
- Top half: rows 1 to size
- Bottom half: rows 1 to size-1 (or reverse)

**Hollow Square:**
- Print stars only on:
  - First row (i == 1)
  - Last row (i == size)
  - First column (j == 1)
  - Last column (j == size)
- Otherwise print space

### Debugging Tips
- Print row and column numbers to understand the pattern
- Start with one pattern, get it working, then add others
- Test with small sizes (5) before larger ones
