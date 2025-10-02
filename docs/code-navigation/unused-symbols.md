---
sidebar_position: 3
---

# Unused Symbol Detection

Identify and eliminate dead code with unused symbol highlighting.

## Overview

Unused symbol detection automatically highlights code that isn't being used anywhere in your project.

## What Gets Detected

### Private Methods

Private methods with no references:

```csharp
private void UnusedMethod() // Appears grayed out
{
    // This method is never called
}
```

### Properties

Public and private properties not accessed:

```csharp
private string UnusedProperty { get; set; } // Grayed out
```

### Fields

Fields that are declared but never used:

```csharp
private int _unusedField; // Grayed out
```

### Events

Events that are never subscribed to or raised:

```csharp
private event EventHandler UnusedEvent; // Grayed out
```

## Visual Indication

Unused symbols appear with reduced opacity (grayed out), making them easy to spot.

## Configuration

### Enable/Disable

1. Open Settings (`Ctrl+,`)
2. Search for `csharp-dev-tools.editor.highlightUnusedSymbols`
3. Toggle on/off

Or use Command Palette: "Toggle Unused Symbol Highlighting"

### Adjust Opacity

Control how grayed out unused symbols appear:

1. Search for `csharp-dev-tools.editor.unusedSymbolOpacity`
2. Set value between 0.1 (very faint) and 1.0 (normal)

## Detection Method

The extension uses:

1. **Primary**: C# Language Server diagnostics (IDE0051, etc.)
2. **Fallback**: Reference counting for larger files
3. **Scope**: File-level detection for performance

## Exclusions

### Public Methods

Public methods are excluded from detection as they might be:

- API endpoints
- Library methods
- Called from external projects
- Used via reflection

### Interface Implementations

Methods implementing interfaces are excluded even if not directly called.

### Virtual/Override Methods

Virtual and override methods are excluded as they may be called via polymorphism.

## Use Cases

### Code Cleanup

- Identify methods to remove
- Find unused properties
- Eliminate dead code
- Reduce technical debt

### Refactoring

- Safely remove unused code
- Simplify classes
- Improve maintainability

### Code Review

- Spot accidentally unused code
- Find leftover experimental code
- Identify incomplete refactorings

## Best Practices

- Review grayed out code before deleting
- Check if code is intentionally unused (future use)
- Consider making unused public methods private
- Remove truly dead code to reduce complexity

## Troubleshooting

### False Positives

If actively used code appears unused:

- May be called via reflection
- Used in other projects/assemblies
- Called from markup (Blazor, XAML)
- Toggle off the feature for those files

### Not Detecting Unused Code

- Ensure C# Language Server is running
- Check file is part of project
- Verify diagnostic level includes information
- Rebuild project if needed

## Performance

- Lightweight detection
- Incremental updates
- Optimized for large files
- Minimal performance impact
