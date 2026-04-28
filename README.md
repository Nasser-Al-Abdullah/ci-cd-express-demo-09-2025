# CI/CD Pipeline — Express.js + Docker + GitHub Actions

A production-style CI/CD pipeline built with GitHub Actions, Docker, and Express.js
demonstrating automated testing, containerization, and deployment workflows.

## What it does

- Runs automated tests on every push via GitHub Actions
- Builds and tags a Docker image from the Express.js app
- Validates the pipeline across build, test, and containerization stages

## Stack

- **Runtime:** Node.js / Express.js
- **CI/CD:** GitHub Actions
- **Containerization:** Docker
- **Testing:** Jest (unit tests in /tests)

## Project structure
```
.github/workflows/   # GitHub Actions pipeline definitions
src/                 # Express.js application
tests/               # Automated test suite
Dockerfile           # Container build config
```
## Pipeline stages

1. Install dependencies
2. Run test suite
3. Build Docker image
