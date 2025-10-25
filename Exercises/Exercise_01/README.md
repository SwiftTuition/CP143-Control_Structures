# Exercise 1: Temperature Converter

**Difficulty:** EASY
**Concepts:** if-else statements, input validation, type casting, arithmetic operations

## Problem Description

Write a program that converts temperatures between Celsius and Fahrenheit. The user should be able to choose the conversion direction, and the program should validate all inputs.

## Requirements

1. Display a menu asking whether to convert from:
   - Celsius to Fahrenheit
   - Fahrenheit to Celsius

2. Read the user's choice (1 or 2)

3. Validate the choice:
   - If invalid, display an error message and exit

4. Read the temperature value from the user

5. Validate the temperature:
   - Celsius: must be >= -273.15 (absolute zero)
   - Fahrenheit: must be >= -459.67 (absolute zero)

6. Perform the conversion using these formulas:
   - Celsius to Fahrenheit: F = (C × 9/5) + 32
   - Fahrenheit to Celsius: C = (F - 32) × 5/9

7. Display the result with 2 decimal places

## Sample Output

```
=== Temperature Converter ===
1. Celsius to Fahrenheit
2. Fahrenheit to Celsius
Enter choice (1 or 2): 1

Enter temperature in Celsius: 25
25.00°C = 77.00°F
```

```
=== Temperature Converter ===
1. Celsius to Fahrenheit
2. Fahrenheit to Celsius
Enter choice (1 or 2): 2

Enter temperature in Fahrenheit: 98.6
98.60°F = 37.00°C
```

```
=== Temperature Converter ===
1. Celsius to Fahrenheit
2. Fahrenheit to Celsius
Enter choice (1 or 2): 1

Enter temperature in Celsius: -300
Error: Temperature below absolute zero (-273.15°C)
```

## What You'll Practice

- Using if-else statements for decision making
- Input validation with multiple conditions
- Type casting between int and double
- Formatted output with printf
- Handling edge cases

## Hints

- Use `double` for temperature values to preserve decimal precision
- Absolute zero in Celsius: -273.15°C
- Absolute zero in Fahrenheit: -459.67°F
- Use `%.2f` format specifier for 2 decimal places
- Test with both positive and negative temperatures
