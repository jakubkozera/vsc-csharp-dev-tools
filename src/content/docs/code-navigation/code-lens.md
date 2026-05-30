---
title: Code Lens
sidebar:
  order: 4
---

Contextual information and actions displayed above code elements.

## Overview

Code Lens shows actionable information above methods, classes, and other code elements.

## Available Code Lens Features

### Test Generation Code Lens

Appears above public methods and classes to create tests:

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

**Configuration**: `csharp-dev-tools.codeLens.enableTestGeneration`

### Test Runner Code Lens

Appears above test methods and test classes in test files:

```csharp
// Run | Debug
[Fact]
public void Should_Pass() { ... }
```

Click to:
- Run the individual test (or whole class)
- Debug the test directly from the editor

**Configuration**: `csharp-dev-tools.codeLens.enableTestRunner`

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

**Configuration**: `csharp-dev-tools.codeLens.enableGoToImplementation`

### References Code Lens

Appears above types and members:

```csharp
// 12 references
public class OrderService { }
```

Click to:
- See all places where the type or member is referenced
- Navigate to a specific reference
- See total reference count

**Configuration**: `csharp-dev-tools.codeLens.enableReferences`

### Type Initializations Code Lens

Appears above class, struct and interface declarations to show where the type is instantiated (e.g. `new MyType(...)`, `MyType x = ...`):

```csharp
// 7 initializations
public class OrderRepository { }
```

Click to navigate through every place the type is being created.

**Configuration**: `csharp-dev-tools.codeLens.enableTypeInitializations`

### Member Assignments Code Lens

Appears above public properties and fields, indicating where they are being assigned values:

```csharp
public class Order
{
    // 4 assignments
    public string Status { get; set; }
}
```

Click to navigate through every assignment site.

**Configuration**: `csharp-dev-tools.codeLens.enableMemberAssignments`

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
- See where each enum value is assigned
- Navigate to assignments
- View usage count

**Configuration**: `csharp-dev-tools.codeLens.enableEnumAssignments`

## Enabling/Disabling

### Global Toggle

Enable/disable all Code Lens:

1. Open Settings (`Ctrl+,`)
2. Search for `editor.codeLens`
3. Toggle on/off

### Per-Feature Toggle

Each code lens can be toggled independently in **Settings → C# Dev Tools → Code Lens**:

- `csharp-dev-tools.codeLens.enableTestGeneration`
- `csharp-dev-tools.codeLens.enableTestRunner`
- `csharp-dev-tools.codeLens.enableGoToImplementation`
- `csharp-dev-tools.codeLens.enableReferences`
- `csharp-dev-tools.codeLens.enableTypeInitializations`
- `csharp-dev-tools.codeLens.enableMemberAssignments`
- `csharp-dev-tools.codeLens.enableEnumAssignments`

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
