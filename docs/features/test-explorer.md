---
sidebar_position: 2
---

# Test Explorer

The Test Explorer integrates with VS Code's testing functionality to provide a seamless testing experience for .NET projects.

![Test Explorer](./img/test-explorer.png)

## Overview

Test Explorer automatically discovers and displays tests from your .NET projects, supporting:

- MSTest
- xUnit
- NUnit
- ASP.NET Core integration tests

Tests are organized hierarchically:

- By project
- By namespace
- By test class
- By test method

## Accessing the Test Explorer

1. Click the Test Explorer icon in the Activity Bar (beaker icon)
2. If tests aren't automatically discovered, click the refresh button in the Test Explorer
3. Alternatively, right-click on a test project in the Solution Explorer and select "Run Tests"

## Discovering Tests

Test Explorer automatically discovers tests when:

- A solution is loaded
- A test project is added or modified
- The "Refresh All Tests" button is clicked

To manually refresh the test discovery:

1. Click the "Refresh" button in the Test Explorer's title bar
2. Use the command "C# Tests: Refresh All Tests" from the Command Palette
3. Right-click in the Test Explorer and select "Refresh Tests"

## Running Tests

### Running Individual Tests

1. Hover over a test in the Test Explorer
2. Click the "Run Test" icon (play button)
3. Alternatively, click the "Run" button next to the test name

### Running Multiple Tests

1. Select multiple tests using Ctrl+Click
2. Right-click on the selection and choose "Run Tests"

### Running All Tests

1. Click the "Run All Tests" button in the Test Explorer's title bar
2. Alternatively, use the keyboard shortcut `Ctrl+R, T`

### Running Tests by Group

1. Hover over a test group (project, namespace, or class)
2. Click the "Run Tests" icon
3. All tests in that group will be executed

## Debugging Tests

To debug a test:

1. Set breakpoints in your test code
2. Hover over a test in the Test Explorer
3. Click the "Debug Test" icon (bug icon)
4. The test will run in debug mode, stopping at your breakpoints

## Viewing Test Results

After running tests:

1. Test icons will update to show pass/fail status
   - ✓ Green check: Passed
   - ✗ Red X: Failed
   - ⚠ Yellow triangle: Skipped or inconclusive

2. Click on a failed test to see:
   - Error message
   - Stack trace
   - Expected and actual values
   - Source line that caused the failure

## Test Output

To view detailed test output:

1. Run a test or test group
2. Open the Output panel (`Ctrl+Shift+U`)
3. Select ".NET Test Log" from the dropdown
4. View the detailed execution log

## Test Organization

Tests can be filtered and organized:

1. Use the search box to filter tests by name
2. Click on the "Group By" button to organize tests by:
   - Project
   - Class
   - Status

## Test Navigation

To navigate to test source code:

1. Click on any test in the Test Explorer
2. The test source file will open with the cursor at the test method
3. For failed tests, clicking on stack trace lines will navigate to the relevant code

## Fixing Failed Tests

When a test fails:

1. Click on the failed test to see the error details
2. Examine the error message and stack trace
3. Click on the "Fix Test with Copilot" button if available
4. Copilot will suggest potential fixes based on the error

## Test Settings

Configure test behavior in settings:

1. Open VS Code settings (`Ctrl+,`)
2. Search for "testing"
3. Adjust settings such as:
   - Auto-run tests on save
   - Test explorer view settings
   - Test discovery behavior
