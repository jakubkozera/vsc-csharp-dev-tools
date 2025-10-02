---
sidebar_position: 1
---

# Solution Explorer

The Solution Explorer is a core feature of C# Dev Tools, providing a Visual Studio-like experience for managing .NET projects.

## Overview

<div style={{ display: "flex", alignItems: "flex-start", gap: "32px" }}>
  <div style={{ flex: 1 }}>
    <p>
      The Solution Explorer gives you a complete hierarchical view of your .NET solution, including:
    </p>
    <ul>
      <li>Solution files and properties</li>
      <li>Projects and project references</li>
      <li>Solution folders</li>
      <li>File system folders and files</li>
      <li>Dependencies (NuGet packages and project references)</li>
    </ul>
  </div>
  <img
    src={require("../../static/img/solution-explorer.png").default}
    alt="Solution Explorer"
    style={{ width: "320px", maxWidth: "40%" }}
  />
</div>

## Key Features

The Solution Explorer provides a comprehensive set of features organized into the following areas:

- **[Opening Solutions](./opening-solutions.md)** - Load and manage .sln and .slnx files
- **[Creating New Projects](./creating-projects.md)** - Generate new projects from templates
- **[Adding Existing Projects](./adding-existing-projects.md)** - Import existing projects into your solution
- **[Multi-root Workspace Support](./multi-root-workspace.md)** - Work with multiple solutions simultaneously
- **[Running and Debugging](./running-debugging.md)** - Build, run, and debug your applications

## Basic Navigation

- **Expand/Collapse**: Click the arrow icons to expand or collapse items
- **Open Files**: Double-click on a file to open it in the editor
- **Select Multiple Items**: Use Ctrl+Click or Shift+Click to select multiple items
- **Context Menu**: Right-click on items to see available actions

## Advanced Features

### File Path Operations

Right-click on an item and select:

- **Copy Path**: Copy the full path to the clipboard
- **Copy Relative Path**: Copy the path relative to the workspace
- **Reveal in File Explorer**: Open the item's location in File Explorer
- **Open in Integrated Terminal**: Open a terminal at the item's location

### Active File Tracking

The Solution Explorer can automatically highlight the currently active file:

1. Open VS Code settings
2. Search for "csharp-dev-tools.solutionViewer.trackActiveFile"
3. Toggle the setting as desired

You can also press `Shift+Alt+L` to reveal the current file in the Solution Explorer at any time.
