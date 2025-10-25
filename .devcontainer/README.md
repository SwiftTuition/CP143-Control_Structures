# GitHub Codespace Configuration

This directory contains the configuration for the GitHub Codespace environment.

## What's Configured

When you open this repository in a Codespace, you'll automatically get:

### ✅ Pre-installed Tools
- **GCC Compiler** - For compiling C programs
- **GDB Debugger** - For debugging
- **Make** - For build automation
- **Valgrind** - For memory leak detection

### ✅ VS Code Extensions
- **C/C++ Extension Pack** - IntelliSense, debugging, and code navigation
- **Better C Syntax** - Enhanced syntax highlighting
- **CMake Tools** - For advanced build configurations

### ✅ Editor Settings
- C11 standard enabled
- Auto-formatting on save
- GCC as default compiler

## How to Use

### Compile a Single File
```bash
gcc filename.c -o filename
./filename
```

### Compile with Debugging Symbols
```bash
gcc -g filename.c -o filename
gdb ./filename
```

### Compile with Warnings
```bash
gcc -Wall -Wextra filename.c -o filename
```

### Check for Memory Leaks
```bash
gcc -g filename.c -o filename
valgrind ./filename
```

## Working with Exercises

All exercise files are in the `Exercises/` directory. Each exercise folder contains:
- `README.md` - Instructions and requirements
- `exercise_X.c` - Starter code with TODO comments

### Example Workflow

1. Navigate to an exercise:
   ```bash
   cd Exercises/Exercise_01
   ```

2. Open the exercise file in VS Code:
   ```bash
   code exercise_1.c
   ```

3. Complete the TODOs in the code

4. Compile and test:
   ```bash
   gcc exercise_1.c -o exercise_1
   ./exercise_1
   ```

5. Compare with solution in `practice.html`

## Terminal Commands

The Codespace terminal is a full Ubuntu Linux environment. Common commands:

- `ls` - List files
- `cd` - Change directory
- `pwd` - Print working directory
- `cat` - Display file contents
- `clear` - Clear terminal
- `exit` - Close terminal

## Need Help?

- Check `README.md` in the root directory
- Review `practice.html` for complete solutions
- Reference `theory.html` for concepts
- Take the `quiz.html` to test knowledge

Happy Coding! 🚀
