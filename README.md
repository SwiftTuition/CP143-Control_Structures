# CP143 Control Structures - Study Materials

Comprehensive study materials for **CP143: Control Structures** at Stellenbosch University, created by Swift Tuition.

## 📚 What's Included

This repository contains interactive study materials covering all aspects of control structures in C programming:

- **Theory Notes** (`theory.html`) - Complete conceptual coverage
- **Practical Examples** (`examples.html`) - Working code demonstrations with interactive playgrounds
- **Practice Exercises** (`practice.html`) - 5 graded exercises with solutions
- **Quiz** (`quiz.html`) - 50 comprehensive questions to test your knowledge
- **Exercise Files** (`Exercises/` & `Exercises.zip`) - Downloadable starter files for practice

## 🚀 Quick Start

### Option 1: View Online (Recommended)
Simply open any `.html` file in your web browser to start learning!

1. Download or clone this repository
2. Open `theory.html` to start with concepts
3. Progress through `examples.html` for hands-on learning
4. Test yourself with `practice.html` exercises
5. Complete the `quiz.html` to assess your knowledge

### Option 2: Download Exercise Files
- Extract `Exercises.zip` to get starter code with TODO comments
- Each exercise folder contains:
  - `README.md` with instructions
  - Starter `.c` file with structure and comments
  - Reference to solution in `practice.html`

## 📖 Topics Covered

### 1. Sequential Control
- Statement execution order
- Basic program flow

### 2. Selection Structures
- **if statements** - Single condition decisions
- **if-else statements** - Binary choices
- **Nested if** - Complex decision trees
- **switch statements** - Multi-way selection

### 3. Repetition Structures (Loops)
- **for loops** - Counter-controlled repetition
- **while loops** - Pre-test loops
- **do-while loops** - Post-test loops
- **Nested loops** - Multi-dimensional iteration

### 4. Control Flow
- **break** - Early loop exit
- **continue** - Skip to next iteration
- **return** - Function exit

## 🎯 Practice Exercises

The repository includes 5 progressively challenging exercises:

1. **Temperature Converter** (Easy) - if-else, input validation
2. **Grade Statistics** (Medium) - for loops, arithmetic operations
3. **Number Guessing Game** (Medium) - while/do-while, random numbers
4. **Pattern Printer** (Medium-Hard) - nested loops, switch statements
5. **Student Grade Manager** (Hard) - complete menu system, arrays

Each exercise includes:
- ✅ Clear learning objectives
- ✅ Concept tags showing what you'll practice
- ✅ Interactive code playground powered by Piston API
- ✅ Detailed solution explanations
- ✅ Key points summary

## 🧪 Interactive Code Playgrounds

All examples and exercises feature **live code playgrounds**:

- ✏️ **Edit code directly** in the browser using CodeMirror
- ▶️ **Run code instantly** using the Piston API (online C compiler)
- 🔄 **Reset to original** if you want to start over
- 📱 **Syntax highlighting** for better readability

### Important Note on `scanf()`

The interactive playgrounds use the Piston API, which **doesn't support interactive input** (scanf with user interaction). Therefore:

- ✅ All examples use **pre-filled test values** to demonstrate logic
- ✅ Code includes comments showing how to use scanf() in real programs
- ✅ Students can modify test values in the array to try different inputs

**Example:**
```c
// Demo mode: Using pre-filled test values
int test_values[] = {5, 0, 10, -3};

// To make this interactive on your local machine:
// Replace the loop with: scanf("%d", &n);
```

## 📝 Quiz System

The quiz (`quiz.html`) contains **50 questions** covering:
- Multiple choice questions (single answer)
- Multiple select questions (multiple correct answers)
- True/False questions
- Code analysis questions
- Error detection questions

**Features:**
- ⏱️ Track your progress (X/50 answered)
- ✅ Instant feedback with detailed explanations
- 🎯 Score display at the end
- 🔄 Randomized question order (optional)

## 🎨 Features

- **Modern, responsive design** - Works on desktop, tablet, and mobile
- **Dark theme** - Easy on the eyes during long study sessions
- **Syntax highlighting** - Powered by Prism.js
- **Interactive code editor** - Powered by CodeMirror
- **Live code execution** - Powered by Piston API
- **No installation required** - Everything runs in the browser

## 🛠️ Technical Details

### Technologies Used
- **HTML5/CSS3** - Structure and styling
- **JavaScript** - Interactivity and API calls
- **CodeMirror** - Code editing interface
- **Prism.js** - Syntax highlighting
- **Piston API** - Code compilation and execution

### Browser Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Internet connection (for CDN resources and code execution)

## 📋 File Structure

```
cp143-control-structures/
├── README.md                    # This file
├── theory.html                  # Complete theory notes
├── examples.html                # Interactive examples
├── practice.html                # 5 practice exercises with solutions
├── quiz.html                    # 50-question quiz
├── quiz_data.js                 # Quiz questions database
├── swift_tuition_logo.png       # Branding
├── Exercises.zip                # Downloadable exercise files
└── Exercises/                   # Exercise starter files
    ├── Exercise1/
    ├── Exercise2/
    ├── Exercise3/
    ├── Exercise4/
    └── Exercise5/
```

## 👨‍🏫 About Swift Tuition

Created by **Swift Tuition** - providing quality tutoring and study materials for university students.

These materials are designed to:
- 🎯 Align with CP143 course objectives at Stellenbosch University
- 📚 Provide comprehensive coverage of control structures
- 💻 Offer hands-on practice with immediate feedback
- 🚀 Accelerate learning through interactive engagement

## ⚠️ Important Notes

### For Students

1. **Use these materials ethically** - Understand the code, don't just copy
2. **Test locally** - Download and compile exercises on your machine
3. **Modify and experiment** - Change values, try edge cases
4. **Read explanations** - Understanding WHY is more important than WHAT

### For Local Development

To use `scanf()` in your local environment:

1. Download the exercise files from `Exercises.zip`
2. Replace the test data arrays with scanf() calls as indicated in comments
3. Compile with GCC: `gcc -o program program.c`
4. Run: `./program`

Example transformation:
```c
// In browser playground (no scanf):
int test_values[] = {5, 10, 15};
for (int i = 0; i < 3; i++) {
    int n = test_values[i];
    // ... process n
}

// On your local machine:
int n;
scanf("%d", &n);
// ... process n
```

## 🤝 Contributing

Found an error or have suggestions? This repository is for educational purposes. Please contact Swift Tuition for corrections or improvements.

## 📜 License

© 2025 Swift Tuition. All rights reserved.

These materials are provided for educational purposes for CP143 students at Stellenbosch University.

## 🔗 Related Resources

- **Official CP143 Course** - Check your university LMS
- **C Programming Documentation** - [cppreference.com](https://en.cppreference.com/)
- **GCC Compiler** - [gcc.gnu.org](https://gcc.gnu.org/)

---

**Happy Coding! 🚀**

*Study smart, practice often, and master control structures!*
