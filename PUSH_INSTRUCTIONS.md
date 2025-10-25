# Instructions to Push CP143 Control Structures to GitHub

The repository has been prepared in: `/tmp/cp143-control_structures/`

All files are ready and committed. However, the GitHub token doesn't have permissions to create repositories automatically.

## Option 1: Create Repository via GitHub Web Interface (Recommended)

### Step 1: Create the Repository on GitHub
1. Go to https://github.com/new (or click the "+" icon → "New repository")
2. Set **Repository name**: `cp143-control_structures`
3. Set **Description**: `CP143 Control Structures - Interactive study materials with playgrounds, exercises, and quizzes for Stellenbosch University students`
4. Choose **Public**
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **Create repository**

### Step 2: Push the Code
Once created, GitHub will show you instructions. Use these commands:

```bash
cd /tmp/cp143-control_structures
git remote add origin https://github.com/SwiftTTN/cp143-control_structures.git
git branch -M main
git push -u origin main
```

Or if you want it under SwiftTuition organization:
```bash
cd /tmp/cp143-control_structures
git remote add origin https://github.com/SwiftTuition/cp143-control_structures.git
git branch -M main
git push -u origin main
```

## Option 2: Use GitHub CLI with Fresh Token

If you want to use `gh`, you'll need to re-authenticate with a token that has `repo` scope:

```bash
gh auth login
# Select: GitHub.com
# Select: HTTPS
# Select: Paste an authentication token
# Create token at: https://github.com/settings/tokens/new
#   - Check "repo" scope
#   - Copy the token
#   - Paste it
```

Then:
```bash
cd /tmp/cp143-control_structures
gh repo create SwiftTTN/cp143-control_structures --public --description "CP143 Control Structures - Interactive study materials" --source=. --push
```

## What's Been Prepared

✅ All HTML files (theory, examples, practice, quiz)
✅ Fixed scanf() issue in factorial calculator (now uses test data)
✅ Comprehensive README.md
✅ Exercise files and ZIP
✅ Quiz data
✅ Logo
✅ Git initialized and committed

## Repository Structure

```
cp143-control_structures/
├── README.md                    # Comprehensive documentation
├── theory.html                  # Complete theory notes
├── examples.html                # Interactive examples (FIXED)
├── practice.html                # 5 practice exercises
├── quiz.html                    # 50-question quiz
├── quiz_data.js                 # Quiz database
├── swift_tuition_logo.png       # Branding
├── Exercises.zip                # Downloadable exercises
└── Exercises/                   # Exercise starter files
    ├── Exercise_01/
    ├── Exercise_02/
    ├── Exercise_03/
    ├── Exercise_04/
    └── Exercise_05/
```

## After Pushing

The repository will be live at:
- https://github.com/SwiftTTN/cp143-control_structures (if using SwiftTTN account)
- https://github.com/SwiftTuition/cp143-control_structures (if using SwiftTuition account)

Students can then:
1. View all HTML files by downloading and opening in browser
2. Clone the repo for local development
3. Use the interactive playgrounds online
4. Download exercise files

## Next Steps

After pushing to GitHub, you might want to:
1. Add topics/tags to the repo (control-structures, c-programming, stellenbosch)
2. Enable GitHub Pages if you want to host the HTML files online
3. Add a license file
4. Share the link with students!
