---
sidebar_position: 3
---

# SpecFlow Support

Behavior-Driven Development (BDD) testing with SpecFlow and Gherkin.

## Overview

C# Dev Tools provides syntax highlighting and support for SpecFlow feature files.

## Gherkin Syntax Highlighting

Feature files (`.feature`) have full syntax highlighting for:

- **Feature**: Feature definitions
- **Scenario**: Test scenarios
- **Given/When/Then**: BDD steps
- **And/But**: Additional steps
- **Examples**: Scenario outlines
- **Tags**: Feature and scenario tags

## Running SpecFlow Tests

SpecFlow tests integrate with the Test Explorer:

1. Test Explorer automatically discovers SpecFlow scenarios
2. Run scenarios like regular unit tests
3. Debug scenarios with breakpoints in step definitions
4. View results in Test Explorer

## Creating Feature Files

Create `.feature` files using:

1. Quick Add (`Shift+F2`): Enter `MyFeature.feature`
2. Right-click in Solution Explorer: Add > New File
3. Manually create with `.feature` extension

## Step Definitions

Create step definitions in C# files:

```csharp
[Binding]
public class UserSteps
{
    [Given(@"a user named (.*)")]
    public void GivenAUserNamed(string name)
    {
        // Step implementation
    }
}
```

## Best Practices

- Keep feature files focused and readable
- Use descriptive scenario names
- Organize step definitions logically
- Tag scenarios for filtering
- Use scenario outlines for data-driven tests

## Integration

- Feature files show in Solution Explorer
- Scenarios appear in Test Explorer
- Full debugging support
- Test results show in output panel
