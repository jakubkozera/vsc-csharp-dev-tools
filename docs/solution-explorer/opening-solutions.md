---
sidebar_position: 2
---

# Opening Solutions

Learn how to open and manage .sln and .slnx files in VS Code.

## Automatic Solution Detection

The Solution Explorer will automatically load the first .sln or .slnx file found in your workspace when you open a folder containing .NET projects.

## Opening Multiple Solutions

If you have multiple solutions in your workspace:

1. Click the Solution Explorer icon in the Activity Bar
2. Use the dropdown at the top of the Solution Explorer to switch between solutions
3. The active solution name will be displayed in the title bar

## Supported Solution File Formats

### Traditional .sln Files

The extension fully supports traditional Visual Studio solution files (.sln):

- Opening and parsing solution structure
- Managing projects and solution folders
- Editing solution properties
- All common solution operations

### Modern .slnx Files

The extension also supports the newer XML-based solution format (.slnx):

- Simplified XML structure
- Better source control integration
- All functionality available with .sln files

## Removing Projects from Solution

To remove a project from the solution:

1. Right-click on the project in the Solution Explorer
2. Select **Remove Project from Solution**
3. Confirm the removal when prompted

**Note**: This removes the project reference from the solution file but does not delete the project files from disk.

## Renaming Projects

To rename a project:

1. Right-click on the project in the Solution Explorer
2. Select **Rename Project**
3. Enter the new project name
4. The extension will update:
   - The project file name (.csproj)
   - The solution file reference
   - The project folder name (if applicable)
   - Assembly name and root namespace

## Moving Projects to Solution Folders

Solution folders help organize related projects:

1. Drag a project in the Solution Explorer
2. Drop it onto a solution folder
3. The solution file will be updated with the new organization

Alternatively:

1. Right-click on a project
2. Select **Move to Solution Folder**
3. Choose an existing folder or create a new one

## Creating Solution Folders

Solution folders are logical containers for organizing projects:

1. Right-click on the solution or an existing solution folder
2. Select **Add > Solution Folder**
3. Enter a name for the folder
4. The folder will appear in the Solution Explorer

You can nest solution folders to create hierarchical structures.

## Drag & Drop Project Organization

The Solution Explorer supports drag and drop for easy reorganization:

- **Drag projects between solution folders**
- **Drag projects to the solution root**
- **Drag solution folders to reorder them**
- **Nested drag and drop** for complex hierarchies

The solution file is automatically updated to reflect your changes.

## File Tracking

The Solution Explorer includes intelligent file tracking features:

### Auto-Sync with File System

- Changes made outside VS Code are automatically detected
- New files added to projects are reflected in the tree
- Deleted files are removed from the view
- Renamed files update automatically

### Active File Tracking

Press `Shift+Alt+L` to reveal the currently open file in the Solution Explorer. The tree will automatically expand to show the file's location.

You can enable automatic tracking in settings:

1. Open VS Code settings (`Ctrl+,`)
2. Search for `csharp-dev-tools.solutionViewer.trackActiveFile`
3. Enable the setting to automatically highlight the active file

## Manual Refresh

If the Solution Explorer becomes out of sync with the file system:

1. Click the refresh button in the Solution Explorer title bar
2. Or use the command: `C# Solution Explorer: Refresh Solution Explorer`

## Closing Solutions

To close a solution:

1. Close the workspace folder containing the solution
2. Or open a different workspace

The Solution Explorer will clear and wait for a new solution to be opened.
