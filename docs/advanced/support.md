---
sidebar_position: 1
---

# Support and Troubleshooting

Get help with common issues and learn how to get support for C# Dev Tools.

## Common Issues

### Solution Explorer Not Showing

If the Solution Explorer doesn't appear:

1. Ensure you have a `.sln` file in your workspace
2. Click the C# icon in the Activity Bar
3. Try running the command "C# Solution Explorer: Open Solution Explorer" from the Command Palette
4. Check that the extension is properly installed and enabled

### Projects Not Loading

If projects aren't appearing in the Solution Explorer:

1. Ensure all projects are correctly referenced in the `.sln` file
2. Try clicking the refresh button in the Solution Explorer
3. Check for any error messages in the Output panel (`Ctrl+Shift+U`, select "C# Solution Explorer" from the dropdown)
4. Make sure the project files (.csproj) exist at the paths referenced in the solution file

### Missing References or NuGet Packages

If references or packages aren't showing:

1. Try restoring packages by right-clicking the solution and selecting "Restore NuGet Packages"
2. Check that you have internet access for package downloads
3. Verify your NuGet package sources are correctly configured
4. Check for any authentication issues with private NuGet sources

### Code Analysis Features Not Working

If code analysis features (unused symbols, type hints) aren't working:

1. Make sure the C# language server is running (check the status bar)
2. Verify the features are enabled in settings
3. Try reloading the window with `Ctrl+Shift+P` and "Developer: Reload Window"
4. Check VS Code's output panel for any errors from the C# extension

### Performance Issues

If you experience slow performance:

1. Try disabling unused symbol highlighting for very large files
2. Reduce the scope of the Solution Explorer by closing unused projects
3. Check if your solution has a large number of projects or references
4. Increase VS Code's memory limit in settings

## Extension Logs

To access extension logs for troubleshooting:

1. Open the Output panel with `Ctrl+Shift+U`
2. Select "C# Solution Explorer" from the dropdown menu
3. Review the logs for any error messages or warnings

For more detailed logging:

1. Open VS Code settings
2. Search for "csharp-dev-tools.logging"
3. Change the log level to "Debug" or "Trace"
4. Reload the window and reproduce the issue

## Reporting Issues

If you encounter a bug or have a feature request:

1. Visit the [GitHub repository](https://github.com/your-publisher/csharp-dev-tools)
2. Check if your issue has already been reported
3. Click on "Issues" and then "New Issue"
4. Select the appropriate template
5. Fill in the required information, including:
   - Clear description of the issue
   - Steps to reproduce
   - Expected vs. actual behavior
   - VS Code version
   - Extension version
   - Operating system
   - Relevant logs

## Updating the Extension

Keeping the extension updated can resolve many issues:

1. Click the Extensions icon in the Activity Bar (`Ctrl+Shift+X`)
2. Look for updates indicated next to the extension
3. Click the update button if available
4. Reload VS Code after updating

## Resetting the Extension

If you experience persistent issues, try resetting the extension:

1. Close VS Code
2. Navigate to your VS Code extensions folder:
   - Windows: `%USERPROFILE%\.vscode\extensions`
   - macOS: `~/.vscode/extensions`
   - Linux: `~/.vscode/extensions`
3. Locate and rename the C# Dev Tools folder (it will start with `your-publisher.csharp-dev-tools`)
4. Restart VS Code and reinstall the extension

## Getting Help

For additional help:

1. Check the documentation (this site)
2. Look for community discussions on [GitHub Discussions](https://github.com/your-publisher/csharp-dev-tools/discussions)
3. Ask questions on [Stack Overflow](https://stackoverflow.com/questions/tagged/vscode-csharp-dev-tools) with the tag `vscode-csharp-dev-tools`
4. Join the community Discord or Slack channel (if available)

## Providing Feedback

Your feedback helps improve the extension:

1. Rate and review the extension on the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=your-publisher.csharp-dev-tools)
2. Provide detailed feedback about what works well and what could be improved
3. Contribute to the project on GitHub with pull requests or issue reports
