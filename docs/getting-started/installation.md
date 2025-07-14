---
sidebar_position: 1
---

# Installation

Get up and running with C# Dev Tools quickly and easily.

## Prerequisites

Before installing C# Dev Tools, ensure you have:

- **Visual Studio Code**: Version 1.100.0 or higher
- **C# Extension**: The official [C# extension by Microsoft](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) (ms-dotnettools.csharp)
- **.NET SDK**: Any recent version of the [.NET SDK](https://dotnet.microsoft.com/download)

## Installation Steps

### From VS Code Marketplace

1. Open VS Code
2. Click on the Extensions view icon in the Activity Bar (or press `Ctrl+Shift+X`)
3. Search for "C# Dev Tools"
4. Click the **Install** button

### From VSIX File

If you have a `.vsix` file:

1. Open VS Code
2. Press `Ctrl+Shift+P` to open the Command Palette
3. Type "Install from VSIX" and select that command
4. Navigate to your `.vsix` file and select it
5. Restart VS Code when prompted

## Verifying Installation

To verify that C# Dev Tools is installed correctly:

1. Open a folder containing a .NET solution (`.sln` file)
2. Look for the Solution Explorer icon in the Activity Bar (typically a C# icon)
3. Click the icon to open the Solution Explorer view
4. Your solution structure should be visible in the panel

## Troubleshooting

If you encounter issues:

- Ensure the official C# extension is installed and activated
- Check that your workspace contains a valid `.sln` file
- Try reloading the window (`Ctrl+Shift+P` and type "Reload Window")
- Look for any error messages in the Output panel (`Ctrl+Shift+U` and select "C# Dev Tools" from the dropdown)

If problems persist, see the [Support](../advanced/support) section for additional help.
