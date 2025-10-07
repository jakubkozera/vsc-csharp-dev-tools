---
sidebar_position: 1
---

# Testing Integration

Comprehensive testing support for .NET projects with test discovery, execution, debugging, and AI-powered test generation.

![Test Explorer](../../static/img/test-explorer.png)

## Overview

C# Dev Tools provides complete testing integration:

- **Test Discovery** - xUnit, NUnit, MSTest, SpecFlow support
- **Running Tests** - All tests, specific projects, individual tests
- **Debugging Tests** - Full debugging support with breakpoints
- **Test Filtering** - Group and filter tests efficiently
- **[Code Coverage](./code-coverage.md)** - Interactive coverage dashboard with risk analysis
- **[Test Generation](./test-generation.md)** - AI-powered test creation with GitHub Copilot
- **[SpecFlow Support](./specflow-support.md)** - BDD testing integration
- **[Playwright Integration](./playwright-integration.md)** - End-to-end browser testing

## Test Discovery

Tests are automatically discovered from:

- **MSTest** - Microsoft's testing framework
- **xUnit** - Modern extensible framework
- **NUnit** - Feature-rich testing framework
- **SpecFlow** - BDD/Gherkin tests

Tests are organized hierarchically by:

- Project
- Namespace
- Test class
- Test method

## Running Tests

### Running All Tests

Click the "Run All Tests" button in the Test Explorer title bar, or use `Ctrl+R, T`.

### Running Specific Test Projects

Right-click on a test project in Solution Explorer and select "Run Tests".

### Running Individual Tests

1. Hover over a test in Test Explorer
2. Click the "Run Test" icon (play button)

### Running Test Groups

1. Hover over a namespace or class
2. Click the "Run Tests" icon
3. All tests in that group execute

## Debugging Tests

To debug a test:

1. Set breakpoints in your test code
2. Hover over a test in Test Explorer
3. Click the "Debug Test" icon (bug icon)
4. The debugger stops at your breakpoints

## Test Results

After running tests:

- ✓ Green check: Passed
- ✗ Red X: Failed
- ⚠ Yellow triangle: Skipped

Click on a failed test to see:

- Error message
- Stack trace
- Expected vs actual values
- Source line

## Test Filtering and Grouping

Filter tests by:

- Name (using search box)
- Status (passed/failed/skipped)
- Project
- Class

Group tests by:

- Project
- Namespace
- Class
- Status

## Test Output

View detailed test output:

1. Run tests
2. Open Output panel (`Ctrl+Shift+U`)
3. Select ".NET Test Log" from dropdown
4. View execution logs

## Accessing Test Explorer

1. Click the Test Explorer icon (beaker) in Activity Bar
2. Or use Command Palette: "Test: Focus on Test Explorer View"
3. Or right-click a test project: "Run Tests"

## Test Navigation

Navigate to test source:

1. Click any test in Test Explorer
2. The source file opens at the test method
3. For failed tests, click stack trace lines to navigate

## Test Settings

Configure test behavior:

1. Open VS Code settings (`Ctrl+,`)
2. Search for "testing"
3. Adjust:
   - Auto-run on save
   - Test Explorer view
   - Discovery behavior

## Integration with Solution Explorer

Tests integrate seamlessly:

- Right-click test projects to run tests
- View test project dependencies
- Manage test NuGet packages
- Set test project configurations
