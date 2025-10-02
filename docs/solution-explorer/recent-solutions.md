---
sidebar_position: 7
---

# Recent Solutions

Quickly access and reopen recently used .NET solutions.

## Overview

The Recent Solutions feature maintains a history of solutions you've worked with, allowing you to quickly reopen them without navigating the file system.

## Accessing Recent Solutions

### From Solution Explorer

1. Open the Solution Explorer
2. Look for the "Recent Solutions" section or dropdown
3. View your recently opened solutions
4. Click to reopen a solution

### From Command Palette

1. Press `Ctrl+Shift+P`
2. Type "C# Solution Explorer: Open Recent Solution"
3. Select from the list of recent solutions
4. The solution opens immediately

## Recent Solutions List

The list shows:

- **Solution Name**: Display name of the solution
- **Path**: Full path to the solution file
- **Last Opened**: When you last worked with the solution
- **Workspace**: Workspace folder if in multi-root workspace

## Features

### Quick Reopen

- One-click access to recent solutions
- Faster than browsing file system
- No need to remember file paths
- Organized by recency

### Automatic Tracking

Solutions are automatically added when:

- Opening a solution file
- Loading a workspace with a solution
- Creating a new solution
- Switching between solutions

### List Management

The recent solutions list:

- Maintains order by last access time
- Automatically removes deleted solutions
- Limits to a configurable number of entries
- Persists across VS Code sessions

## Clearing Recent Solutions

### Clear Single Entry

1. Hover over a recent solution entry
2. Click the "Remove" icon (X)
3. Entry is removed from the list

### Clear All Recent Solutions

1. Open Command Palette (`Ctrl+Shift+P`)
2. Type "C# Solution Explorer: Clear Recent Solutions"
3. Confirm the action
4. All recent solutions are cleared

## Configuration

Configure recent solutions behavior:

1. Open VS Code Settings (`Ctrl+,`)
2. Search for "csharp-dev-tools.recentSolutions"
3. Adjust settings:
   - Maximum number of recent solutions
   - Auto-remove deleted solutions
   - Sort order preference

### Settings

#### Maximum Recent Solutions

`csharp-dev-tools.recentSolutions.maxCount`

- Default: 10
- Range: 1-50
- Controls how many solutions to remember

#### Auto-Remove Invalid

`csharp-dev-tools.recentSolutions.autoRemoveInvalid`

- Default: true
- Automatically removes solutions that no longer exist

## Use Cases

### Project Switching

Quickly switch between multiple active projects:

1. Work on Project A
2. Switch to Project B via recent solutions
3. Return to Project A later
4. No file browsing needed

### Client Projects

Manage multiple client solutions:

- Each client has their own solution
- Quick access to any client project
- Easy context switching
- Maintain work history

### Learning and Experimentation

Jump between tutorial solutions:

- Multiple practice projects
- Sample code repositories
- Proof of concept solutions
- Quick access for reference

## Integration

Recent solutions integrate with:

- Solution Explorer tree view
- File > Open Recent menu
- Workspace management
- Multi-root workspaces

## Best Practices

### Organization

- Use descriptive solution names
- Keep solutions in organized folders
- Group related solutions together
- Clean up old entries periodically

### Performance

- Limit maximum recent solutions
- Remove invalid entries
- Use for frequently accessed solutions
- Archive old projects

### Team Collaboration

- Solutions in shared network locations appear
- Team members see their own recent list
- No conflicts with version control
- Workspace-relative paths work better

## Troubleshooting

### Solution Not Appearing

If a solution doesn't appear in recent list:

1. Ensure solution was actually opened
2. Check it wasn't removed
3. Verify solution file still exists
4. Try opening the solution again

### Wrong Solution Opens

If wrong solution opens:

1. Check solution path in the list
2. Verify file hasn't been moved
3. Remove stale entry
4. Add correct solution again

### List Not Persisting

If recent solutions don't persist:

1. Check VS Code workspace storage
2. Verify extension is activated
3. Check for storage permissions
4. Try clearing and rebuilding list

### Too Many Entries

If list is too long:

1. Reduce maximum count in settings
2. Clear old entries manually
3. Remove unused solutions
4. Set auto-remove invalid to true

## Related Features

- [Opening Solutions](./opening-solutions.md) - Managing solution files
- [Multi-root Workspace](./multi-root-workspace.md) - Multiple solutions
- Solution Explorer - Main navigation interface
- Workspace management - VS Code workspaces
