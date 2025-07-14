# C# Dev Tools for VS Code

C# Dev Tools is a comprehensive extension for Visual Studio Code that enhances the .NET development experience, bringing many Visual Studio IDE features into VS Code. This extension provides a full-featured Solution Explorer, intelligent code analysis, and streamlined workflows for .NET developers.

## Features Overview

### Solution Explorer

The enhanced Solution Explorer provides a familiar Visual Studio-like experience with:

- **Complete Solution Hierarchy**: Navigate through projects, solution folders, references, and files
- **Project Management**: Create, manage, and organize projects directly from the Solution Explorer
- **Context Menu Operations**: Access build operations, NuGet management, user secrets, and more
- **Drag and Drop**: Intuitive file and folder organization with drag and drop support

### Test Explorer

Integrated test exploration and execution:

- **Automatic Discovery**: Automatically finds test projects and methods (MSTest, xUnit, NUnit)
- **Hierarchical View**: Tests organized by Project → Namespace → Class → Method
- **Run and Debug**: Execute individual tests, classes, or entire projects
- **Real-time Results**: View detailed test results with error messages and stack traces

### Advanced Search

Quickly find and navigate to C# types and symbols:

- **Type Search**: Find classes, interfaces, enums, structs, and records
- **Member Search**: Use @methodName syntax to find specific members
- **Scoped Search**: Search within specific types using TypeName@memberName syntax
- **Quick Navigation**: Jump directly to search results in your codebase

### NuGet Package Management

Manage dependencies without leaving VS Code:

- **Browse**: Search and install new packages
- **Update**: Keep packages up to date
- **Remove**: Remove unwanted packages
- **Project References**: Manage project references with a visual interface

### Project Creation & Templates

Create new projects and add files with built-in templates:

- **Project Templates**: Access standard .NET project templates directly in VS Code
- **Solution Integration**: Automatically add new projects to your solution
- **File Templates**: Add C# classes, interfaces, enums, records, controllers, Razor pages, and more
- **Quick Add**: Press Shift+F2 to quickly add new files to your project

### Code Analysis

Enhanced code analysis and navigation:

- **Unused Symbol Highlighting**: Identify and highlight unused properties and methods
- **Type Inlay Hints**: See inferred types for var declarations
- **Navigation Shortcuts**: Quickly navigate and reveal files in the Solution Explorer

### User Secrets Management

Secure configuration handling:

- **Secret Management**: Manage sensitive configuration data without storing it in source control
- **Built-in Templates**: Add common secret patterns like connection strings and API keys
- **Integration**: Works with ASP.NET Core's user secrets mechanism

## Getting Started

### Installation

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "C# Dev Tools"
4. Click Install

### Requirements

- Visual Studio Code 1.100.0 or higher
- A workspace containing .NET solution files (.sln)
- The official C# extension from Microsoft (ms-dotnettools.csharp)

### First Steps

1. Open a workspace containing a .NET solution (.sln file)
2. The Solution Explorer will automatically appear in the Explorer panel
3. Navigate through the interactive walkthroughs (Alt+W) to learn about all features

## Keyboard Shortcuts

- **Alt+P**: Open Advanced Search dialog
- **Alt+W**: Open Extension Walkthroughs
- **Shift+Alt+L**: Reveal current file in Solution Explorer
- **Shift+F2**: Quick Add (when Solution Explorer is focused)
- **F5**: Debug Startup Project
- **Ctrl+F5**: Run Startup Project
- **Shift+Ctrl+F5**: Select Startup Project

## Configuration

The extension can be configured through VS Code settings:

### Code Analysis Settings

- `csharp-dev-tools.editor.highlightUnusedSymbols`: Enable/disable unused symbol highlighting (default: `true`)
- `csharp-dev-tools.editor.unusedSymbolOpacity`: Opacity level for unused symbols (default: `0.5`)

### Solution Explorer Settings

- `csharp-dev-tools.solutionViewer.trackActiveFile`: Automatically reveal and select the active file in the Solution Explorer (default: `true`)
- `csharp-dev-tools.solutionViewer.collapseOtherPaths`: When tracking active file, collapse all other expanded paths (default: `false`)

### Inlay Hints Settings

- `csharp-dev-tools.inlayHints.enableTypeHints`: Show inlay type hints for C# var declarations (default: `true`)
- `csharp-dev-tools.inlayHints.enableParameterHints`: Show inlay parameter name hints for C# method calls (default: `false`)

### Debug Settings

- `csharp-dev-tools.debug.launchConsole`: Controls where console applications are launched when debugging (default: `integratedTerminal`)

## Support and Feedback

If you encounter any issues or have suggestions for improvement:

- Report issues on GitHub
- Submit feature requests through the GitHub repository
- Rate and review the extension on the Visual Studio Marketplace
