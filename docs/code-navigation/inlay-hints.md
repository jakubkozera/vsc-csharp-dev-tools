---
sidebar_position: 2
---

# Inlay Hints

Show inferred types and parameter names directly in your code.

## Type Hints

### What Are Type Hints?

Type hints display the inferred type for `var` declarations:

```csharp
var customer = new Customer(); // var: Customer
var age = 42; // var: int
var items = GetItems(); // var: List<Item>
```

### Enabling Type Hints

1. Open Settings (`Ctrl+,`)
2. Search for `csharp-dev-tools.inlayHints.enableTypeHints`
3. Enable the setting

Or use Command Palette: "Toggle C# Type Inlay Hints"

### Benefits

- Understand types at a glance
- Keep convenience of `var`
- Reduce mental overhead
- Better code comprehension

## Parameter Hints

### What Are Parameter Hints?

Parameter hints show parameter names in method calls:

```csharp
DoSomething(/* value: */ 42, /* name: */ "test", /* enabled: */ true)
```

### Enabling Parameter Hints

1. Open Settings (`Ctrl+,`)
2. Search for `csharp-dev-tools.inlayHints.enableParameterHints`
3. Enable the setting

### Benefits

- Understand method arguments
- Reduce need to check method signatures
- Improve code readability
- Especially helpful for boolean parameters

## Customization

### Color Configuration

Customize hint colors in settings.json:

```json
{
  "csharpStuff.inlayHints.typeColor": {
    "dark": "#606060",
    "light": "#808080"
  }
}
```

### Font Style

Hints use VS Code's inlay hint styling by default. Customize via:

```json
{
  "editor.inlayHints.fontSize": 11,
  "editor.inlayHints.fontFamily": "monospace"
}
```

## Performance

Inlay hints are:

- Computed on demand
- Cached for performance
- Updated as you type
- Lightweight and fast

## Best Practices

- Use type hints to understand complex LINQ queries
- Enable parameter hints for methods with many parameters
- Customize colors to match your theme
- Toggle off when not needed for cleaner view

## Troubleshooting

### Hints Not Appearing

- Ensure C# Language Server is running
- Check settings are enabled
- Restart VS Code if needed
- Verify file is part of project

### Performance Issues

- Disable if experiencing slowdowns
- Check C# Language Server status
- Reduce hint frequency in settings
