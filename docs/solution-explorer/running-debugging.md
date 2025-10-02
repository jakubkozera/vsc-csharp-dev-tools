---
sidebar_position: 6
---

# Running and Debugging

Build, run, and debug your .NET applications directly from the Solution Explorer.

## Overview

C# Dev Tools integrates with VS Code's debugging and task system to provide a seamless development experience for .NET applications.

## Building Projects

### Build Commands

Right-click on a project or solution and select:

- **Build**: Compile the project and its dependencies
- **Rebuild**: Clean and then build the project
- **Clean**: Remove all build artifacts (bin/ and obj/)

### Build Output

Build output appears in:

1. The **Terminal** panel - Shows full build logs
2. The **Problems** panel - Lists errors and warnings
3. Status bar - Shows build progress

### Keyboard Shortcuts

- `Ctrl+Shift+B` - Build the current project
- Configure additional shortcuts in keyboard settings

## Setting a Startup Project

The startup project is the project that runs when you press F5:

### Set Startup Project

1. Right-click on an executable project (console app, web app, etc.)
2. Select **Set as Startup Project**
3. The project name will appear in bold in the Solution Explorer

### Multiple Startup Projects

To run multiple projects simultaneously:

1. Configure launch.json for multiple configurations
2. Or use VS Code's compound launch configurations
3. Useful for running client and server projects together

## Running Applications

### Console Applications

To run a console application:

1. Set it as the startup project
2. Press `F5` to run with debugging
3. Or press `Ctrl+F5` to run without debugging

The application will run in the integrated terminal.

### Web Applications

To run a web application (ASP.NET Core):

1. Set it as the startup project
2. Press `F5` to launch with debugging
3. The application will start and the browser will open automatically

The browser will navigate to the configured URL (usually https://localhost:5001).

### Stopping Applications

To stop a running application:

- Click the Stop button in the debug toolbar
- Press `Shift+F5`
- Close the terminal (for console apps)

## Debugging

### Starting a Debug Session

1. Set breakpoints by clicking in the left margin of the editor
2. Set the startup project
3. Press `F5` to start debugging

The debugger will:

- Build the project if needed
- Launch the application
- Attach the debugger
- Stop at your breakpoints

### Debug Features

While debugging, you can:

- **Step Through Code**: F10 (Step Over), F11 (Step Into), Shift+F11 (Step Out)
- **Inspect Variables**: Hover over variables or use the Variables panel
- **Watch Expressions**: Add expressions to the Watch panel
- **Call Stack**: View the call stack in the Call Stack panel
- **Breakpoints**: Manage breakpoints in the Breakpoints panel

### Inline Debug Values

C# Dev Tools provides inline debug values that show variable values directly in your code:

- Variable values appear at the end of lines during debugging
- Changed values are highlighted
- Arrays and objects show their contents inline

Configure this feature in the extension settings.

### Conditional Breakpoints

Set breakpoints that only trigger under specific conditions:

1. Right-click on a breakpoint
2. Select **Edit Breakpoint**
3. Choose a condition type:
   - Expression is true
   - Hit count
   - Log message

## Launch Configurations

### Viewing Launch Configuration

The extension automatically generates launch configurations:

1. Open `.vscode/launch.json`
2. View the generated configurations
3. Customize as needed

### Program Arguments

To pass command-line arguments:

**Method 1: Edit launch.json**

```json
{
  "args": ["arg1", "arg2", "arg3"]
}
```

**Method 2: Use Code Lens**

Click the Code Lens above the `Main` method to configure arguments.

### Environment Variables

Set environment variables in launch.json:

```json
{
  "env": {
    "ASPNETCORE_ENVIRONMENT": "Development",
    "MY_VAR": "value"
  }
}
```

## Running Tests

The Solution Explorer integrates with the Test Explorer:

1. Right-click on a test project
2. Select **Run Tests**
3. Tests will execute and results will appear in the Test Explorer

See the [Testing Integration](../testing-integration/index.md) section for more details.

## Build Configurations

### Debug vs Release

Switch between build configurations:

1. Open the command palette (`Ctrl+Shift+P`)
2. Type "C# Solution Explorer: Select Build Configuration"
3. Choose Debug or Release

Debug builds:
- Include debugging symbols
- Disable optimizations
- Enable assertions

Release builds:
- Exclude debugging symbols
- Enable optimizations
- Better performance

### Custom Configurations

Create custom build configurations in your project files:

```xml
<PropertyGroup Condition="'$(Configuration)'=='CustomConfig'">
  <!-- Custom configuration properties -->
</PropertyGroup>
```

## Troubleshooting

### Build Fails

If build fails:

1. Check the Problems panel for errors
2. Review the Terminal output for detailed messages
3. Ensure all NuGet packages are restored
4. Verify target framework is installed

### Cannot Start Debugging

If debugging won't start:

1. Ensure the startup project is set
2. Check that launch.json is configured correctly
3. Verify the project builds successfully
4. Check for port conflicts (web applications)

### Breakpoints Not Hit

If breakpoints aren't working:

1. Build in Debug configuration
2. Ensure you're debugging the correct process
3. Check that the code file is part of the project
4. Disable "Just My Code" if needed

### Performance Issues

If builds or debugging is slow:

1. Disable unnecessary extensions
2. Exclude large folders from file watching
3. Use Release configuration for non-debugging runs
4. Close unused projects in the solution
