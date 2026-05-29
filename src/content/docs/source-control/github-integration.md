---
title: GitHub Integration
sidebar:
  order: 2
---

Comprehensive GitHub integration for pull requests and code collaboration.

## Overview

C# Dev Tools provides full GitHub integration allowing you to manage pull requests, review code, and collaborate without leaving VS Code.

## Setup

### Connecting to GitHub

1. Open Command Palette (`Ctrl+Shift+P`)
2. Type "Pull Request Manager: Open Connection Manager"
3. Click "Add Connection"
4. Select "GitHub"
5. Choose authentication method:
   - **OAuth (Recommended)**: Uses VS Code's built-in GitHub authentication
   - **Personal Access Token**: Manual token configuration
6. For OAuth:
   - Enter connection name and organization (optional)
   - Click "Create OAuth Connection"
   - Authenticate through VS Code's secure GitHub authentication flow
7. For PAT:
   - Enter connection details and Personal Access Token
   - Save connection

### Authentication Methods

#### OAuth Authentication (Recommended)

OAuth provides the most secure and convenient authentication:

1. Select "OAuth" as authentication method
2. VS Code will prompt you to sign in to GitHub
3. Authorize the application to access your GitHub account
4. Connection is automatically configured with secure token management

**Benefits:**
- No need to create or manage tokens manually
- Automatic token refresh and renewal
- Integrated with VS Code's secure credential storage
- Easy revocation through GitHub's authorized applications
- Supports all GitHub features including private repositories

#### Personal Access Token (PAT)

For scenarios requiring PAT authentication:

1. Go to GitHub.com → Settings → Developer settings
2. Click "Personal access tokens" → "Tokens (classic)"
3. Click "Generate new token"
4. Select scopes:
   - `repo` (full repository access)
   - `read:org` (read organization data)
5. Generate and copy the token
6. Paste token in connection configuration

## Viewing Pull Requests

### Assigned to Me

View PRs assigned to you:

1. Open Solution Explorer
2. Expand "Pull Requests"
3. View list of assigned PRs
4. Click to open PR details

### Created by Me

View PRs you created:

- Filter by author
- See PR status
- Check review status
- View merge status

### Review Requested

View PRs where your review is requested:

- See pending reviews
- Priority review queue
- Review status indicators

## Creating Pull Requests

### From Current Branch

Create PR from your current branch:

1. Make changes and commit
2. Push to remote
3. Click "Create Pull Request" in Pull Requests view
4. Fill in details:
   - Title
   - Description
   - Base branch
   - Reviewers
   - Labels
5. Click "Create"

### Draft Pull Requests

Create draft PRs for work in progress:

1. Check "Create as draft"
2. PR is marked as draft
3. Convert to ready when complete

## Reviewing Pull Requests

### Opening a PR

1. Click PR in tree view
2. PR details open in webview
3. See:
   - Title and description
   - Changed files
   - Commits
   - Comments
   - Checks status

### Viewing Changes

View file changes:

1. Click "Files Changed" tab
2. See unified or split diff
3. Navigate between files
4. Review line-by-line changes

### Adding Comments

Add review comments:

1. Click on changed line
2. Add comment text
3. Submit as:
   - Single comment
   - Part of review

### Submitting Review

Submit complete review:

1. Click "Review Changes"
2. Add overall comment
3. Select:
   - Approve
   - Request changes
   - Comment only
4. Submit review

## Merging Pull Requests

### Merge Options

Merge PRs when approved:

1. **Merge commit**: Standard merge with commit
2. **Squash and merge**: Single commit with all changes
3. **Rebase and merge**: Rebase onto base branch

### Requirements

Before merging, ensure:

- All checks pass
- Required reviews approved
- No conflicts
- Branch is up to date

## Pull Request Actions

Additional PR actions:

- **Close**: Close without merging
- **Reopen**: Reopen closed PR
- **Edit**: Update title/description
- **Convert to draft**: Mark as work in progress
- **Request reviewers**: Add more reviewers

## Status Indicators

PR status indicators:

- 🟢 Open and ready
- 🟡 Draft
- 🔴 Conflicts
- ✅ Approved
- ⏳ Pending reviews
- 🚀 Checks passing

## Best Practices

- Keep PRs focused and small
- Write clear descriptions
- Request appropriate reviewers
- Respond to feedback promptly
- Keep branch up to date
- Squash commits for cleaner history

## Troubleshooting

### Authentication Failed

If GitHub authentication fails:

**For OAuth connections:**
1. Sign out and sign back in to VS Code's GitHub account
2. Check GitHub permissions and authorized applications
3. Revoke and re-authorize the application if needed
4. Try recreating the OAuth connection
5. Ensure you have access to the repositories you're trying to access

**For PAT connections:**
1. Verify PAT is valid and not expired
2. Check token permissions and scopes
3. Regenerate token if needed
4. Reconfigure connection with new token

### PRs Not Loading

If PRs don't load:

1. Check internet connection
2. Verify GitHub is accessible
3. Refresh the PR list
4. Check repository permissions

### Can't Create PR

If PR creation fails:

1. Ensure branch is pushed to remote
2. Check write permissions
3. Verify base branch exists
4. Check for conflicts
