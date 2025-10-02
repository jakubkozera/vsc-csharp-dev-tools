---
sidebar_position: 2
---

# Running and Debugging Tests

Execute and debug your .NET tests directly from VS Code with integrated test explorer functionality.

## Overview

The C# Dev Tools extension provides seamless integration with VS Code's native Test Explorer, allowing you to run, debug, and manage your .NET tests without leaving the editor.

## Test Explorer

### Accessing Test Explorer

The Test Explorer is available in multiple ways:

1. **Activity Bar**: Click the Testing icon (flask/beaker icon) in the Activity Bar
2. **Command Palette**: Press `Ctrl+Shift+P` and type "Test: Focus on Test Explorer View"
3. **Status Bar**: Click on the test status indicator in the status bar

### Test Explorer Features

The Test Explorer provides a hierarchical view of your tests:

- **Test Projects**: Organized by project and namespace
- **Test Classes**: Group tests by class
- **Individual Tests**: Each test method is listed
- **Test Status**: Visual indicators for pass/fail/pending
- **Filter Options**: Show only failed, passed, or all tests

## Running Tests

### Run All Tests

Execute all tests in your solution:

1. Open Test Explorer
2. Click the "Run All Tests" button (play icon at the top)
3. Watch test execution in real-time
4. View results in the Test Explorer

Alternatively, use the Command Palette:

- Press `Ctrl+Shift+P`
- Type "Test: Run All Tests"
- Press Enter

### Run Specific Tests

#### Run Single Test

1. Navigate to the test in Test Explorer
2. Click the play icon next to the test
3. View the result immediately

#### Run Test Class

1. Find the test class in Test Explorer
2. Click the play icon next to the class
3. All tests in the class execute

#### Run Test Project

1. Locate the test project in Test Explorer
2. Click the play icon next to the project
3. All tests in the project execute

### Run Tests from Code Editor

Execute tests directly from your code:

#### Using Code Lens

1. Open a test file
2. Look for "Run Test" links above test methods
3. Click "Run Test" to execute
4. Click "Debug Test" to debug

#### Using Context Menu

1. Right-click on a test method
2. Select "Run Test" from the context menu
3. Test executes and results appear in Test Explorer

#### Using Keyboard Shortcuts

- Place cursor in a test method
- Press the configured shortcut (check settings)
- Test executes immediately

## Debugging Tests

### Debug Single Test

Start debugging a specific test:

1. Open Test Explorer or your test file
2. Click the "Debug Test" icon next to the test
3. Debugger attaches automatically
4. Set breakpoints in your test or production code
5. Step through code execution

#### From Code Lens

1. Open test file
2. Click "Debug Test" link above test method
3. Debugger starts with breakpoint at test

### Debug Configuration

Tests use the standard .NET debugging configuration:

- Breakpoints work in both test and production code
- Watch variables and expressions
- Call stack navigation
- Console output visible in Debug Console

### Debug Test Class or Project

1. Right-click on test class/project in Test Explorer
2. Select "Debug Tests"
3. All tests in the scope run with debugger attached
4. Execution pauses at any breakpoint

## Test Results

### Viewing Results

Test results appear in multiple locations:

#### In Test Explorer

- Green checkmark: Test passed
- Red X: Test failed
- Yellow circle: Test skipped
- Gray circle: Not yet run

#### Output Panel

1. Open Output panel (`Ctrl+Shift+U`)
2. Select "Test" from dropdown
3. View detailed test execution logs

#### Problems Panel

- Failed test assertions appear as problems
- Click to navigate to failing test
- Shows expected vs actual values

### Test Output

View detailed output for each test:

1. Click on a test in Test Explorer
2. View test output in the bottom panel
3. See:
   - Execution time
   - Console output
   - Error messages
   - Stack traces

### Failed Tests

When tests fail:

1. Red X appears in Test Explorer
2. Error message displayed
3. Stack trace available
4. Click to jump to failing line
5. Fix and re-run

## Test Filtering

### Filter by Status

Filter tests based on their execution status:

- **Show All**: Display all tests
- **Show Failed**: Only failed tests
- **Show Passed**: Only successful tests
- **Show Not Run**: Tests not yet executed

Click the filter icon in Test Explorer to toggle filters.

### Search Tests

Find specific tests quickly:

1. Click in the Test Explorer search box
2. Type test name, class, or namespace
3. Results filter as you type
4. Clear search to show all tests

## Continuous Testing

### Watch Mode

Run tests automatically when code changes:

1. Open Command Palette (`Ctrl+Shift+P`)
2. Type "Test: Toggle Auto Run"
3. Tests run automatically on file save
4. Immediate feedback on code changes

### Test Coverage

View code coverage after running tests:

1. Run tests with coverage enabled
2. Coverage indicators appear in gutter
3. Green: Line covered
4. Red: Line not covered
5. Coverage report in Output panel

## Test Configuration

### Run Settings

Configure test execution behavior:

1. Create `runsettings` file in your project
2. Configure:
   - Test execution timeout
   - Parallel execution
   - Test adapters
   - Data collection

**Example .runsettings file:**

```xml
<?xml version="1.0" encoding="utf-8"?>
<RunSettings>
  <RunConfiguration>
    <MaxCpuCount>1</MaxCpuCount>
    <ResultsDirectory>.\TestResults</ResultsDirectory>
    <TargetFramework>net8.0</TargetFramework>
  </RunConfiguration>
  <MSTest>
    <Parallelize>
      <Workers>4</Workers>
    </Parallelize>
  </MSTest>
</RunSettings>
```

### Extension Settings

Configure test-related settings:

1. Open Settings (`Ctrl+,`)
2. Search for "csharp-dev-tools.testing"
3. Adjust:
   - Auto-discover tests
   - Test adapter paths
   - Default test framework
   - Code lens visibility

## Keyboard Shortcuts

Common shortcuts for testing:

- **Run Test**: Varies (configure in Keyboard Shortcuts)
- **Debug Test**: Varies (configure in Keyboard Shortcuts)
- **Run All Tests**: Varies (configure in Keyboard Shortcuts)
- **Focus Test Explorer**: `Ctrl+Shift+P` → "Test: Focus on Test Explorer View"

### Customizing Shortcuts

1. Open Command Palette (`Ctrl+Shift+P`)
2. Type "Preferences: Open Keyboard Shortcuts"
3. Search for "test"
4. Assign your preferred shortcuts

## Test Frameworks Support

The extension supports multiple test frameworks:

### xUnit

- Automatic test discovery
- Fact and Theory tests
- Inline and member data
- Test collections

### NUnit

- Test fixtures and tests
- TestCase attributes
- SetUp and TearDown
- Parameterized tests

### MSTest

- TestClass and TestMethod
- DataRow attributes
- Initialize and Cleanup
- Test categories

## Integration with CI/CD

### Test Results Export

Export test results for CI/CD pipelines:

- Results saved in standard formats (TRX, JUnit)
- Configure output directory
- Integrate with build systems
- Track test history

### Command Line Integration

Run tests from terminal:

```powershell
dotnet test
```

Results sync with Test Explorer automatically.

## Troubleshooting

### Tests Not Appearing

If tests don't appear in Test Explorer:

1. Ensure test project references test framework NuGet packages
2. Build the project (`Ctrl+Shift+B`)
3. Check Output panel for errors
4. Reload window (`Ctrl+Shift+P` → "Developer: Reload Window")

### Tests Fail to Run

If tests won't execute:

1. Verify .NET SDK is installed
2. Check project builds successfully
3. Ensure test framework adapters are installed
4. Review test configuration files

### Debugger Not Attaching

If debugger doesn't attach:

1. Check launch.json configuration
2. Verify .NET debugger is enabled
3. Ensure project is built in Debug mode
4. Try restarting VS Code

### Slow Test Execution

If tests run slowly:

1. Enable parallel test execution
2. Check for slow tests (use profiling)
3. Optimize test setup/teardown
4. Review resource-intensive operations

## Best Practices

### Organizing Tests

- Group related tests in test classes
- Use descriptive test names
- Organize by feature or component
- Keep test projects separate

### Running Tests Efficiently

- Run affected tests only during development
- Use continuous testing for immediate feedback
- Run full suite before commits
- Debug individual tests when troubleshooting

### Test Maintenance

- Keep tests fast and focused
- Remove obsolete tests
- Update tests with code changes
- Monitor test reliability

## Related Features

- [Test Generation](./test-generation.md) - Auto-generate unit tests
- [SpecFlow Support](./specflow-support.md) - BDD testing
- [Playwright Integration](./playwright-integration.md) - E2E testing
- Code Coverage - Analyze test coverage
- Test Explorer API - VS Code testing integration
