---
sidebar_position: 1
---

# Source Control

Integrated source control features for GitHub and Azure DevOps with pull request management and code review capabilities.

## Overview

C# Dev Tools provides comprehensive source control integration:

- **[GitHub Integration](./github-integration.md)** - Pull requests and collaboration
- **[Azure DevOps Integration](./azure-devops-integration.md)** - Work items and pull requests
- **[GitHub Copilot Code Review](./copilot-code-review.md)** - AI-powered code reviews

## Key Features

### Pull Request Management

Manage pull requests without leaving VS Code:

- View assigned pull requests
- Create new pull requests
- Review code changes
- Add comments and feedback
- Approve or request changes
- Merge pull requests

### Multi-Platform Support

Works with both:

- **GitHub**: Public and private repositories
- **Azure DevOps**: Organizations and projects

### Code Review

Enhanced code review capabilities:

- Inline code comments
- File-level comments
- Review conversations
- AI-powered code review with GitHub Copilot
- Suggested changes

## Pull Request Tree View

Access pull requests from Solution Explorer:

1. Expand "Pull Requests" section
2. View PRs by status:
   - Assigned to me
   - Created by me
   - Review requested
3. Click to open PR details

## Creating Pull Requests

Create PRs directly from VS Code:

1. Make changes and commit
2. Push to remote branch
3. Click "Create Pull Request"
4. Fill in title and description
5. Select reviewers
6. Create PR

## Reviewing Pull Requests

Review PRs in VS Code:

1. Open PR from tree view
2. View changed files
3. Add inline comments
4. Approve or request changes
5. Merge when ready

## GitHub Copilot Integration

Use AI for code reviews:

1. Open a pull request
2. Click "Review with Copilot"
3. Copilot analyzes changes
4. Provides suggestions and insights
5. Highlights potential issues

## Configuration

### Connection Setup

Configure source control connections:

1. Open Command Palette
2. Search "Pull Request Manager: Open Connection Manager"
3. Add GitHub or Azure DevOps connections
4. Authenticate with personal access tokens

### Authentication

Secure authentication via:

- Personal Access Tokens (PAT)
- OAuth (for GitHub)
- Azure Active Directory (for Azure DevOps)

## Benefits

- Stay in VS Code while managing PRs
- Faster code review workflow
- AI-assisted code reviews
- Unified interface for GitHub and Azure DevOps
- Streamlined collaboration

## Integration

Source control features integrate with:

- Solution Explorer
- Git commands
- VS Code Source Control view
- GitHub Copilot
- Testing features
