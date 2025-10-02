---
sidebar_position: 2
---

# Quick Add New File (Shift+F2)

The fastest way to create files in your .NET projects.

## Overview

Quick Add New File is activated with `Shift+F2` and provides instant file creation with intelligent defaults.

## Basic Usage

### Single File Creation

1. Select a folder or project in Solution Explorer
2. Press `Shift+F2`
3. Enter a filename: `MyClass.cs`
4. Press Enter

The file is created with:

- Appropriate template based on filename
- Correct namespace
- Standard formatting
- Ready to edit

### File Type Detection

The extension detects file types automatically:

- `IMyService.cs` → Interface template
- `MyEnum.cs` → Enum template
- `PersonRecord.cs` → Record template
- `MyController.cs` → Controller template (in web projects)
- `MyTest.cs` → Test class (in test projects)

## Creating Multiple Files

### Comma-Separated List

Create several files at once:

```
UserService.cs, IUserService.cs, UserDto.cs
```

All three files are created in the selected location.

### With Folders

Include folder paths:

```
Services/UserService.cs, Models/User.cs, Tests/UserTests.cs
```

Folders are created automatically if they don't exist.

## Creating Folders

### Empty Folders

Create a folder by adding a trailing slash:

```
NewFolder/
```

### Folders with Files

Combine folder and file creation:

```
Utils/, Utils/StringHelper.cs
```

## Advanced Syntax

### Nested Structures

Create complex folder hierarchies:

```
Features/Users/Services/UserService.cs
```

All intermediate folders are created automatically.

### Multiple Files in New Folder

```
Authentication/AuthService.cs, Authentication/IAuthService.cs
```

Both files are created inside the new Authentication folder.

## Common Patterns

### Service Layer

```
Services/IUserService.cs, Services/UserService.cs, Services/Dto/UserDto.cs
```

### Feature Folder

```
Features/Orders/OrdersController.cs, Features/Orders/OrderService.cs, Features/Orders/OrderViewModel.cs
```

### Test Setup

```
Tests/Unit/UserServiceTests.cs, Tests/Integration/UserIntegrationTests.cs
```

## Tips and Tricks

### Quick Interface Creation

For an interface and implementation:

```
IMyService.cs, MyService.cs
```

### Batch File Creation

Create related files together:

```
User.cs, UserDto.cs, UserValidator.cs, UserProfile.cs
```

### Organizing by Feature

```
Features/Users/Commands/, Features/Users/Queries/, Features/Users/Models/
```

## Integration

### Automatic Namespace

All created files get the correct namespace based on:

- Project root namespace
- Folder location within project
- .NET conventions

### Solution Explorer Updates

- Files appear immediately in the tree
- No manual refresh needed
- Can edit files right away

### IntelliSense Integration

- New files are recognized instantly
- Types are available for IntelliSense
- No project reload required

## Troubleshooting

### File Not Created

If a file isn't created:

1. Check filename is valid (no special characters)
2. Verify you have write permissions
3. Ensure parent folder exists or will be created
4. Check Output panel for errors

### Wrong Template Applied

If the wrong template is used:

1. Use explicit naming (e.g., `IMyInterface.cs` for interfaces)
2. Manually edit the generated file
3. Future files will use pattern matching

### Namespace Incorrect

If namespace is wrong:

1. Check project settings
2. Verify folder structure
3. Use the namespace adjustment feature to fix
