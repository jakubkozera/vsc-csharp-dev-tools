---
sidebar_position: 4
---

# Adding Existing Projects

Add existing .NET projects to your solution.

## Overview

You can add projects that already exist on your file system to your solution, making them part of your workspace.

## Adding a Project

There are several ways to add an existing project:

### From Solution Explorer

1. Right-click on the solution or a solution folder
2. Select **Add > Existing Project**
3. Navigate to the project file (.csproj, .fsproj, .vbproj)
4. Click **Open** to add the project

### Using Drag and Drop

1. Open File Explorer (Windows) or Finder (macOS)
2. Locate the project file (.csproj)
3. Drag the file into the Solution Explorer
4. Drop it on the solution or a solution folder

### From Command Palette

1. Press `Ctrl+Shift+P`
2. Type "C# Solution Explorer: Add Existing Project"
3. Select the command
4. Navigate to and select the project file

## Supported Project Types

The extension supports all standard .NET project types:

- **C# Projects** (.csproj)
- **F# Projects** (.fsproj)
- **Visual Basic Projects** (.vbproj)
- **Shared Projects** (.shproj)

## What Happens When Adding

When you add an existing project:

1. The project reference is added to the solution file
2. The Solution Explorer refreshes to show the project
3. All project files and dependencies are displayed
4. NuGet packages are automatically restored
5. Project references are resolved

## Adding Multiple Projects

To add multiple projects at once:

1. Use the file picker to select multiple project files
2. Hold `Ctrl` (Windows/Linux) or `Cmd` (macOS) while clicking
3. All selected projects will be added to the solution

## Adding to Solution Folders

To add a project directly to a solution folder:

1. Right-click on the solution folder
2. Select **Add > Existing Project**
3. Select the project file
4. The project will be added to that specific folder

## Project Location Considerations

### Relative Paths

The extension uses relative paths when possible:

- If the project is within the solution directory tree, a relative path is used
- This makes the solution portable across different machines

### Absolute Paths

If the project is outside the solution directory:

- An absolute path is stored in the solution file
- This may cause issues when sharing the solution across teams

**Best Practice**: Keep projects within the solution directory structure for better portability.

## After Adding a Project

Once a project is added:

- Build the project to restore dependencies
- Set up project references if needed
- Configure the startup project if applicable
- Add NuGet packages as required

## Removing Projects

If you need to remove a project later:

1. Right-click the project
2. Select **Remove Project from Solution**
3. The project files remain on disk but are removed from the solution

## Troubleshooting

### Project Fails to Load

If a project doesn't load properly:

1. Check the Output panel for error messages
2. Verify the project file is valid XML
3. Ensure the project SDK is installed (e.g., Microsoft.NET.Sdk)
4. Check that the target framework is installed

### Project Appears But Is Empty

If the project loads but shows no files:

1. Check the project file's ItemGroup elements
2. Ensure files are included in the project (not excluded)
3. Try refreshing the Solution Explorer
4. Check file system permissions

### Duplicate Project Error

If you get a duplicate project error:

1. The project may already be in the solution
2. Check the solution file for duplicate entries
3. Remove the old entry before adding again

### Project Reference Issues

If project references don't resolve:

1. Ensure all referenced projects are in the solution
2. Check that target frameworks are compatible
3. Restore NuGet packages for all projects
4. Rebuild the solution
