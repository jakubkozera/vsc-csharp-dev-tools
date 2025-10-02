---
sidebar_position: 5
---

# Custom Template Support

While C# Dev Tools doesn't yet support fully custom templates, you can influence the generated files and use .NET templates.

## Using .NET Templates

The extension integrates with the .NET template engine:

### Install Custom Templates

```bash
dotnet new install <template-package>
```

### Available in Project Creation

Installed templates appear in the New Project wizard automatically.

## Influencing Generated Files

### Naming Conventions

The extension uses filename patterns to determine templates:

- Start with `I` for interfaces: `IMyService.cs`
- End with specific keywords: `MyController.cs`, `MyEnum.cs`
- Use descriptive names for better template selection

### Project Context

Templates adapt based on project type:

- Test projects get test templates
- Web projects get controller/page templates
- Class libraries get standard code templates

## Future Support

Custom template support is planned for future releases. Stay tuned for:

- User-defined templates
- Template customization
- Snippet integration
- Template marketplace
