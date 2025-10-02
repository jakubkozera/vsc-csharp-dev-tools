---
sidebar_position: 5
---

# Semantic Colors

Enhanced syntax highlighting with semantic coloring for specific C# types.

## Overview

Semantic colors provide distinct highlighting for interfaces, enums, and namespaces, making code structure more visible.

## Colored Elements

### Interfaces

Interface types are highlighted with a distinct color:

```csharp
IUserService service; // IUserService in interface color
```

### Enums

Enum types have their own color:

```csharp
Status currentStatus = Status.Active; // Status in enum color
```

### Namespaces

Namespace names are highlighted:

```csharp
using System.Collections.Generic; // System, Collections, Generic in namespace color
```

## Configuration

### Enabling Semantic Colors

Semantic colors are enabled by default. Configure in:

1. Open Settings (`Ctrl+,`)
2. Search for `csharp-dev-tools.editor.semanticColors`
3. Enable/disable per type:
   - `semanticColors.interface`
   - `semanticColors.enum`
   - `semanticColors.namespace`

### Customizing Colors

Define colors per theme in settings.json:

```json
{
  "editor.tokenColorCustomizations": {
    "[Theme Name]": {
      "textMateRules": [
        {
          "scope": "entity.name.type.interface.cs",
          "settings": {
            "foreground": "#b8d7a3"
          }
        },
        {
          "scope": "entity.name.type.enum.cs",
          "settings": {
            "foreground": "#4ec9b0"
          }
        },
        {
          "scope": "entity.name.type.namespace.cs",
          "settings": {
            "foreground": "#dcdcaa"
          }
        }
      ]
    }
  }
}
```

## Benefits

### Visual Distinction

- Quickly identify interfaces vs classes
- Spot enum types at a glance
- Understand namespace structure

### Code Navigation

- Easier to scan code
- Faster comprehension
- Better pattern recognition

### Team Consistency

- Shared color scheme
- Uniform code appearance
- Professional presentation

## Use Cases

### Interface-Based Development

See interfaces clearly when:

- Implementing dependency injection
- Working with abstractions
- Reviewing architectural patterns

### Enum Usage

Identify enums quickly:

- State machines
- Configuration values
- Type discrimination

### Namespace Organization

Understand structure:

- Module boundaries
- Package organization
- Code layout

## Theme Integration

Semantic colors respect VS Code themes:

- Dark themes get appropriate colors
- Light themes use suitable contrast
- High contrast themes supported
- Custom themes can override

## Best Practices

- Use distinct colors that don't clash
- Ensure sufficient contrast
- Test with your preferred theme
- Share color scheme with team
- Document custom colors

## Troubleshooting

### Colors Not Appearing

- Ensure semantic highlighting is enabled
- Check C# Language Server status
- Verify theme supports semantic tokens
- Restart VS Code

### Colors Look Wrong

- Check theme color customizations
- Verify settings.json syntax
- Use color picker for accuracy
- Test with default theme first

## Performance

Semantic coloring:

- Provided by Language Server
- Cached for performance
- Updated incrementally
- Minimal impact
