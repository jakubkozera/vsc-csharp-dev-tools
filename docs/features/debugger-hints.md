# Debugger Hints

The C# Dev Tools extension provides enhanced debugging capabilities with inline debug values that show variable values directly in your code editor during debugging sessions.

## Overview

Debugger hints display variable values inline at the end of lines where variables are declared or used, providing immediate visibility into your application's state without needing to hover over variables or check the variables panel.

![Debugger Hints](img/debugger-hints.png)

## Features

### Inline Debug Values

- **Real-time Display**: Variable values appear inline at the end of lines during debugging
- **Change Highlighting**: Modified values are highlighted in a different color to draw attention
- **Smart Positioning**: Values are positioned to avoid interfering with your code

### Array and Collection Support

- **Array Values**: Display actual array contents like `[1, 2, 3]` instead of just type information
- **Collection Limits**: Configure maximum number of items to show for large collections
- **Performance Optimization**: Option to show only count for better performance with large datasets

### Object Property Display

- **JSON-like Format**: Show object properties as `{ name: "John", age: 30 }`
- **Property Limits**: Configure maximum number of properties to display
- **Type Fallback**: Option to show only type name for complex objects

## Configuration

All debugger hints settings can be configured through the extension's Settings webview:

### Enable/Disable Features

- **Enable Inline Debug Values**: Master toggle for the entire feature
- **Show Array Values**: Toggle between showing actual values vs. count only
- **Show Object Properties**: Toggle between showing properties vs. type name only

### Performance Settings

- **Max Array Items**: Set maximum number of array/list items to display (1-50)
- **Max Object Properties**: Set maximum number of object properties to display (1-20)

## Getting Started

1. **Open Settings**: Use the command palette (`Ctrl+Shift+P`) and search for "C# Dev Tools: Open Settings"
2. **Navigate to Debug Tab**: Click on the "Debug" tab in the settings interface
3. **Configure Inline Debug Values**: Adjust the settings according to your preferences
4. **Start Debugging**: Place breakpoints and start debugging your C# application
5. **View Inline Values**: Variable values will appear inline as you step through code

## Best Practices

### Performance Considerations

- For large collections, consider disabling "Show Array Values" or reducing "Max Array Items"
- For complex objects with many properties, reduce "Max Object Properties" or disable "Show Object Properties"
- The feature automatically limits display to prevent performance issues

### Debugging Workflow

- Use inline values for quick variable inspection
- Changed values are highlighted to help track state modifications
- Combine with traditional debugging tools (variables panel, watch) for comprehensive debugging

### Code Readability

- Values are positioned to minimize interference with code reading
- Long values are truncated with indicators (e.g., "...X more items")
- Color coding helps distinguish between different types of information

## Troubleshooting

### Values Not Appearing

- Ensure "Enable Inline Debug Values" is checked in settings
- Verify you're in an active debugging session with breakpoints hit
- Check that variables are in scope at the current execution point

### Performance Issues

- Reduce array and object display limits in settings
- Consider disabling array/object value display for large datasets
- Use selective debugging with focused breakpoints

### Display Issues

- Values may not appear for optimized variables in Release builds
- Some complex types may show type information instead of values
- Async/await contexts may have limited variable visibility

## Related Features

- **[Code Analysis](code-analysis.md)**: Enhanced code analysis and diagnostics
- **[Test Explorer](test-explorer.md)**: Integrated test running and debugging
- **Configuration**: All settings available in the extension's Settings webview
