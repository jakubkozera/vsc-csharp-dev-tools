---
sidebar_position: 4
---

# Playwright Integration

End-to-end browser testing with Playwright for .NET.

## Overview

C# Dev Tools supports Playwright test projects for browser automation testing.

## Test Discovery

Playwright tests are discovered automatically:

- Test Explorer recognizes Playwright test projects
- Tests appear alongside unit tests
- Organized by test class and method

## Running Playwright Tests

Run browser tests like any other test:

1. Click "Run Test" in Test Explorer
2. Or right-click test project: "Run Tests"
3. Browser launches and executes tests
4. Results appear in Test Explorer

## Debugging Playwright Tests

Debug browser interactions:

1. Set breakpoints in test code
2. Click "Debug Test" in Test Explorer
3. Debugger stops at breakpoints
4. Inspect browser state and variables

## Creating Playwright Tests

Create test files with templates:

1. Use Quick Add: `MyPlaywrightTest.cs`
2. Or right-click: Add > New File
3. Template includes Playwright setup

## Common Scenarios

### Page Navigation

```csharp
await page.GotoAsync("https://example.com");
```

### Element Interaction

```csharp
await page.ClickAsync("#submit-button");
await page.FillAsync("#username", "testuser");
```

### Assertions

```csharp
await Expect(page.Locator("h1")).ToHaveTextAsync("Welcome");
```

## Best Practices

- Use Page Object Model pattern
- Keep tests independent
- Use proper wait strategies
- Clean up browser state between tests
- Configure timeouts appropriately

## Configuration

Configure Playwright in test project:

- Browser types (Chromium, Firefox, WebKit)
- Headless vs headed mode
- Screenshots on failure
- Video recording
- Timeout settings

## Integration Benefits

- Unified test management
- Combined unit and E2E test results
- Consistent debugging experience
- Single test runner for all tests
