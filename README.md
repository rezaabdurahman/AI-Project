# AI Project

This project is a comprehensive AI application with enterprise-grade CI/CD setup and branching strategy.

## 🚀 Quick Start

```bash
# Clone the repository
git clone git@github.com:rezaabdurahman/AI-Project.git
cd AI-Project

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📋 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm test` - Run tests with coverage
- `npm run lint` - Check code style
- `npm run type-check` - Verify TypeScript types

## 🌿 Branching Strategy

This project uses a **staging-first** branching strategy to ensure code quality:

### Branch Protection Rules

1. **Feature Development**:
   - Create feature branches from `staging`
   - Submit PRs to `staging` branch
   - All tests must pass before merging

2. **Staging Environment**:
   - `staging` branch represents the staging environment
   - All features are tested here first
   - Automatic deployment to staging on merge

3. **Production Deployment**:
   - Only `staging` → `main` PRs are allowed
   - Main branch is protected and requires:
     - ✅ All checks must pass on staging branch
     - ✅ Code must exist in staging first
     - ✅ Manual approval for production deployment

### Workflow Example

```bash
# 1. Create feature branch from staging
git checkout staging
git pull origin staging
git checkout -b feature/new-awesome-feature

# 2. Develop and test locally
npm run dev
npm test

# 3. Push and create PR to staging
git push origin feature/new-awesome-feature
# Create PR: feature/new-awesome-feature → staging

# 4. After staging tests pass and feature is verified
# Create PR: staging → main (for production deployment)
```

## 🏗️ Architecture

- **Language**: TypeScript with strict mode
- **Runtime**: Node.js 18.19.0
- **Testing**: Jest with 80% coverage requirement
- **Code Quality**: ESLint + Prettier
- **Containerization**: Docker
- **CI/CD**: GitHub Actions

## 🧪 Testing

We maintain high code quality with:
- Unit tests for all functions
- Integration tests for APIs
- 80% minimum code coverage
- Automated testing in CI/CD

## 🔐 Security

- No secrets in code (use environment variables)
- Dependency vulnerability scanning
- Security audits in CI/CD
- Branch protection rules

## 🤝 Contributing

1. **Setup**: Follow the Quick Start guide
2. **Development**: Create feature branches from `staging`
3. **Testing**: Ensure all tests pass locally
4. **Code Quality**: Run linting and formatting
5. **Pull Requests**: Submit to `staging` branch first
6. **Production**: Only deploy via `staging` → `main` PRs

See our [Pull Request Template](.github/pull_request_template.md) for detailed guidelines.

