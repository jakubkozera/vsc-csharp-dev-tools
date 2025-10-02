---
sidebar_position: 3
---

# Azure DevOps Integration

Comprehensive Azure DevOps integration for pull requests and work items.

## Overview

C# Dev Tools integrates with Azure DevOps, providing pull request management and collaboration features.

## Setup

### Connecting to Azure DevOps

1. Open Command Palette (`Ctrl+Shift+P`)
2. Type "Pull Request Manager: Open Connection Manager"
3. Click "Add Connection"
4. Select "Azure DevOps"
5. Enter:
   - Organization name
   - Project name
   - Personal Access Token
6. Save connection

### Creating a Personal Access Token

1. Go to Azure DevOps → User Settings → Personal Access Tokens
2. Click "New Token"
3. Set scopes:
   - `Code (Read, write, & manage)`
   - `Work Items (Read & write)`
4. Create and copy token

## Viewing Pull Requests

### Organization and Project

Pull requests are organized by:

- Organization
- Project
- Repository

### Filter Options

View PRs by:

- Assigned to me
- Created by me
- Review requested
- All pull requests

## Creating Pull Requests

### From Azure DevOps

Create PR in Azure DevOps:

1. Push branch to Azure Repos
2. Click "Create Pull Request"
3. Fill in:
   - Title
   - Description
   - Target branch
   - Reviewers
   - Work items (optional)
4. Create PR

### Linking Work Items

Link related work items:

1. Search for work items
2. Select items to link
3. PR is associated with work items
4. Work items show PR link

## Reviewing Pull Requests

### PR Details

View comprehensive PR information:

- Title and description
- Source and target branches
- Changed files and commits
- Comments and discussions
- Review status
- Build and pipeline status
- Linked work items

### Code Review

Review code changes:

1. View file diffs
2. Add inline comments
3. Reply to discussions
4. Approve or wait for author

### Review Votes

Azure DevOps voting system:

- **Approve**: PR looks good
- **Approve with suggestions**: Minor changes suggested
- **Wait for Author**: Changes requested
- **Reject**: Major issues found

## Merging Pull Requests

### Merge Types

Azure DevOps supports:

1. **Merge (no fast-forward)**: Standard merge
2. **Squash commit**: Single commit
3. **Rebase and fast-forward**: Linear history
4. **Semi-linear merge**: Merge with rebase

### Merge Policies

Respect policies:

- Minimum number of reviewers
- Required reviewers
- Build validation
- Work item linking
- Comment resolution

## Build Integration

View build status:

- Pipeline results
- Build checks
- Test results
- Quality gates

## Work Items

Manage associated work items:

- View linked items
- Update work item status
- Add new work items
- Complete items with PR merge

## Azure-Specific Features

### Branch Policies

Respect configured policies:

- Required reviewers
- Build validation
- Work item linking
- Comment resolution
- Merge strategy

### Permissions

Permission-based features:

- View: Read pull requests
- Contribute: Create and comment
- Complete: Merge pull requests
- Admin: Policy management

## Best Practices

- Link work items to PRs
- Follow branch policies
- Use appropriate merge types
- Complete work items with merge
- Ensure builds pass before merge
- Resolve all comments

## Troubleshooting

### Authentication Failed

If Azure DevOps auth fails:

1. Verify organization name is correct
2. Check project name
3. Verify PAT permissions
4. Regenerate token if expired

### PRs Not Loading

If PRs don't appear:

1. Check organization access
2. Verify project permissions
3. Refresh PR list
4. Check network connectivity

### Can't Merge PR

If merge fails:

1. Check branch policies
2. Ensure all checks pass
3. Verify reviewer approvals
4. Resolve all comments
5. Check permissions
