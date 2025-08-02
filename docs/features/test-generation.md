# Test Generation

The Test Generation feature provides an advanced, AI-powered system for creating comprehensive unit tests for your C# methods. With full GitHub Copilot integration, it intelligently analyzes your source code and generates contextually appropriate tests.

![Test Generation](../../static/img/test-explorer.png)

## Getting Started

### Accessing Test Generation

You can access the test generation feature in several ways:

1. **Code Lens**: Click the "Create Tests" code lens that appears above methods in your C# files
2. **Context Menu**: Right-click on a method and select "Create Tests"
3. **Command Palette**: Use `Ctrl+Shift+P` and search for "Create Tests"

### Prerequisites

- GitHub Copilot extension must be installed and activated
- A .NET solution must be loaded in your workspace
- The source file must contain at least one method

## Features

### AI-Powered Test Generation

The test generation system leverages GitHub Copilot to create intelligent, context-aware tests:

- **Automatic Test Scenarios**: Generates multiple test cases covering different scenarios
- **Smart Assertions**: Creates appropriate assertions based on method return types and behavior
- **Context Analysis**: Understands method complexity, parameters, and dependencies
- **Error Handling Tests**: Generates tests for exception scenarios when appropriate

### Multiple Testing Frameworks

Choose from popular .NET testing frameworks:

- **xUnit**: Modern, extensible testing framework
- **NUnit**: Feature-rich testing framework with extensive assertion library
- **MSTest**: Microsoft's testing framework integrated with Visual Studio

### Assertion Libraries

Select your preferred assertion style:

- **Standard Assert**: Built-in assertion methods from your chosen test framework
- **FluentAssertions**: Natural language assertions for improved readability
- **Shouldly**: Readable assertions with better error messages
- **NFluent**: Fluent assertion framework with extensive checks

### Intelligent Project Management

#### Test Project Detection

The system automatically detects existing test projects using common naming conventions:

- `MyProject` → `MyProject.Tests`
- `MyProject` → `MyProject.UnitTests`
- `MyProject` → `Tests.MyProject`

#### New Project Creation

When no suitable test project exists, you can create a new one with:

- Automatic framework configuration
- Proper package references
- Project-to-project references
- Solution integration

### Flexible File Organization

#### Test File Placement Options

- **Create New File**: Generate a new test file following naming conventions
- **Append to Existing**: Add tests to an existing test file
- **Custom Location**: Specify exactly where to place the test file

#### Namespace Management

- Maintains consistent namespace structure between source and test projects
- Automatically adjusts namespaces based on folder hierarchy
- Supports both traditional and file-scoped namespace declarations

## Advanced Features

### Additional Context Files

Enhance test generation by including related files for better context:

- **Auto-Detection**: System automatically suggests related files based on:
  - Using statements in the source file
  - Files in the same namespace
  - Referenced types and dependencies

- **Manual Selection**: Choose specific files to include as context for more accurate test generation

### Custom Copilot Instructions

Leverage your existing GitHub Copilot instructions:

- **Automatic Detection**: Finds `.github/copilot-instructions.md` in your repository
- **Enhanced Context**: Incorporates your coding standards and preferences
- **Consistent Style**: Generates tests that match your team's conventions

### Saved Preferences

The system remembers your choices per solution:

- **Test Framework**: Your preferred testing framework
- **Assertion Library**: Your chosen assertion style
- **Test Project**: Default test project selection
- **File Organization**: Preferred test file structure

## Usage Examples

### Basic Test Generation

1. Open a C# file with methods you want to test
2. Click the "Create Tests" code lens above a method
3. Configure your preferences in the dialog:
   - Select test framework (e.g., xUnit)
   - Choose assertion library (e.g., FluentAssertions)
   - Pick or create a test project
4. Click "Generate Tests" to create AI-powered unit tests

### Advanced Scenario

For complex methods requiring additional context:

1. Access the test generation dialog
2. Enable "Include additional context files"
3. Select relevant files that contain dependencies or related types
4. Add custom prompts to guide the AI generation
5. Generate comprehensive tests with full context understanding

## Best Practices

### Method Preparation

For optimal test generation:

- **Clear Method Names**: Use descriptive names that indicate the method's purpose
- **Single Responsibility**: Methods with single, clear purposes generate better tests
- **Good Documentation**: XML comments help the AI understand intended behavior

### Context Selection

When including additional context files:

- Include interface definitions that your method implements
- Add model classes that are used as parameters or return types
- Include related service classes for dependency understanding

### Review Generated Tests

Always review and customize generated tests:

- **Verify Test Logic**: Ensure tests actually verify the intended behavior
- **Add Edge Cases**: Consider additional scenarios not covered by AI
- **Customize Assertions**: Adjust assertions to match your specific requirements

## Troubleshooting

### Common Issues

**No Code Lens Appearing**
- Ensure the C# extension is properly loaded
- Check that test generation code lens is enabled in settings
- Verify the file contains valid C# methods

**Test Generation Failed**
- Confirm GitHub Copilot is activated and working
- Check that the selected test project has proper framework references
- Ensure the source method is public and not abstract

**Generated Tests Don't Compile**
- Verify all necessary using statements are included
- Check that test project references the source project
- Ensure assertion library packages are properly installed

### Getting Help

If you encounter issues:

1. Check the Output panel for detailed error messages
2. Verify your GitHub Copilot subscription is active
3. Ensure all prerequisites are met
4. Review the generated code for any obvious syntax issues

## Configuration

The test generation feature can be configured through VS Code settings:

- `csharp-dev-tools.testGeneration.enableCodeLens`: Enable/disable code lens for test generation
- `csharp-dev-tools.testGeneration.defaultFramework`: Set default test framework
- `csharp-dev-tools.testGeneration.includeContext`: Auto-include context files by default

Access these settings through the Solution Explorer Settings webview or VS Code's settings panel.
