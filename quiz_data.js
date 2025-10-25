// Control Structures Quiz Data
// ~100 questions covering if/else, loops, switch, logical operators, and more

const quizData = [
    // =================================================================
    // SECTION 1: IF STATEMENTS (Questions 1-12)
    // =================================================================
    {
        type: 'multiple-choice',
        question: 'What is the purpose of an if statement in C?',
        options: [
            'To repeat code multiple times',
            'To make decisions based on conditions',
            'To define functions',
            'To declare variables'
        ],
        correct: 1,
        explanation: 'An if statement allows the program to make decisions by executing code only when a specified condition is true.'
    },
    {
        type: 'true-false',
        question: 'An if statement must always have an else clause.',
        correct: false,
        explanation: 'An if statement can stand alone without an else clause. The else part is optional.'
    },
    {
        type: 'fill-gap',
        question: 'Complete the syntax: <code>if (condition) { _____ }</code>',
        answers: ['statement', 'statements', 'code', 'body'],
        caseSensitive: false,
        explanation: 'Inside the braces of an if statement, you place the statement(s) or code to execute when the condition is true.'
    },
    {
        type: 'multiple-choice',
        question: 'What will this code print? <pre><code class="language-c">int x = 10;\nif (x > 5) {\n    printf("A");\n}\nprintf("B");</code></pre>',
        options: ['A', 'B', 'AB', 'Nothing'],
        correct: 2,
        explanation: 'Since x > 5 is true, "A" is printed. Then "B" is printed regardless because it\'s outside the if statement. Output: AB'
    },
    {
        type: 'true-false',
        question: 'In C, any non-zero value is considered true in conditional expressions.',
        correct: true,
        explanation: 'In C, any non-zero value is treated as true, and zero is treated as false in boolean contexts.'
    },
    {
        type: 'multiple-choice',
        question: 'Which operator is used to test equality in an if statement?',
        options: ['=', '==', '===', '!='],
        correct: 1,
        explanation: 'The == operator tests for equality. The = operator is for assignment, not comparison.'
    },
    {
        type: 'fill-gap',
        question: 'What is the output? <pre><code class="language-c">int a = 5;\nif (a = 10) {\n    printf("%d", a);\n}</code></pre> Output: _____',
        answers: ['10'],
        caseSensitive: false,
        explanation: 'This is a common mistake! The code uses = (assignment) instead of == (comparison). It assigns 10 to a, which is non-zero (true), so the if body executes and prints 10.'
    },
    {
        type: 'multiple-choice',
        question: 'What happens if the condition in an if statement is false and there is no else?',
        options: [
            'Program crashes',
            'The code inside the if block is skipped',
            'The program ends',
            'A compiler error occurs'
        ],
        correct: 1,
        explanation: 'If the condition is false and there\'s no else clause, the program simply skips the if block and continues with the next statement.'
    },
    {
        type: 'true-false',
        question: 'Braces {} are always required for if statements, even for single statements.',
        correct: false,
        explanation: 'Braces are optional for single statements, though they\'re recommended for clarity. Example: if (x > 0) x++;'
    },
    {
        type: 'multiple-choice',
        question: 'What will be printed? <pre><code class="language-c">int score = 75;\nif (score >= 50)\n    printf("Pass");\n    printf("Done");</code></pre>',
        options: ['Pass', 'Done', 'PassDone', 'Pass Done'],
        correct: 2,
        explanation: 'Without braces, only the first printf is part of the if statement. "Pass" prints because score >= 50. "Done" always prints because it\'s not in the if block. Output: PassDone'
    },
    {
        type: 'fill-gap',
        question: 'To test if x is NOT equal to 5, you write: <code>if (x _____ 5)</code>',
        answers: ['!='],
        caseSensitive: false,
        explanation: 'The != operator tests for inequality. x != 5 is true when x is not equal to 5.'
    },
    {
        type: 'multiple-choice',
        question: 'Which is the correct way to check if a number is positive?',
        options: [
            'if (num > 0)',
            'if (num >= 1)',
            'if (num != 0)',
            'Both A and B'
        ],
        correct: 3,
        explanation: 'Both num > 0 and num >= 1 correctly check if an integer is positive (assuming integers). num != 0 would include negative numbers.'
    },

    // =================================================================
    // SECTION 2: IF-ELSE STATEMENTS (Questions 13-25)
    // =================================================================
    {
        type: 'multiple-choice',
        question: 'What is the purpose of an else clause?',
        options: [
            'To repeat the if block',
            'To execute code when the if condition is false',
            'To end the program',
            'To define a variable'
        ],
        correct: 1,
        explanation: 'The else clause provides an alternative code path that executes when the if condition is false.'
    },
    {
        type: 'true-false',
        question: 'You can have an else clause without a preceding if statement.',
        correct: false,
        explanation: 'An else clause must always be paired with an if statement. You cannot have else standing alone.'
    },
    {
        type: 'fill-gap',
        question: 'Complete the structure: <code>if (condition) { statements1; } _____ { statements2; }</code>',
        answers: ['else'],
        caseSensitive: false,
        explanation: 'The else keyword follows the if block to provide an alternative execution path.'
    },
    {
        type: 'multiple-choice',
        question: 'What will this print? <pre><code class="language-c">int age = 15;\nif (age >= 18) {\n    printf("Adult");\n} else {\n    printf("Minor");\n}</code></pre>',
        options: ['Adult', 'Minor', 'AdultMinor', 'Nothing'],
        correct: 1,
        explanation: 'Since age (15) is not >= 18, the condition is false, so the else block executes printing "Minor".'
    },
    {
        type: 'multiple-choice',
        question: 'What is the output? <pre><code class="language-c">int x = 10;\nif (x > 20) {\n    printf("A");\n} else if (x > 5) {\n    printf("B");\n} else {\n    printf("C");\n}</code></pre>',
        options: ['A', 'B', 'C', 'AB'],
        correct: 1,
        explanation: 'x is not > 20 (first if false), but x is > 5 (else if true), so "B" is printed. Once a condition is true, subsequent else-if and else are skipped.'
    },
    {
        type: 'true-false',
        question: 'You can chain multiple else-if conditions together.',
        correct: true,
        explanation: 'Yes, you can have multiple else-if clauses to test different conditions sequentially: if...else if...else if...else'
    },
    {
        type: 'fill-gap',
        question: 'How many else clauses can follow a single if statement? _____',
        answers: ['0', '1', 'one', 'zero or one', '0 or 1'],
        caseSensitive: false,
        explanation: 'An if statement can have zero or one else clause. You can have multiple else-if, but only one final else.'
    },
    {
        type: 'multiple-choice',
        question: 'What happens in an if-else if-else chain when a condition is true?',
        options: [
            'All subsequent blocks execute',
            'Only that block executes, rest are skipped',
            'The program restarts',
            'A compiler error occurs'
        ],
        correct: 1,
        explanation: 'In an if-else if-else chain, once a condition is true and its block executes, all remaining conditions are skipped.'
    },
    {
        type: 'multiple-choice',
        question: 'What will print? <pre><code class="language-c">int score = 85;\nif (score >= 90)\n    printf("A");\nelse if (score >= 80)\n    printf("B");\nelse if (score >= 70)\n    printf("C");\nelse\n    printf("F");</code></pre>',
        options: ['A', 'B', 'C', 'F'],
        correct: 1,
        explanation: 'score is not >= 90 (false), but is >= 80 (true), so "B" prints. The chain stops there.'
    },
    {
        type: 'true-false',
        question: 'The final else in an if-else if-else chain is required.',
        correct: false,
        explanation: 'The final else is optional. It acts as a "catch-all" for when all previous conditions are false, but you don\'t have to include it.'
    },
    {
        type: 'multiple-choice',
        question: 'Which is NOT valid C syntax?',
        options: [
            'if (x > 0) { }',
            'if (x > 0) { } else { }',
            'else { } if (x > 0) { }',
            'if (x > 0) { } else if (x < 0) { }'
        ],
        correct: 2,
        explanation: 'Option C is invalid. else must come after if, not before it. The syntax must be: if...else, not else...if.'
    },
    {
        type: 'fill-gap',
        question: 'To convert a nested if to an if-else if chain, you combine the _____ keyword with if.',
        answers: ['else'],
        caseSensitive: false,
        explanation: 'The else if combination allows you to chain multiple conditions: if...else if...else if...else'
    },
    {
        type: 'multiple-choice',
        question: 'What is the output? <pre><code class="language-c">int temp = 25;\nif (temp > 30)\n    printf("Hot");\nelse if (temp > 20)\n    printf("Warm");\nelse if (temp > 10)\n    printf("Cool");\nelse\n    printf("Cold");</code></pre>',
        options: ['Hot', 'Warm', 'Cool', 'Cold'],
        correct: 1,
        explanation: 'temp (25) is not > 30, but is > 20, so "Warm" prints and the chain stops.'
    },

    // =================================================================
    // SECTION 3: WHILE LOOPS (Questions 26-38)
    // =================================================================
    {
        type: 'multiple-choice',
        question: 'What is the purpose of a while loop?',
        options: [
            'To execute code exactly once',
            'To repeat code while a condition is true',
            'To define a function',
            'To declare variables'
        ],
        correct: 1,
        explanation: 'A while loop repeatedly executes a block of code as long as the specified condition remains true.'
    },
    {
        type: 'true-false',
        question: 'A while loop checks its condition before executing the loop body.',
        correct: true,
        explanation: 'Yes, while is a pre-test loop. It evaluates the condition first, and if false initially, the body never executes.'
    },
    {
        type: 'fill-gap',
        question: 'Complete the syntax: <code>_____ (condition) { statements; }</code>',
        answers: ['while'],
        caseSensitive: false,
        explanation: 'The while keyword starts a while loop: while (condition) { statements; }'
    },
    {
        type: 'multiple-choice',
        question: 'How many times will this loop execute? <pre><code class="language-c">int i = 0;\nwhile (i < 5) {\n    printf("%d ", i);\n    i++;\n}</code></pre>',
        options: ['4 times', '5 times', '6 times', 'Infinite times'],
        correct: 1,
        explanation: 'The loop executes when i = 0, 1, 2, 3, 4 (5 times total). When i becomes 5, the condition i < 5 is false and the loop stops.'
    },
    {
        type: 'true-false',
        question: 'If the while loop condition is initially false, the loop body executes at least once.',
        correct: false,
        explanation: 'False. If the condition is initially false, the while loop body never executes (unlike do-while which executes at least once).'
    },
    {
        type: 'multiple-choice',
        question: 'What causes an infinite loop?',
        options: [
            'The condition is always false',
            'The condition never becomes false',
            'Using break statement',
            'Using continue statement'
        ],
        correct: 1,
        explanation: 'An infinite loop occurs when the loop condition never becomes false, causing the loop to run forever (or until interrupted).'
    },
    {
        type: 'fill-gap',
        question: 'What is the output? <pre><code class="language-c">int x = 10;\nwhile (x > 12) {\n    printf("A");\n    x--;\n}</code></pre> Output: _____',
        answers: ['nothing', 'no output', 'none', ''],
        caseSensitive: false,
        explanation: 'Since x (10) is not > 12, the condition is false from the start, so the loop body never executes. No output.'
    },
    {
        type: 'multiple-choice',
        question: 'Which type of repetition is while loop best suited for?',
        options: [
            'Counter-controlled repetition',
            'Sentinel-controlled repetition',
            'Both A and B',
            'Neither A nor B'
        ],
        correct: 2,
        explanation: 'While loops can be used for both counter-controlled (known iterations) and sentinel-controlled (unknown iterations) repetition.'
    },
    {
        type: 'true-false',
        question: 'A while loop must have braces {} even for a single statement.',
        correct: false,
        explanation: 'Like if statements, braces are optional for single statements in while loops, though recommended for clarity.'
    },
    {
        type: 'multiple-choice',
        question: 'What will this print? <pre><code class="language-c">int count = 1;\nwhile (count <= 3) {\n    printf("%d ", count);\n    count++;\n}</code></pre>',
        options: ['1 2', '1 2 3', '1 2 3 4', '0 1 2 3'],
        correct: 1,
        explanation: 'The loop prints count when it equals 1, 2, and 3. Output: 1 2 3'
    },
    {
        type: 'fill-gap',
        question: 'To avoid an infinite loop, you must ensure the loop condition eventually becomes _____.',
        answers: ['false', 'False', 'FALSE'],
        caseSensitive: false,
        explanation: 'For a loop to terminate, the condition must eventually become false. Otherwise, it loops infinitely.'
    },
    {
        type: 'multiple-choice',
        question: 'What is a sentinel value?',
        options: [
            'A value that starts the loop',
            'A special value that signals the end of input',
            'A counter variable',
            'An error value'
        ],
        correct: 1,
        explanation: 'A sentinel value is a special value (like -1 or 0) that indicates the end of data input, used to control sentinel-controlled loops.'
    },
    {
        type: 'true-false',
        question: 'The loop variable should be initialized before the while loop.',
        correct: true,
        explanation: 'Yes, variables used in the loop condition should be initialized before the loop starts, or else they contain garbage values.'
    },

    // =================================================================
    // SECTION 4: FOR LOOPS (Questions 39-52)
    // =================================================================
    {
        type: 'multiple-choice',
        question: 'What are the three parts of a for loop header?',
        options: [
            'initialization, condition, increment',
            'start, stop, step',
            'begin, check, update',
            'counter, limit, change'
        ],
        correct: 0,
        explanation: 'A for loop header has three parts: initialization (int i = 0), condition (i < 10), and increment/update (i++).'
    },
    {
        type: 'true-false',
        question: 'For loops are best suited for counter-controlled repetition.',
        correct: true,
        explanation: 'Yes, for loops are ideal when you know how many times to iterate (counter-controlled repetition).'
    },
    {
        type: 'fill-gap',
        question: 'Complete the syntax: <code>for (_____; _____; _____) { }</code>',
        answers: ['initialization; condition; increment', 'init; condition; update', 'start; test; change'],
        caseSensitive: false,
        explanation: 'The three parts separated by semicolons are: initialization; condition; increment/update'
    },
    {
        type: 'multiple-choice',
        question: 'How many times will this loop execute? <pre><code class="language-c">for (int i = 0; i < 10; i++) {\n    printf("%d ", i);\n}</code></pre>',
        options: ['9 times', '10 times', '11 times', 'Infinite times'],
        correct: 1,
        explanation: 'The loop runs when i = 0, 1, 2, ..., 9 (10 times). When i becomes 10, i < 10 is false and the loop stops.'
    },
    {
        type: 'true-false',
        question: 'In a for loop, the increment expression executes before the loop body.',
        correct: false,
        explanation: 'False. The sequence is: initialization → condition check → body → increment → condition check → ...'
    },
    {
        type: 'multiple-choice',
        question: 'What will this print? <pre><code class="language-c">for (int i = 1; i <= 5; i++) {\n    printf("%d ", i);\n}</code></pre>',
        options: ['0 1 2 3 4', '1 2 3 4', '1 2 3 4 5', '1 2 3 4 5 6'],
        correct: 2,
        explanation: 'The loop prints 1, 2, 3, 4, 5. It starts at i=1 and continues while i <= 5.'
    },
    {
        type: 'fill-gap',
        question: 'To count backwards from 10 to 1, you would use: <code>for (int i = 10; i >= 1; _____)</code>',
        answers: ['i--', '--i'],
        caseSensitive: false,
        explanation: 'To count down, decrement i using i-- or --i: for (int i = 10; i >= 1; i--)'
    },
    {
        type: 'multiple-choice',
        question: 'Can any of the three parts of a for loop be omitted?',
        options: [
            'No, all three are required',
            'Yes, but you must keep the semicolons',
            'Only the increment can be omitted',
            'Only the initialization can be omitted'
        ],
        correct: 1,
        explanation: 'Any or all parts can be omitted, but the semicolons must remain: for (;;) creates an infinite loop.'
    },
    {
        type: 'true-false',
        question: 'The statement <code>for (int i = 0; i < 10; )</code> is invalid because it\'s missing the increment.',
        correct: false,
        explanation: 'It\'s valid syntax (though unusual). The increment is optional. You might update i inside the loop body instead.'
    },
    {
        type: 'multiple-choice',
        question: 'What is the output? <pre><code class="language-c">for (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 2; j++) {\n        printf("*");\n    }\n}</code></pre>',
        options: ['*', '**', '***', '******'],
        correct: 3,
        explanation: 'The outer loop runs 3 times, and for each iteration, the inner loop prints 2 stars. Total: 3 × 2 = 6 stars.'
    },
    {
        type: 'fill-gap',
        question: 'A for loop is equivalent to a _____ loop with the initialization before and increment inside the loop.',
        answers: ['while'],
        caseSensitive: false,
        explanation: 'A for loop can be rewritten as a while loop with initialization before the loop and increment at the end of the loop body.'
    },
    {
        type: 'multiple-choice',
        question: 'What is wrong with this loop? <pre><code class="language-c">for (int i = 0; i < 10; i--) {\n    printf("%d ", i);\n}</code></pre>',
        options: [
            'Syntax error',
            'Creates infinite loop',
            'Won\'t execute at all',
            'Nothing wrong'
        ],
        correct: 1,
        explanation: 'i starts at 0 and decrements (i--), so i will always be less than 10, creating an infinite loop.'
    },
    {
        type: 'true-false',
        question: 'You can use multiple variables in a for loop initialization and increment.',
        correct: true,
        explanation: 'Yes, you can use comma-separated lists: for (int i = 0, j = 10; i < j; i++, j--)'
    },
    {
        type: 'multiple-choice',
        question: 'Which loop structure is most appropriate when you know exactly how many iterations are needed?',
        options: ['while', 'do-while', 'for', 'All are equally suitable'],
        correct: 2,
        explanation: 'For loops are best for counter-controlled repetition when you know the exact number of iterations.'
    },

    // =================================================================
    // SECTION 5: DO-WHILE LOOPS (Questions 53-63)
    // =================================================================
    {
        type: 'multiple-choice',
        question: 'What is the key difference between while and do-while loops?',
        options: [
            'do-while executes at least once',
            'while executes at least once',
            'They are identical',
            'do-while cannot be infinite'
        ],
        correct: 0,
        explanation: 'do-while is a post-test loop that executes the body first, then checks the condition. It always executes at least once.'
    },
    {
        type: 'true-false',
        question: 'A do-while loop checks its condition before executing the loop body.',
        correct: false,
        explanation: 'False. do-while checks the condition AFTER executing the body (post-test), unlike while which checks before (pre-test).'
    },
    {
        type: 'fill-gap',
        question: 'Complete the syntax: <code>_____ { statements; } while (condition);</code>',
        answers: ['do'],
        caseSensitive: false,
        explanation: 'The do keyword starts a do-while loop: do { statements; } while (condition);'
    },
    {
        type: 'multiple-choice',
        question: 'How many times will this loop execute? <pre><code class="language-c">int i = 10;\ndo {\n    printf("%d ", i);\n    i++;\n} while (i < 5);</code></pre>',
        options: ['0 times', '1 time', '5 times', 'Infinite times'],
        correct: 1,
        explanation: 'Even though the condition (i < 5) is false initially, the do-while body executes once before checking the condition. It prints 10 once.'
    },
    {
        type: 'true-false',
        question: 'The do-while loop ends with a semicolon after the condition.',
        correct: true,
        explanation: 'Yes, do-while requires a semicolon after the condition: do { } while (condition);'
    },
    {
        type: 'fill-gap',
        question: 'What is the output? <pre><code class="language-c">int x = 0;\ndo {\n    printf("A");\n    x++;\n} while (x < 0);</code></pre> Output: _____',
        answers: ['A'],
        caseSensitive: false,
        explanation: 'The body executes once (printing "A"), then the condition (x < 0) is checked. Since it\'s false (x = 1), the loop stops. Output: A'
    },
    {
        type: 'multiple-choice',
        question: 'When is a do-while loop most appropriate?',
        options: [
            'When you need exact iteration count',
            'When you need to execute at least once',
            'When you never want to execute',
            'When you need nested loops'
        ],
        correct: 1,
        explanation: 'do-while is best when you need the loop body to execute at least once, such as menu-driven programs or input validation.'
    },
    {
        type: 'true-false',
        question: 'A while loop can always be converted to a do-while loop without changing behavior.',
        correct: false,
        explanation: 'False. If the while condition is initially false, the while body doesn\'t execute, but a do-while body always executes once.'
    },
    {
        type: 'multiple-choice',
        question: 'What will this print? <pre><code class="language-c">int count = 1;\ndo {\n    printf("%d ", count);\n    count++;\n} while (count <= 3);</code></pre>',
        options: ['1', '1 2', '1 2 3', '1 2 3 4'],
        correct: 2,
        explanation: 'The loop prints 1, then 2, then 3. After printing 3, count becomes 4, and the condition (count <= 3) is false. Output: 1 2 3'
    },
    {
        type: 'fill-gap',
        question: 'A common use of do-while is input _____ where you must prompt the user at least once.',
        answers: ['validation', 'verify', 'checking'],
        caseSensitive: false,
        explanation: 'do-while is commonly used for input validation, ensuring the user is prompted at least once and re-prompted if input is invalid.'
    },
    {
        type: 'multiple-choice',
        question: 'Which loop guarantees at least one execution?',
        options: ['for', 'while', 'do-while', 'All of them'],
        correct: 2,
        explanation: 'Only do-while guarantees at least one execution because it checks the condition after the body, not before.'
    },

    // =================================================================
    // SECTION 6: SWITCH STATEMENTS (Questions 64-75)
    // =================================================================
    {
        type: 'multiple-choice',
        question: 'What is the purpose of a switch statement?',
        options: [
            'To loop through code',
            'To test a variable against multiple values',
            'To declare variables',
            'To perform arithmetic'
        ],
        correct: 1,
        explanation: 'A switch statement tests a variable or expression against multiple specific values (cases).'
    },
    {
        type: 'true-false',
        question: 'Switch statements can test floating-point values.',
        correct: false,
        explanation: 'False. Switch statements only work with integer types (int, char) and enumerated types, not floating-point (float, double).'
    },
    {
        type: 'fill-gap',
        question: 'Complete the syntax: <code>switch (expression) { _____ 1: statements; break; }</code>',
        answers: ['case'],
        caseSensitive: false,
        explanation: 'The case keyword labels each value to test: switch (x) { case 1: ...; break; case 2: ...; break; }'
    },
    {
        type: 'multiple-choice',
        question: 'What happens if you omit break in a switch case?',
        options: [
            'Compiler error',
            'Program crashes',
            'Fall-through to next case',
            'The switch ends'
        ],
        correct: 2,
        explanation: 'Without break, execution "falls through" to the next case. This is sometimes intentional but often a bug.'
    },
    {
        type: 'true-false',
        question: 'The default case in a switch statement is required.',
        correct: false,
        explanation: 'The default case is optional. It acts as a catch-all for values not matched by any case, but you don\'t have to include it.'
    },
    {
        type: 'multiple-choice',
        question: 'What will this print? <pre><code class="language-c">int x = 2;\nswitch (x) {\n    case 1: printf("A"); break;\n    case 2: printf("B"); break;\n    case 3: printf("C"); break;\n    default: printf("D");\n}</code></pre>',
        options: ['A', 'B', 'C', 'D'],
        correct: 1,
        explanation: 'x equals 2, so case 2 matches, printing "B", then break exits the switch.'
    },
    {
        type: 'fill-gap',
        question: 'The _____ case handles all values not explicitly matched by other cases.',
        answers: ['default'],
        caseSensitive: false,
        explanation: 'The default case acts as a catch-all for any value not matched by the specific case labels.'
    },
    {
        type: 'multiple-choice',
        question: 'What is the output? <pre><code class="language-c">int day = 3;\nswitch (day) {\n    case 1: printf("Mon");\n    case 2: printf("Tue");\n    case 3: printf("Wed");\n    case 4: printf("Thu");\n}</code></pre>',
        options: ['Wed', 'WedThu', 'MonTueWedThu', 'Error'],
        correct: 1,
        explanation: 'day is 3, so case 3 matches and prints "Wed". Without break, it falls through to case 4, printing "Thu". Output: WedThu'
    },
    {
        type: 'true-false',
        question: 'You can use character values in switch cases.',
        correct: true,
        explanation: 'Yes, characters (char type) are valid in switch statements. Example: case \'A\': ... break;'
    },
    {
        type: 'multiple-choice',
        question: 'Which type of expression can a switch statement NOT evaluate?',
        options: ['int', 'char', 'enum', 'double'],
        correct: 3,
        explanation: 'Switch statements cannot evaluate floating-point types (float, double). Only integer types and enums are allowed.'
    },
    {
        type: 'fill-gap',
        question: 'To exit a switch statement after a case executes, use the _____ statement.',
        answers: ['break'],
        caseSensitive: false,
        explanation: 'The break statement exits the switch, preventing fall-through to subsequent cases.'
    },
    {
        type: 'multiple-choice',
        question: 'Can multiple case labels execute the same code block?',
        options: [
            'No, each case must have unique code',
            'Yes, by stacking cases without break',
            'Only if they are consecutive values',
            'Only with default'
        ],
        correct: 1,
        explanation: 'Yes, you can stack cases: case 1: case 2: case 3: printf("1-3"); break; All three values execute the same code.'
    },

    // =================================================================
    // SECTION 7: NESTED LOOPS (Questions 76-85)
    // =================================================================
    {
        type: 'multiple-choice',
        question: 'What is a nested loop?',
        options: [
            'A loop inside another loop',
            'A loop that never ends',
            'A loop with multiple conditions',
            'A loop with break statement'
        ],
        correct: 0,
        explanation: 'A nested loop is a loop placed inside the body of another loop. The inner loop completes all its iterations for each iteration of the outer loop.'
    },
    {
        type: 'true-false',
        question: 'An inner loop completes all its iterations for each iteration of the outer loop.',
        correct: true,
        explanation: 'Yes, for each single iteration of the outer loop, the inner loop runs through all its iterations.'
    },
    {
        type: 'fill-gap',
        question: 'How many times will "Hello" print? <pre><code class="language-c">for (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 4; j++) {\n        printf("Hello\\n");\n    }\n}</code></pre> Answer: _____ times',
        answers: ['12', 'twelve'],
        caseSensitive: false,
        explanation: 'Outer loop runs 3 times, inner loop runs 4 times per outer iteration. Total: 3 × 4 = 12 times.'
    },
    {
        type: 'multiple-choice',
        question: 'What pattern will this print? <pre><code class="language-c">for (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= i; j++) {\n        printf("*");\n    }\n    printf("\\n");\n}</code></pre>',
        options: [
            '*\n**\n***',
            '***\n**\n*',
            '*\n*\n*',
            '***\n***\n***'
        ],
        correct: 0,
        explanation: 'For i=1: 1 star, i=2: 2 stars, i=3: 3 stars. Creates a right triangle pattern: *\\n**\\n***'
    },
    {
        type: 'true-false',
        question: 'You can nest loops of different types (e.g., for inside while).',
        correct: true,
        explanation: 'Yes, you can mix loop types: for inside while, while inside do-while, etc.'
    },
    {
        type: 'multiple-choice',
        question: 'How many iterations total? <pre><code class="language-c">for (int i = 0; i < 2; i++) {\n    for (int j = 0; j < 3; j++) {\n        for (int k = 0; k < 4; k++) {\n            // code here\n        }\n    }\n}</code></pre>',
        options: ['9', '24', '6', '12'],
        correct: 1,
        explanation: 'Triple nested loop: 2 × 3 × 4 = 24 total iterations.'
    },
    {
        type: 'fill-gap',
        question: 'In nested loops, the _____ loop completes all iterations before the outer loop increments once.',
        answers: ['inner', 'innermost'],
        caseSensitive: false,
        explanation: 'The inner loop fully completes all its iterations for each single iteration of the outer loop.'
    },
    {
        type: 'multiple-choice',
        question: 'What will this print? <pre><code class="language-c">for (int i = 1; i <= 2; i++) {\n    for (int j = 1; j <= 3; j++) {\n        printf("%d%d ", i, j);\n    }\n}</code></pre>',
        options: [
            '11 12 13 21 22 23',
            '11 21 12 22 13 23',
            '12 13 21 22 23',
            '11 11 11 22 22 22'
        ],
        correct: 0,
        explanation: 'For i=1: prints 11, 12, 13. For i=2: prints 21, 22, 23. Output: 11 12 13 21 22 23'
    },
    {
        type: 'true-false',
        question: 'A break statement in an inner loop will exit both the inner and outer loops.',
        correct: false,
        explanation: 'False. break only exits the innermost loop containing it, not outer loops.'
    },
    {
        type: 'multiple-choice',
        question: 'Nested loops are commonly used for:',
        options: [
            'Processing 2D arrays/matrices',
            'Creating patterns',
            'Handling multi-dimensional data',
            'All of the above'
        ],
        correct: 3,
        explanation: 'Nested loops are used for all these purposes: 2D arrays, patterns, tables, and multi-dimensional data structures.'
    },

    // =================================================================
    // SECTION 8: LOGICAL OPERATORS (Questions 86-96)
    // =================================================================
    {
        type: 'multiple-choice',
        question: 'What does the && (logical AND) operator do?',
        options: [
            'Returns true if either condition is true',
            'Returns true only if both conditions are true',
            'Returns true if conditions are different',
            'Performs bitwise AND'
        ],
        correct: 1,
        explanation: 'The && operator returns true only when BOTH operands are true. If either is false, the result is false.'
    },
    {
        type: 'true-false',
        question: 'The expression (5 > 3 && 2 < 4) evaluates to true.',
        correct: true,
        explanation: 'Both conditions are true: 5 > 3 is true AND 2 < 4 is true, so the entire expression is true.'
    },
    {
        type: 'fill-gap',
        question: 'The _____ operator returns true if at least one of its operands is true.',
        answers: ['||', 'or', 'OR'],
        caseSensitive: false,
        explanation: 'The || (logical OR) operator returns true if either or both operands are true.'
    },
    {
        type: 'multiple-choice',
        question: 'What is the result of (10 > 5 || 3 > 8)?',
        options: ['true', 'false', '0', 'Compiler error'],
        correct: 0,
        explanation: '10 > 5 is true, so the entire OR expression is true (doesn\'t matter that 3 > 8 is false).'
    },
    {
        type: 'true-false',
        question: 'The ! (NOT) operator reverses a boolean value.',
        correct: true,
        explanation: 'Yes, ! (logical NOT) reverses the truth value: !true becomes false, !false becomes true.'
    },
    {
        type: 'multiple-choice',
        question: 'What will this print? <pre><code class="language-c">int x = 5;\nif (x > 3 && x < 10) {\n    printf("Yes");\n} else {\n    printf("No");\n}</code></pre>',
        options: ['Yes', 'No', 'YesNo', 'Nothing'],
        correct: 0,
        explanation: 'x is 5, which is both > 3 AND < 10, so both conditions are true and "Yes" prints.'
    },
    {
        type: 'fill-gap',
        question: 'What is the result of !(5 > 10)? Answer: _____ (true/false)',
        answers: ['true', 'True', 'TRUE', '1'],
        caseSensitive: false,
        explanation: '5 > 10 is false. The ! operator reverses it to true.'
    },
    {
        type: 'multiple-choice',
        question: 'What is the output? <pre><code class="language-c">int age = 25;\nif (age < 18 || age > 65) {\n    printf("Discount");\n} else {\n    printf("Full Price");\n}</code></pre>',
        options: ['Discount', 'Full Price', 'Both', 'Error'],
        correct: 1,
        explanation: 'age is 25, which is NOT < 18 and NOT > 65. Both conditions are false, so the OR is false. Prints "Full Price".'
    },
    {
        type: 'true-false',
        question: 'In C, the && operator uses short-circuit evaluation.',
        correct: true,
        explanation: 'Yes, if the first operand of && is false, the second operand is not evaluated (short-circuit).'
    },
    {
        type: 'multiple-choice',
        question: 'Which expression checks if x is between 10 and 20 (inclusive)?',
        options: [
            '(10 < x < 20)',
            '(x > 10 && x < 20)',
            '(x >= 10 && x <= 20)',
            '(x == 10 || x == 20)'
        ],
        correct: 2,
        explanation: 'To check inclusive range: (x >= 10 && x <= 20). Option A doesn\'t work in C (it\'s not valid syntax for range checking).'
    },
    {
        type: 'fill-gap',
        question: 'What is the result of (0 && 1)? Answer: _____ (0/1)',
        answers: ['0', 'false', 'False', 'FALSE'],
        caseSensitive: false,
        explanation: 'In C, 0 is false and 1 is true. false AND true = false (0).'
    },

    // =================================================================
    // SECTION 9: INCREMENT/DECREMENT OPERATORS (Questions 97-105)
    // =================================================================
    {
        type: 'multiple-choice',
        question: 'What does the ++ operator do?',
        options: [
            'Adds 10 to a variable',
            'Adds 1 to a variable',
            'Multiplies by 2',
            'Does nothing'
        ],
        correct: 1,
        explanation: 'The ++ (increment) operator adds 1 to a variable: x++ is equivalent to x = x + 1.'
    },
    {
        type: 'true-false',
        question: 'The expressions x++ and ++x have the same effect when used alone.',
        correct: true,
        explanation: 'When used in isolation (not in an expression), both x++ and ++x simply increment x by 1.'
    },
    {
        type: 'fill-gap',
        question: 'What is the value of y? <pre><code class="language-c">int x = 5;\nint y = x++;</code></pre> y = _____',
        answers: ['5'],
        caseSensitive: false,
        explanation: 'x++ is post-increment: y gets the old value of x (5), then x increments to 6. So y = 5.'
    },
    {
        type: 'multiple-choice',
        question: 'What is the value of y? <pre><code class="language-c">int x = 5;\nint y = ++x;</code></pre>',
        options: ['4', '5', '6', '7'],
        correct: 2,
        explanation: '++x is pre-increment: x increments to 6 first, then y gets the new value. Both x and y are 6.'
    },
    {
        type: 'true-false',
        question: 'The -- operator decrements a variable by 1.',
        correct: true,
        explanation: 'Yes, the -- (decrement) operator subtracts 1 from a variable: x-- is equivalent to x = x - 1.'
    },
    {
        type: 'multiple-choice',
        question: 'What will this print? <pre><code class="language-c">int a = 10;\nprintf("%d ", a++);\nprintf("%d", a);</code></pre>',
        options: ['10 10', '10 11', '11 11', '11 10'],
        correct: 1,
        explanation: 'First printf prints a (10), then a increments. Second printf prints a (11). Output: 10 11'
    },
    {
        type: 'fill-gap',
        question: 'What is the final value of x? <pre><code class="language-c">int x = 5;\nx++;\n++x;\nx--;</code></pre> x = _____',
        answers: ['6'],
        caseSensitive: false,
        explanation: 'x starts at 5, increments to 6, increments to 7, decrements to 6. Final value: 6'
    },
    {
        type: 'multiple-choice',
        question: 'What is the difference between i++ and ++i in a for loop increment section?',
        options: [
            'i++ is faster',
            '++i is faster',
            'No practical difference',
            'i++ doesn\'t work'
        ],
        correct: 2,
        explanation: 'In the increment section of a for loop (not in an expression), there\'s no practical difference between i++ and ++i.'
    },
    {
        type: 'true-false',
        question: 'You can use ++ and -- operators on constants like 5++ or 10--.',
        correct: false,
        explanation: 'False. Increment and decrement operators require a variable (lvalue), not a constant. 5++ is a syntax error.'
    },

    // =================================================================
    // SECTION 10: MIXED CONCEPTS & REVIEW (Questions 106-110)
    // =================================================================
    {
        type: 'multiple-choice',
        question: 'Which statement is true about assignment operators like += and -=?',
        options: [
            'They are shorthand for longer expressions',
            'x += 5 is the same as x = x + 5',
            'They make code more concise',
            'All of the above'
        ],
        correct: 3,
        explanation: 'Assignment operators (+=, -=, *=, /=, %=) are shorthand: x += 5 means x = x + 5. They make code more concise.'
    },
    {
        type: 'true-false',
        question: 'The continue statement skips the rest of the current iteration and moves to the next iteration.',
        correct: true,
        explanation: 'Yes, continue skips the remaining code in the loop body and jumps to the next iteration (or condition check).'
    },
    {
        type: 'fill-gap',
        question: 'The _____ statement immediately exits a loop regardless of the loop condition.',
        answers: ['break'],
        caseSensitive: false,
        explanation: 'The break statement exits the innermost loop immediately, bypassing the loop condition.'
    },
    {
        type: 'multiple-choice',
        question: 'What is the recommended practice for complex conditions in if statements?',
        options: [
            'Avoid parentheses',
            'Use clear variable names and group conditions with parentheses',
            'Put all conditions on one line',
            'Use only simple conditions'
        ],
        correct: 1,
        explanation: 'Use meaningful names and parentheses to group conditions for readability: if ((age >= 18) && (hasLicense))'
    },
    {
        type: 'multiple-choice',
        question: 'Which control structure is best for implementing a menu-driven program?',
        options: [
            'for loop',
            'while loop with switch',
            'do-while loop with switch',
            'Only if-else'
        ],
        correct: 2,
        explanation: 'do-while with switch is ideal for menus: do-while ensures menu displays at least once, switch handles menu choices efficiently.'
    }
];
