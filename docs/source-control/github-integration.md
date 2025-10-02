---
sidebar_position: 2
---

# GitHub Integration

Comprehensive GitHub integration for pull requests and code collaboration.

## Overview

C# Dev Tools provides full GitHub integration allowing you to manage pull requests, review code, and collaborate without leaving VS Code.

## Setup

### Connecting to GitHub

1. Open Command Palette (`Ctrl+Shift+P`)
2. Type "Pull Request Manager: Open Connection Manager"
3. Click "Add Connection"
4. Select "GitHub"
5. Enter your Personal Access Token
6. Save connection

### Creating a Personal Access Token

1. Go to GitHub.com → Settings → Developer settings
2. Click "Personal access tokens" → "Tokens (classic)"
3. Click "Generate new token"
4. Select scopes:
   - `repo` (full repository access)
   - `read:org` (read organization data)
5. Generate and copy the token

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

If authentication fails:

1. Verify PAT is valid
2. Check token permissions
3. Regenerate token if needed
4. Reconfigure connection

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
