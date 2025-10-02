---
sidebar_position: 4
---

# Code Lens

Contextual information and actions displayed above code elements.

## Overview

Code Lens shows actionable information above methods, classes, and other code elements.

## Available Code Lens Features

### Test Generation Code Lens

Appears above methods to create tests:

```csharp
// Create Tests
public void MyMethod()
{
    // method implementation
}
```

Click to:
- Open test generation dialog
- Create AI-powered unit tests
- Configure test framework and project

**Configuration**: `csharp-dev-tools.testGeneration.enableCodeLens`

### Go to Implementation Code Lens

Appears above interface methods:

```csharp
// 3 implementations
void DoSomething();
```

Click to:
- View all implementations
- Navigate to specific implementation
- See implementation count

**Configuration**: `csharp-dev-tools.codeAnalysis.showImplementations`

### Enum Assignments Code Lens

Appears above enum values:

```csharp
public enum Status
{
    // 5 assignments
    Active,
    // 2 assignments
    Inactive
}
```

Click to:
- See where enum value is used
- Navigate to assignments
- View usage count

**Configuration**: `csharp-dev-tools.codeAnalysis.showEnumAssignments`

## Enabling/Disabling

### Global Toggle

Enable/disable all Code Lens:

1. Open Settings (`Ctrl+,`)
2. Search for `editor.codeLens`
3. Toggle on/off

### Per-Feature Toggle

Enable/disable specific Code Lens features:

- Test Generation: `csharp-dev-tools.testGeneration.enableCodeLens`
- Implementations: `csharp-dev-tools.codeAnalysis.showImplementations`
- Enum Assignments: `csharp-dev-tools.codeAnalysis.showEnumAssignments`

## Usage Tips

### Test Generation

- Click to quickly create tests for methods
- Works best with public methods
- Integrates with GitHub Copilot

### Implementation Navigation

- Useful for interface-based development
- Quickly see all implementations
- Navigate to specific implementation

### Enum Usage

- Track enum value usage
- Find all assignments
- Refactor enums safely

## Benefits

- Quick access to common actions
- Visual indication of code relationships
- Reduced navigation time
- Better code understanding

## Performance

Code Lens:

- Computed incrementally
- Cached for performance
- Updated as code changes
- Minimal performance impact

## Customization

Configure Code Lens appearance:

```json
{
  "editor.codeLensFontFamily": "monospace",
  "editor.codeLensFontSize": 12
}
```

## Troubleshooting

### Code Lens Not Appearing

- Ensure feature is enabled in settings
- Check C# Language Server is running
- Verify file is part of project
- Restart VS Code if needed

### Incorrect Information

- Allow time for indexing
- Rebuild project
- Check for unsaved changes
- Verify project references
