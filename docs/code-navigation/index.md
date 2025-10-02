---
sidebar_position: 1
---

# Code Navigation & IntelliSense

Advanced code navigation features and enhanced IntelliSense for C# development.

## Overview

C# Dev Tools enhances VS Code's code navigation with:

- **[Inlay Hints](./inlay-hints.md)** - Type and parameter hints
- **[Unused Symbol Detection](./unused-symbols.md)** - Highlight dead code
- **[Code Lens](./code-lens.md)** - Contextual information above code elements
- **[Semantic Colors](./semantic-colors.md)** - Enhanced syntax highlighting

## Key Features

### Inlay Hints

Show inferred types and parameter names inline:

- **Type Hints**: See types for `var` declarations
- **Parameter Hints**: See parameter names in method calls

### Unused Symbol Detection

Identify dead code with visual indicators:

- Private methods not being used
- Unused properties and fields
- Reduced opacity for unused symbols
- Easy identification for cleanup

### Code Lens

Contextual information above code:

- **Test Generation**: "Create Tests" above methods
- **Go to Implementation**: Find interface implementations
- **Enum Assignments**: See where enums are used

### Semantic Colors

Enhanced syntax highlighting:

- **Interfaces**: Distinct color for interface types
- **Enums**: Highlight enum types
- **Namespaces**: Namespace coloring

## Configuration

All features are configurable through VS Code settings or the extension Settings webview:

### Enable/Disable Features

- Enable Type Hints
- Enable Parameter Hints
- Highlight Unused Symbols
- Enable Code Lens features
- Configure semantic colors

### Customization

- Adjust unused symbol opacity
- Configure Code Lens options
- Customize semantic colors per theme
- Set color preferences

## Quick Toggle

Quickly toggle features via Command Palette:

- "Toggle C# Type Inlay Hints"
- "Toggle Unused Symbol Highlighting"
- "Toggle Code Lens"

## Integration

Features work seamlessly with:

- C# Language Server
- IntelliSense
- Code completion
- Refactoring tools
- Debugging features

## Benefits

- Write code faster with hints
- Identify dead code easily
- Navigate code more efficiently
- Understand code structure better
- Maintain cleaner codebases
