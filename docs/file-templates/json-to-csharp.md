---
sidebar_position: 3
---

# JSON to C# Conversion

Convert JSON objects to C# classes instantly with intelligent property mapping.

## Overview

The JSON to C# feature automatically generates C# classes from JSON data, saving time and reducing errors.

## Basic Usage

### Simple Conversion

Press `Shift+F2` and enter:

```text
{"name":"John","age":30}Person.cs
```

Generates:

```csharp
namespace YourNamespace
{
    public class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }
    }
}
```

### With Folder

Create in a specific folder:

```text
Models/{"name":"John","age":30}User.cs
```

Generates `User.cs` in the Models folder.

### Nested Structures

For nested folders:

```text
Models/Dto/{"id":1,"name":"Product"}ProductDto.cs
```

Creates folders and file automatically.

## Supported JSON Features

### Primitive Types

- **Strings**: `"name": "value"` → `string Name`
- **Numbers**: `"age": 30` → `int Age`
- **Decimals**: `"price": 19.99` → `decimal Price`
- **Booleans**: `"active": true` → `bool Active`

### Complex Types

### Null Values

- `"value": null` → `string? Value` (nullable reference types)

### Arrays

- `"tags": ["tag1", "tag2"]` → `List<string> Tags`
- `"numbers": [1,2,3]` → `List<int> Numbers`

### Nested Objects

```json
{
  "user": {
    "name": "John",
    "email": "john@example.com"
  }
}
```

Generates two classes: main class and nested User class.

### Mixed Arrays

Arrays with objects:

```json
{
  "items": [
    {"id": 1, "name": "Item1"}
  ]
}
```

Generates Item class and `List<Item>` property.

## Generated Class Features

### Property Naming

JSON keys are converted to Pascal Case:

- `"firstName"` → `FirstName`
- `"user_name"` → `UserName`
- `"email-address"` → `EmailAddress`

### Type Inference

Types are intelligently inferred:

- Whole numbers → `int`
- Decimals → `decimal`
- ISO dates → `DateTime`
- Arrays → `List<T>`
- Nested objects → Custom classes

### Code Quality

Generated code includes:

- Proper formatting
- Correct namespace
- XML documentation (optional)
- Nullable reference types
- Standard conventions

## Advanced Features

### Multiple JSON Objects

Convert multiple JSON objects:

```text
{"id":1,"name":"User"}User.cs, {"id":1,"title":"Post"}Post.cs
```

### Default Class Name

Without specifying a name:

```text
{"name":"value"}
```

Creates `RootObject.cs` by default.

### Multiline JSON

For complex JSON, use the full editor:

1. Create a file first
2. Paste JSON
3. Use command "Convert JSON to C#"

## Use Cases

### API Response Models

Convert API responses:

1. Copy JSON response
2. Use Quick Add with JSON
3. Get C# models instantly

### Configuration Classes

Convert config JSON to strongly-typed classes:

1. Copy appsettings.json section
2. Generate C# configuration class
3. Use with Options pattern

### Test Data

Generate test models from sample data:

1. Create test JSON
2. Convert to C# class
3. Use in unit tests

## Integration

### With Solution Explorer

Generated classes:

- Appear immediately in tree
- Have correct namespace
- Are ready to use
- Integrate with IntelliSense

### With Existing Code

- Can reference other types
- Work with dependency injection
- Serialize back to JSON easily

## Tips

### Better Type Inference

Provide sample data with:

- Realistic values
- All possible properties
- Varied data types
- Array with multiple items

### Naming

Use descriptive class names:

- `UserDto.cs` for DTOs
- `UserResponse.cs` for API responses
- `UserViewModel.cs` for view models

### Organizing

Group related models:

```text
Models/Api/{"..."}UserResponse.cs
Models/Dto/{"..."}UserDto.cs
```

## Troubleshooting

### Invalid JSON

If JSON is invalid:

1. Check for missing quotes
2. Verify comma placement
3. Escape special characters
4. Use online JSON validator

### Wrong Types Generated

If types are incorrect:

1. Provide better sample data
2. Manually adjust generated class
3. Use specific values (not null)

### Namespace Issues

If namespace is wrong:

1. Check folder structure
2. Verify project root namespace
3. Use namespace adjustment feature
