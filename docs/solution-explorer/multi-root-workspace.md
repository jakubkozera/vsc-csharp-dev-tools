---
sidebar_position: 5
---

# Multi-root Workspace Support

Work with multiple solutions and projects across different workspaces.

## Overview

C# Dev Tools supports VS Code's multi-root workspace feature, allowing you to work with multiple solutions simultaneously.

## What is a Multi-root Workspace?

A multi-root workspace allows you to open multiple folders in a single VS Code window:

- Each folder can contain its own solution
- Each solution is displayed separately in the Solution Explorer
- You can work across multiple solutions simultaneously
- Settings can be configured per workspace folder

## Creating a Multi-root Workspace

### Method 1: Add Folder to Workspace

1. Open a folder with a solution
2. Go to **File > Add Folder to Workspace**
3. Select another folder containing a solution
4. Both solutions will appear in the Solution Explorer

### Method 2: Save Workspace File

1. After adding folders, go to **File > Save Workspace As**
2. Save the workspace file (.code-workspace)
3. Open this file later to restore the multi-root workspace

## Working with Multiple Solutions

### Solution Selection

When multiple solutions are open:

1. Each solution appears with its workspace folder name
2. Use the dropdown in the Solution Explorer to switch between solutions
3. Each solution maintains its own state and context

### Building Across Solutions

You can build projects from different solutions:

- Right-click any project and select **Build**
- The build targets only the selected project
- Dependencies are resolved within each solution

### Running Projects

When running or debugging:

1. Set the startup project in the desired solution
2. Press F5 or use the debug controls
3. The correct project will launch

## Workspace Configuration

### Per-Solution Settings

You can configure settings per workspace folder:

1. Open the workspace settings file (.code-workspace)
2. Add folder-specific settings under `folders[].settings`
3. Each solution can have its own:
   - Build configurations
   - Test settings
   - NuGet sources

### Example Workspace File

```json
{
  "folders": [
    {
      "path": "project-frontend",
      "name": "Frontend"
    },
    {
      "path": "project-backend",
      "name": "Backend"
    }
  ],
  "settings": {
    "csharp-dev-tools.solutionViewer.autoLoad": true
  }
}
```

## Use Cases

### Microservices Development

- Open multiple service solutions simultaneously
- Work on shared libraries and services together
- Test integration across services

### Frontend and Backend

- Open frontend solution (e.g., Blazor)
- Open backend solution (e.g., Web API)
- Develop both simultaneously

### Shared Libraries

- Open application solution
- Open shared library solution
- Modify and test library changes immediately

## Benefits

### Productivity

- Reduce context switching
- See related projects side-by-side
- Work on dependencies without switching windows

### Testing

- Test integration between projects
- Run multiple applications simultaneously
- Debug across solution boundaries

### Code Sharing

- Reference code across solutions
- Copy code between projects easily
- Maintain consistency across codebases

## Limitations

### Project References

Project references work best within a single solution. Cross-solution references may require:

- NuGet packages for stable dependencies
- Shared projects for code reuse
- Relative path references (less portable)

### Build Order

Build dependencies are managed per solution:

- Projects in different solutions may need manual build ordering
- Use solution-level build configurations for complex scenarios

## Best Practices

### Organize Related Work

- Group related solutions in one workspace
- Use descriptive folder names
- Keep workspace files in source control

### Manage Complexity

- Don't open too many solutions (2-4 is ideal)
- Close unused solutions to reduce clutter
- Use solution folders to organize projects within each solution

### Performance Considerations

- Multiple large solutions may impact performance
- Close solutions not actively being used
- Adjust file watcher settings if needed

## Troubleshooting

### Solutions Not Loading

If solutions don't load in a multi-root workspace:

1. Check that each folder contains a .sln file
2. Refresh the Solution Explorer
3. Verify folder paths in the workspace file

### Context Confusion

If you're unsure which solution is active:

1. Check the Solution Explorer title bar
2. Use the solution dropdown to verify
3. Note the workspace folder name next to each solution

### Build Failures

If builds fail in multi-root workspaces:

1. Ensure project references are within the same solution
2. Check NuGet package restoration
3. Build solutions independently to isolate issues
