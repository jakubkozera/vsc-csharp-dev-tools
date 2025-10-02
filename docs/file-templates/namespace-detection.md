---
sidebar_position: 6
---

# Automatic Namespace Detection and Adjustment

Smart namespace management that automatically determines the correct namespace for new files.

## How It Works

When you create a file, the namespace is automatically determined by:

1. **Project Root Namespace**: Read from the .csproj file
2. **Folder Structure**: Relative path from project root
3. **.NET Conventions**: Standard naming patterns

## Examples

### Project Root

File: `MyProject/MyClass.cs`
Namespace: `MyProject`

### In Subfolder

File: `MyProject/Services/UserService.cs`
Namespace: `MyProject.Services`

### Nested Folders

File: `MyProject/Features/Auth/Services/AuthService.cs`
Namespace: `MyProject.Features.Auth.Services`

## Namespace Styles

### File-Scoped Namespaces (Modern)

```csharp
namespace MyProject.Services;

public class UserService
{
}
```

### Traditional Namespaces

```csharp
namespace MyProject.Services
{
    public class UserService
    {
    }
}
```

The extension detects your project's style and matches it.

## Manual Adjustment

If a namespace needs correction:

1. Use the "Adjust Namespace" command
2. The namespace will be updated based on current location
3. All usings and references remain intact

## Configuration

Namespace behavior respects:

- Project settings
- EditorConfig
- C# language version
- Team conventions

No manual configuration needed - it just works!
