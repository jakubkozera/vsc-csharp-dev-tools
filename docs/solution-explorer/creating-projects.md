---
sidebar_position: 3
---

# Creating New Projects

Create new .NET projects from templates directly within VS Code.

## Overview

C# Dev Tools provides full integration with the .NET CLI template system, allowing you to create new projects without leaving VS Code.

## Creating a Project

There are several ways to create a new project:

### From Solution Explorer

1. Right-click on a solution or solution folder
2. Select **Add > New Project**
3. The project creation wizard will open

### From Command Palette

1. Press `Ctrl+Shift+P`
2. Type "C# Solution Explorer: Create New Project"
3. Select the command

## The Project Creation Wizard

The wizard guides you through the project creation process:

### Step 1: Select Template

Browse and search through available project templates:

- **Console Application** - Command-line applications
- **Class Library** - Reusable code libraries
- **ASP.NET Core Web App** - Web applications with Razor Pages
- **ASP.NET Core Web API** - RESTful API services
- **Blazor Server App** - Server-side Blazor applications
- **Blazor WebAssembly App** - Client-side Blazor applications
- **WPF Application** - Windows desktop applications
- **Windows Forms Application** - Windows desktop applications
- **xUnit Test Project** - xUnit test projects
- **NUnit Test Project** - NUnit test projects
- **MSTest Test Project** - MSTest test projects
- **And many more...**

Use the search box to quickly find templates by name or technology.

### Step 2: Configure Project

Provide the project configuration:

- **Project Name**: The name of your new project
- **Location**: Where to create the project (defaults to solution directory)
- **Solution Folder**: Optionally place the project in a solution folder
- **Target Framework**: Choose the .NET version (e.g., .NET 8.0, .NET 6.0)

### Step 3: Template-Specific Options

Some templates provide additional options:

**Web Projects:**
- Authentication type (None, Individual, Windows)
- HTTPS configuration
- Docker support

**Class Libraries:**
- Target framework
- Package options

**Test Projects:**
- Enable code coverage
- Additional test frameworks

### Step 4: Create

Click **Create Project** to generate the project:

1. The .NET CLI will execute the template
2. The project will be created in the specified location
3. The project will be added to the solution
4. The Solution Explorer will refresh to show the new project

## After Project Creation

Once the project is created:

- The project appears in the Solution Explorer
- The solution file is updated with the new project reference
- You can immediately start editing files in the project
- Required NuGet packages (if any) are automatically restored

## Custom Templates

The extension supports any .NET templates installed on your system:

### Installing Custom Templates

```bash
dotnet new install <template-package-name>
```

For example:

```bash
dotnet new install Microsoft.AspNetCore.SpaTemplates
```

Custom templates will appear in the template selection list.

### Listing Installed Templates

To see all available templates:

```bash
dotnet new list
```

## Troubleshooting

### Template Not Found

If a template doesn't appear:

1. Ensure the .NET SDK is installed and in your PATH
2. Run `dotnet new list` in a terminal to verify the template is installed
3. Restart VS Code after installing new templates

### Project Creation Failed

If project creation fails:

1. Check the Output panel for error messages
2. Verify you have write permissions in the target directory
3. Ensure the project name is valid (no special characters)
4. Check that the .NET SDK version supports the selected template

### Project Not Added to Solution

If the project was created but not added to the solution:

1. Right-click the solution in Solution Explorer
2. Select **Add > Existing Project**
3. Navigate to and select the .csproj file
