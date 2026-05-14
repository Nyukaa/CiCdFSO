# CI/CD Pipeline Project (Full Stack Open)
This project was developed as part of the Full Stack Open CI/CD module. The main goal was to learn how to build a modern continuous integration and continuous       deployment pipeline using GitHub Actions and Render.

## 🔗 Links

- 🌐 **Deployed Pokedex:** [https://cicdfso.onrender.com](https://cicdfso.onrender.com)
- 📁 **Pokedex App Repository:** [https://github.com/Nyukaa/CiCdFSO](https://github.com/Nyukaa/CiCdFSO)
- 📦 **Exercise Repository (11.21–11.22):** [https://github.com/Nyukaa/Language-Learning-App](https://github.com/Nyukaa/Language-Learning-App)
---

  

## 🚀 What this project includes

- React frontend built with Webpack
- Node.js + Express backend
- Automated tests (unit + end-to-end)
- ESLint for code quality
- CI/CD pipeline using GitHub Actions
- Automatic deployment to Render
- Version tagging system
- Protected main branch rules

---

## 🧠 What I learned

### 🔧 Continuous Integration (CI)

- How to set up GitHub Actions workflows
- Running automated jobs on:
  - push to `main`
  - pull requests
- Splitting CI into jobs:
  - frontend lint + build
  - backend lint + tests
- Using concurrency to cancel outdated builds
- Caching dependencies to speed up CI

---

### 🧪 Testing in CI

- Running unit tests with Jest
- Running end-to-end tests with Playwright
- Installing Playwright browsers in CI
- Ensuring tests run automatically on every PR

---

### 🧹 Code quality

- Using ESLint to enforce consistent code style
- Fixing lint errors automatically with `--fix`
- Preventing bad code from being merged into `main`

---

### 🚀 Continuous Deployment (CD)

- Deploying application to Render
- Using Render Deploy Hooks
- Triggering deployments from GitHub Actions
- Preventing deployment on pull requests using conditions

---

### 🏷️ Versioning

- Using semantic versioning (patch/minor/major)
- Automatically bumping versions with GitHub Actions
- Creating Git tags on successful merges
- Using commit hash-based versioning for reliability

---

### 🔐 Branch protection

- Protecting `main` branch using GitHub Rulesets
- Requiring:
  - successful CI checks before merge
  - pull request workflow (no direct pushes)
  - up-to-date branches before merging
- Preventing broken code from reaching production

---

### 🚦 Conditional workflows

- Skipping deployment and version bump when commit message contains `#skip`
- Using GitHub context (`github.event_name`, commit messages)
- Controlling workflow execution with `if` conditions

---

## 🔄 Workflow overview

1. Developer creates a branch
2. Makes changes and pushes code
3. Opens a Pull Request
4. GitHub Actions runs CI:
   - lint
   - tests
   - build
   - e2e tests
5. If CI passes → PR can be merged
6. After merge:
   - deployment to Render
   - version tag is created automatically

---

## 🌍 Deployment

The app is automatically deployed to Render after merging into `main`.

Health check endpoint: /health → ok

---

## 🛠️ Tech stack

- React
- Node.js
- Express
- Webpack
- Jest
- Playwright
- GitHub Actions
- Render

---

## 📌 Summary

This project helped me understand how real-world CI/CD pipelines work, including:

- automated testing
- deployment automation
- branch protection strategies
- versioning and release workflows

It also showed how important it is to keep the `main` branch always green and production-ready.
