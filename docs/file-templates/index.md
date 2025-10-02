---
sidebar_position: 1
---

# File Templates & Quick File Creation

Create files quickly with intelligent templates and powerful features including JSON to C# conversion.

## Overview

C# Dev Tools provides a comprehensive file creation system:

- **[Quick Add New File (Shift+F2)](./quick-add.md)** - Lightning-fast file creation
- **[JSON to C# Conversion](./json-to-csharp.md)** - Convert JSON to C# classes instantly
- **[Available Templates](./available-templates.md)** - Full list of file templates
- **[Custom Template Support](./custom-templates.md)** - Create your own templates
- **[Automatic Namespace Detection](./namespace-detection.md)** - Smart namespace management
- **[File Location Context](./file-location-context.md)** - Location-aware file creation

## Quick Start

### Basic File Creation

The fastest way to create files:

1. Select a folder or project in Solution Explorer
2. Press `Shift+F2`
3. Enter a filename (e.g., `MyClass.cs`)
4. Press Enter

The file is created with appropriate template and namespace.

### JSON to C# Conversion

Convert JSON to C# classes on the fly:

1. Press `Shift+F2`
2. Enter JSON followed by a class name:
   ```
   {"name":"John","age":30}Person.cs
   ```
3. Press Enter

A complete C# class is generated from the JSON structure.

### Multiple Files at Once

Create multiple files in one operation:

1. Press `Shift+F2`
2. Enter comma-separated filenames:
   ```
   IRepository.cs, Repository.cs, RepositoryTests.cs
   ```
3. Press Enter

All three files are created instantly.

## Key Features

### Smart Templates

Templates automatically include:

- Correct namespace based on project and folder
- Appropriate using statements
- Standard formatting and conventions
- File-scoped or traditional namespaces (based on project settings)

### Folder Creation

Create folders by adding a trailing slash:

```
Models/User.cs
```

This creates a Models folder and User.cs inside it.

### Complex Structures

Create nested structures:

```
Features/Authentication/Services/AuthService.cs
```

All folders are created automatically.

## File Template Types

Available templates include:

- **C# Files**: Class, Interface, Enum, Record, Struct
- **Web Files**: Controller, Razor Page, Blazor Component
- **Test Files**: xUnit, NUnit, MSTest test classes
- **Configuration**: JSON, XML, YAML files
- **And more...**

See [Available Templates](./available-templates.md) for the complete list.

## Advanced Features

### Context-Aware Creation

The extension understands context:

- **In test projects**: Offers test templates
- **In web projects**: Offers controller and page templates
- **In class libraries**: Focuses on code templates

### Namespace Intelligence

Namespaces are determined by:

1. Project root namespace
2. Folder structure within project
3. .NET naming conventions

No manual namespace adjustment needed!

## Integration with Solution Explorer

File templates integrate seamlessly:

- Right-click any folder to add files
- Files appear immediately in the tree
- Solution is automatically updated
- IntelliSense recognizes new files instantly
