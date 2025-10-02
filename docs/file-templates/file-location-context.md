---
sidebar_position: 7
---

# File Location Context Awareness

The extension understands where you're creating files and adapts accordingly.

## Context Detection

### Project Type Awareness

**Test Projects**: Offers test-specific templates (xUnit, NUnit, MSTest)

**Web Projects**: Provides controllers, pages, and components

**Class Libraries**: Focuses on interfaces, classes, and services

### Folder Context

**Controllers Folder**: Suggests controller templates

**Models Folder**: Suggests model and DTO templates

**Services Folder**: Suggests interface and implementation pairs

**Tests Folder**: Suggests test class templates

## Smart Defaults

Based on context:

- Template selection
- Naming conventions
- Using statements
- Base classes and interfaces

## Benefits

- Fewer steps to create files
- Consistent file organization
- Automatic best practices
- Reduced manual configuration

## Examples

### In Test Project Tests Folder

Creating `UserTests.cs`:

- Automatically uses test template
- Includes test framework usings
- Sets up test class structure

### In Web Project Controllers Folder

Creating `UserController.cs`:

- Uses API controller template
- Includes MVC usings
- Inherits from ControllerBase
- Adds route attribute

### In Class Library Services Folder

Creating `IUserService.cs`:

- Uses interface template
- Includes common usings
- Follows naming conventions
