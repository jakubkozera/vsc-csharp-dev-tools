---
title: Changelog
description: History of changes in C# Dev Tools
---

# Change Log

## [1.5.0] - 2026-06-29

### Added

- **LSP 1.5.0 Upgrade**: Updated the language server to version 1.5.0, bringing the latest Roslyn-based editing improvements into the extension.
- **Blazor Support**: Added new Blazor-focused language features, including semantic coloring for different symbol kinds such as enums, booleans, numbers, and types.
- **Better Autocomplete**: Improved completion suggestions across C# and Blazor scenarios for a smoother editing experience.
- **Expression Navigation**: Added Go to Definition and autocomplete support for expressions.

## [1.4.25] - 2026-06-25

### Fixed

- **Runners — Custom Namespace Support**: Fixed runner execution for runner classes declared in a custom namespace. The generated runner program now resolves the namespace from the runner file and adds the correct `using` before registering and invoking the runner type. Added regression tests for file-scoped and block-scoped namespaces.

## [1.4.24] - 2026-06-25

### Fixed

- **Debugger — Jump to Line CodeLens Only Shows When Paused**: Fixed the "Jump to Line" CodeLens appearing whenever a debug session was active, even if the debugger was still running. The provider now checks the current debug stack state and only shows the lens when execution is actually stopped at a breakpoint or paused frame.

## [1.4.23] - 2026-06-23

### Fixed

- **LSP Hover — Comments No Longer Inherit Next Symbol Hover**: Fixed a regression where hovering over `//`, `/* */`, or documentation comment lines in `.cs` files could display the hover tooltip for the next non-comment token instead of doing nothing. The Roslyn hover fallback now detects comment trivia and skips symbol resolution on comment positions.

## [1.4.22] - 2026-06-22

### Fixed

- **Go to Implementation — Fallback to Definition for Concrete Methods**: Fixed "No implementation found" when invoking "Go to Implementation" (right-click context menu) on a regular (non-virtual, non-abstract) method call. The LSP server does not implement `textDocument/implementation` for concrete methods, so VS Code's built-in command returned empty results. A middleware now detects this case and falls back to the definition provider, so "Go to Implementation" navigates to the method declaration just like "Go to Definition" does. Virtual and interface methods that return actual implementations from the server are unaffected.

## [1.4.21] - 2026-06-19

### Fixed

- **Run Startup Project — "Illegal argument: source" Error**: Fixed a regression introduced in 1.4.20 where running a startup project without debugger (green "Run" button or Ctrl+F5) failed with `Illegal argument: source must be a string of length > 0`. The `source` parameter of the VS Code Task was accidentally set to an empty string during tooltip simplification; restored it to `'C#'`.

## [1.4.20] - 2026-06-16

### Added

Formating .razor files is now supported by the extension's built-in formatter, providing consistent code styling for Blazor components without requiring external formatters or manual configuration. The formatter handles indentation, spacing, and line breaks according to common C# conventions, ensuring that both the HTML markup and embedded C# code in .razor files are neatly formatted with a single command.

## [1.4.19] - 2026-06-11

### Fixed

- **Quick Add JSON — Singular Item Types for Object Arrays**: Quick Add now generates singular item types for JSON arrays of objects, so a property like `budgets` becomes `List<Budget>` instead of `List<Budgets>`.
  - Applies to nested JSON objects created from Quick Add input
  - Added a regression test using an anonymized JSON example with `budgets`, `budget_alerting`, and `effective_budget`

## [1.4.18] - 2026-06-10

### Fixed

- **LSP Quick Fixes — Auto Save After Analyzer Edits**: Quick fixes coming from the Roslyn language server now save the affected files after applying workspace edits, so analyzer fixes do not remain in a modified state.

### Adjusted

Icon for Solution fix in scope.. option is aligned with Icon from Solution explorer

## [1.4.17] - 2026-06-10

## Fixed

Nuget package manager web view now debouces  refreshes after installing / consilidating packages to prevent multiple rapid refreshes when performing batch operations, improving performance and responsiveness of the UI during bulk package management tasks. This ensures a single refresh occurs after a series of rapid install/uninstall actions, keeping the package list up-to-date without unnecessary intermediate refreshes.

## [1.4.16] - 2026-06-09

## Fixed

Invalid solution path provided fixes and additional logs for troubleshooting.

## [1.4.15] - 2026-06-06

### Added

- **Code Analysis — Workspace Scope Selection**: The analysis webview now exposes a scope selector for workspace analysis, letting you switch between the full workspace, each loaded solution, and individual projects without rerunning analysis.

### Fixed

- **Code Analysis — Solution Scope Default Selection**: Solution analysis now defaults to the solution scope instead of showing an empty selection in the scope dropdown.
- **Code Analysis — Scope Labels**: Removed path text from the scope dropdown entries so the selector shows clean Workspace / Solution / Project names only.

## [1.4.14] - 2026-06-03

Detect referenced .dll changes and rebuild the project when running/debugging to ensure metadata sources are up-to-date.

## [1.4.13] - 2026-06-03

Auto detect reloading referenced .dll and restart language server to update metadata sources when a referenced project is built and emits a new .dll, ensuring "Go to Definition" and metadata navigation work correctly without manual workspace reloads after building referenced projects with DLL references. This applies to both direct DLL references and project references that produce DLLs, providing seamless navigation to updated metadata sources in all scenarios.

## [1.4.12] - 2026-06-02

Improved "Go to Definition"
Added support for navigating to source files when a project references another project via a direct DLL reference (<HintPath>SampleLibrary.dll</HintPath>) instead of a <ProjectReference>, while both projects are loaded in the workspace

## [1.4.11] - 2026-06-01

Use unique task definition per project so VS Code doesn't kill previous project's terminal when starting a new one. This allows multiple runner projects to be active simultaneously without interfering with each other's terminals.

## [1.4.10] - 2026-06-01

### Fixed

Decompiled sources now open as read-only to prevent accidental edits that can't be saved, with a clear "Read-Only" badge in the editor title and hover tooltip. This applies to all metadata sources, including external NuGet types and internal project types without source access.

## [1.4.9] - 2026-05-30

### Fixed

- **Runner Project Not Loaded by Language Server on Solution Open**: Fixed an issue where opening a solution that already contained a runner project would load only the solution's projects in the C# language server, leaving the runner project without IntelliSense, navigation, and diagnostics until a new runner was created or the workspace was manually reloaded. Runner projects are now lazily loaded into LSP only when a file from the runner directory is opened, avoiding unnecessary workspace reloads on startup

## [1.4.8] - 2026-05-30

### Fixed

- **Create Runner — Azure Functions Compatibility**: Fixed an exception that occurred when running an auto-generated runner for an Azure Functions project with `AutoRegisterConcreteTypes` enabled, where services that only support asynchronous disposal (such as `FunctionsTelemetryModule`) caused the runner to fail during startup

## [1.4.7] - 2026-05-30

### Fixed

- **Create Runner — Missing Runner Name Field**: Fixed an issue where the runner class name input field was missing when creating a runner for a project that doesn't have an existing runner setup, causing the "Runner class name is required" error

## [1.4.6] - 2026-05-29

### Added

- **Recent Items in Add New Item Dialog**: The "Add New Item" webview now displays frequently used file templates as convenient tiles at the top
  - Shows your 10 most recently used templates for quick access
  - Recent items section automatically hides when browsing specific template categories
  - Recent items are persisted across VS Code sessions

## [1.4.5] - 2026-05-29

### Added

- **Azure Application Insights Explorer Integration**: Added "Application Insights" option to the Tools → Azure section
  - Automatically installs and opens the Azure Application Insights Explorer extension when clicked
  - Provides quick access to browse Azure Application Insights and Log Analytics data directly from VS Code
  - Complements the existing Service Bus Studio integration for comprehensive Azure tooling

## [1.4.4] - 2026-05-27

### Fixed

- **LSP — `.editorconfig` Diagnostic Severity Honored**: The language server now registers `.editorconfig` files as Roslyn `AnalyzerConfigDocument`s on every project, so entries like `dotnet_diagnostic.CS0649.severity = none|warning|error|suggestion` are correctly applied to both compiler diagnostics (CSxxxx) and analyzer diagnostics (IDExxxx, CAxxxx, etc.). Previously these settings were ignored because MSBuildWorkspace did not reliably populate them.
  - Walks up from each project directory collecting `.editorconfig` files until `root = true`
  - Live updates: creating, editing, or deleting a `.editorconfig` file refreshes severities without an LSP restart
- **Analyze Project / Analyze Solution — Skip Generated Files**: Bulk analysis no longer reports diagnostics in compiler-generated source files (`*.g.cs`, `*.sg.cs`, including Razor's `*.razor.g.cs` and `*.cshtml.g.cs`) or any files under an `obj/` directory. This matches the behavior of live editor diagnostics.
- **Analyze Project / Analyze Solution — Missing Compilation-Wide Warnings**: Bulk analysis now reports compilation-wide compiler diagnostics that the previous per-document path missed, including `CS0649` (field never assigned), `CS0169` (field never used), and similar findings. The handler now performs a single `Compilation.GetDiagnostics()` pass per project (plus an analyzer pass when enabled), which is also significantly faster than the previous per-document approach.

## [1.4.3] - 2026-05-26

### Changed

- **Diagrams — Workspace Storage**: Workspace diagrams are now saved in `.vscodecsdt/Diagrams` folder within the workspace instead of a global directory
  - New diagrams created via "Create Workspace Diagram" will be stored in `.vscodecsdt/Diagrams` at the workspace root
  - Existing diagrams from the previous global location (`~/.vscode-csharp-dev-tools/diagrams/workspace/`) remain accessible and are automatically merged into the diagram list
  - This ensures diagrams are version-controlled and shared across team members when the workspace is committed to source control
  - Backward compatibility: old diagrams will continue to display alongside new ones, preventing data loss for users with existing diagrams

## [1.4.2] - 2026-05-24

### Fixed

- **Debugger — Platform Target Path Resolution**: Fixed incorrect program path generation when debugging projects with `<PlatformTarget>x64</PlatformTarget>` set ([#160](https://github.com/jakubkozera/vsc-csharp-dev-tools/issues/160))
  - Previously, the debugger would incorrectly add `/x64/` folder to the output path when only `<PlatformTarget>` was set, even though `dotnet build` doesn't create that folder structure for `PlatformTarget` alone
  - This caused WPF and WinForms applications to fail silently on launch when debugging via F5
  - The extension now correctly differentiates between `<Platform>` (affects output directory) and `<PlatformTarget>` (compiler flag only, does NOT affect output directory)
  - `<Platform>x64</Platform>` → correctly produces `bin\x64\Debug\...` path
  - `<PlatformTarget>x64</PlatformTarget>` alone → correctly produces `bin\Debug\...` path (no platform folder)
  - `<AppendPlatformToOutputPath>false</AppendPlatformToOutputPath>` → correctly suppresses platform folder

## [1.4.1] - 2026-05-21

### Added

- **Solution Explorer — IDE Files Exclusion**: Solution Explorer now automatically hides IDE-generated files in .NET projects
  - Automatically detects .NET projects (by presence of `.sln`, `.slnx`, or `.csproj` files)
  - Hides Visual Studio user files (`*.csproj.user`, `*.user`, `*.suo`)
  - Hides Visual Studio directory (`.vs/`)
  - Hides JetBrains Rider directory and settings (`.idea/`, `*.DotSettings.user`)
  - Works similarly to Unity `.meta` file exclusion — automatically enabled when .NET project is detected
  - Can be overridden via `files.exclude` settings if custom behavior is needed

## [1.4.0] - 2026-05-20

### Added

- **Solution Explorer — File Exclusion Support**: Solution Explorer now respects VS Code's `files.exclude` settings from both workspace and user (global) configurations
  - Files matching exclusion patterns are automatically hidden from the Solution Explorer tree view
  - Supports glob patterns like `**/*.ext`, `folder/`, `**/folder/**`, and more
  - Workspace settings override user settings, allowing fine-grained control per project

- **Solution Explorer — Unity Project Support**: Enhanced support for Unity projects with automatic .meta file handling
  - Unity projects are automatically detected (by presence of `Assets/`, `ProjectSettings/`, or Unity references in .csproj files)
  - All `*.meta` files are automatically hidden from Solution Explorer in Unity projects
  - When moving or renaming files in Unity projects, associated `.meta` files are automatically moved/renamed with them
  - Ensures Unity's asset metadata stays in sync with file operations

## [1.3.11] - 2026-05-19

### Added

- **Code Lens — Type Initializations**: New code lens showing 'X initializations' above class, struct, and interface declarations, indicating where a type is instantiated (e.g., `new MyType(...)`, `MyType x = ...`)
- **Code Lens — Member Assignments**: New code lens showing 'X assignments' above public properties and fields, indicating where they are being assigned values
- Both new code lenses can be toggled on/off individually in Settings → Editor → Code Lens section

## [1.3.10] - 2026-05-15

### Fixed

- **Language Server — Real-time Detection of External File Changes**: Fixed the extension not detecting file changes made by AI agents (e.g., Cursor IDE) in real-time
  - Previously, when AI agents modified C# files, the extension would show stale diagnostics and incorrect code coloring until the files were manually edited
  - The extension now actively monitors C# file changes and immediately refreshes diagnostics and code analysis for open files
  - Newly created C# files are also detected and trigger workspace reload to ensure proper IntelliSense support
  - Automatically excludes build output (`bin/`, `obj/`), package cache (`packages/`), and IDE folders (`.vs/`, `.vscode/`, `node_modules/`) to avoid unnecessary refreshes

## [1.3.9] - 2026-05-10

### Added

- **Code Analysis — Initialize with `= default!` Quick Fix**: Added new quick fix for CS8618 (non-nullable property must contain a non-null value when exiting constructor)
  - Places the cursor on a non-nullable auto-property and a new **"Initialize with '= default!'"** quick fix appears alongside "Declare as nullable" and "Make property 'required'"
  - Transforms `public string Name { get; set; }` → `public string Name { get; set; } = default!;`
  - Suppresses the nullable warning without changing the property type or requiring a constructor

### Fixed

- **Code Analysis — Fix in Scope (Project/Solution) Not Applying Fixes**: Fixed a critical bug where "Fix in ... → Project/Solution" would appear to succeed but not actually apply changes in the currently open file or other files
  - Root cause: the iterative fix loop re-used document references from the original solution snapshot; code fixes that call `document.Project.Solution()` internally (e.g. Roslynator's `UnusedParameterCodeFixProvider` which uses `Renamer.RenameSymbolAsync`) created a new solution based on the old snapshot, discarding all previously applied fixes
  - Fix: each document is now re-resolved from the **current** solution before applying its fixes, so every iteration builds on the previous one correctly
  - Also fixed a secondary bug where `ExtractTextEditsAsync` was called even for documents where no fix was applied, producing spurious reversal edits

- **Code Analysis — Stale Diagnostics After Fix in Scope**: After applying a "Fix in Scope" across a project or solution, diagnostic squiggles in open editors are now cleared immediately
  - Previously, squiggles remained visible until the file was manually edited or reopened, because the LSP server was not notified about the changes applied via `WorkspaceEdit`
  - Fix: after edits are applied and files saved, the extension sends `textDocument/didChange` with the full updated content for each affected file still open in the editor, triggering server-side re-analysis and diagnostic republishing


## [1.3.8] - 2026-05-09

### Fixed

- **Code Analysis — Duplicate Diagnostics in Problems Panel**: Fixed diagnostics being duplicated when opening a file that was previously analyzed via "Analyze Project" or "Analyze Solution"
  - When running project/solution analysis, diagnostics are shown in the Problems panel for all files across the scope. Opening any of those files caused the LSP to provide its own live diagnostics, resulting in duplicated entries (one from the analyzer scan, one from the LSP)
  - Analyzer diagnostics for a file are now automatically cleared when that file is opened, letting the LSP's live diagnostics take over without duplication

## [1.3.7] - 2026-05-07

### Fixed

- **NuGet Package Manager — Details Panel Shows Wrong Version**: Fixed the package details panel showing the latest available version instead of the currently installed version
  - When selecting an installed package from the Installed tab, the version dropdown and version badge now correctly default to the installed version (e.g., `1.17.1`) instead of the latest available version (e.g., `1.21.0`)
  - Browse tab results continue to default to the latest version as expected
  - Users can still select any available version from the dropdown to update

## [1.3.6] - 2026-05-07

### Fixed

LSP loading workspace twice issue resolved

## [1.3.5] - 2026-05-06

### Added

- **Debugging — My Call Stack View**: Added custom filtered call stack view showing only your code
  - New "My Call Stack" panel in the Debug container shows stack frames filtered to your workspace code only
  - Supports multi-root workspaces — filters frames from any workspace folder
  - Automatically filters out external code, framework internals, and .NET TP Worker threads with no user frames
  - Clicking a frame navigates to the corresponding file and line in your code
  - Auto-refreshes on breakpoint hits, stepping, and stack frame changes

## [1.3.4] - 2026-05-05

### Fixed

- **User Secrets — Directory.Build.props UserSecretsId Support**: Fixed User Secrets ignoring existing `UserSecretsId` defined in `Directory.Build.props`
  - When opening User Secrets from the Solution Explorer context menu, the extension now checks for `UserSecretsId` in `Directory.Build.props` hierarchy before creating a new one
  - If a `UserSecretsId` is found in `Directory.Build.props`, that ID is used and no new `UserSecretsId` is added to the project file
  - Matches Visual Studio behavior for User Secrets management in projects using centralized MSBuild properties
  - Properly handles nested `Directory.Build.props` files, with closer files taking precedence

## [1.3.3] - 2026-05-05

### Added

- **Debugging — Add to Watch from Inline Hints**: Added "Add to watch" button in inline debug value tooltips
  - New "Add to watch" action appears next to the existing "Copy value" button in debug hints
  - Clicking the button adds the variable to the Watch panel for continuous monitoring
  - Provides quick access to watch expressions without manually typing variable names

- **Debugging — Evaluate in Debug Console from Inline Hints**: Added "Evaluate" button in inline debug value tooltips
  - New "Evaluate" action executes the selected variable in the Debug Console (REPL)
  - Allows quick evaluation of expressions without typing in the Debug Console

## [1.3.2] - 2026-05-05

### Fixed

- **Debugging — Debugger Not Available After LSP Download Failure (issue #144)**: Fixed debugger failing to start when LSP download or initialization failed
  - `DebugAdapterController.activate()` was inside the LSP try-catch block, preventing debugger registration if any LSP component failed to load
  - Debugger activation is now independent of LSP, ensuring debugging works even if language server features are unavailable
  - Added diagnostic logging when debugger binary is missing at the time of debug session creation

- **Debugging — Permission Denied on GitHub Codespaces (issue #144 follow-up)**: Fixed "Permission denied" errors when running debugger on GitHub Codespaces and containerized environments
  - Debugger binaries now get executable permissions (`chmod +x`) automatically applied on every startup on Linux/macOS
  - All binaries in the debugger directory are fixed (not just the main binary), covering vsdbg's dozens of native helpers
  - Permissions are also set during initial installation, with a fallback to per-file chmod if bulk operation fails

## [1.3.1] - 2026-05-05

### Fixed

- **Solution Explorer — Rename Type Definition Not Updated (issue #139)**: Fixed file rename not updating the type definition in the renamed file itself
  - When renaming a C# file (e.g., `ITusMiddlewareService.cs` → `ITTusMiddlewareService.cs`), all references in other files were updated correctly but the type declaration (`public interface ITusMiddlewareService`) in the renamed file was left unchanged
  - Root cause: after the physical file rename, VS Code's document tracking hadn't processed the rename event before the workspace edit was applied, causing the edit for the renamed file to silently fail
  - Fix ensures the renamed file's document is explicitly opened and tracked before applying edits, and the type declaration is always included regardless of whether the reference provider returns it

## [1.3.0] - 2026-05-04

### Added

- **Azure Tools Integration**: Added Azure Service Bus Explorer integration to the Tools tree
  - New "Azure" section in the Tools tree with "Service Bus Studio" entry
  - Clicking "Service Bus Studio" installs and opens the Azure Service Bus Explorer extension
  - Automatic detection of Azure Service Bus packages (`Azure.Messaging.ServiceBus`, `Microsoft.Azure.ServiceBus`, `WindowsAzure.ServiceBus`) in projects
  - Smart notification system suggests installing Azure Service Bus Explorer when Service Bus packages are detected in the solution
  - "Don't Show Again" option to dismiss notifications per solution

## [1.2.14] - 2026-05-02

### Fixed

- **Test Explorer — Multi-Language Support (issue #134)**: Fixed test results not being reported correctly for users with non-English Windows/Linux systems
  - Test output parser now recognizes localized test outcomes in German, French, Spanish, Italian, Portuguese, Russian, Chinese, and Japanese
  - German users will now see test results properly parsed when .NET test runner outputs "Bestanden" (Passed), "Fehler" (Failed), "Übersprungen" (Skipped), etc.
  - Error messages and stack traces are now correctly captured regardless of system language
  - Previously, only English test output was recognized, causing tests to appear as skipped or not executed on non-English systems

## [1.2.13] - 2026-05-01

### Fixed

- **Debugging — Cross-Platform Program Path (issue #146)**: Fixed debug sessions failing on Linux/macOS with "exe file not found" error
  - Web apps and console apps now always use the `.dll` path in the debug launch configuration, which works cross-platform via the `coreclr` debug adapter
  - Desktop apps (WPF/WinForms) continue to use the `.exe` path since they are Windows-only
  - Previously, the extension incorrectly calculated a `.exe` path for all executable projects, which does not exist on non-Windows platforms

- **Debugging — Double "Run Last Build" Popup**: Fixed the "Would you like to run the last successful build?" dialog appearing twice when cancelling
  - The popup was shown both inside the build service and again in the debug adapter after the build returned failure
  - Removed the duplicate prompt from the debug adapter; the build service now solely handles the offer flow

## [1.2.12] - 2026-04-29

### Fixed

- **Test Explorer — MTP "Xs Yms" Duration Format (issue #134 follow-up)**: Fixed all-passing test runs being marked as skipped on .NET SDK 10.0.102+ when the assembly summary used a combined seconds-and-milliseconds duration (e.g. `... passed (1s 317ms)`)
  - **Combined Duration Pattern**: The MTP parser now recognizes durations in all forms emitted by the runner: `(123ms)`, `(5s)`, `(1s 317ms)`, `(< 1ms)`. Previously only the first two were matched, so any assembly summary with a runtime over one second was silently ignored
  - **Placeholder Emission**: Without the assembly summary recognized, no `isMtpPlaceholder` result was synthesized and every passing test in the project ended up unmarked → the controller reported them as skipped
  - **Split-Line Glue**: The same combined duration is now also accepted in the line-reassembly logic, so the common Linux chunking pattern (`... passed ` + newline + `(1s 317ms)`) is handled
  - **Failed-Test Duration**: Per-test failure lines accept the same `Xs Yms` form and report the correct millisecond duration in the test result
  - **Regression Tests**: Added four parser tests covering the combined `Xs Yms` format on a single line, on two split lines, and the wrapped `Running tests from <dll> (net10.0|x64)` header

## [1.2.11] - 2026-04-29

### Fixed

- **Test Explorer — .NET SDK 10.0.102+ MTP Output Format**: Fixed Test Explorer not marking tests as passed/failed when running at class, namespace, or project level on .NET SDK 10.0.102+ (issue #134)
  - **New Output Format Support**: The Microsoft.Testing.Platform runner shipped with SDK 10.0.102 changed its console output to lowercase verbs with parenthesized durations (e.g. `failed TestName (61ms)` instead of `Failed FullName [61 ms]`) and now only emits per-test lines for failures — passing tests are aggregated into an assembly-level summary line. The parser has been rewritten to handle both the legacy and new formats
  - **Stdout Chunk Reassembly**: Output lines that arrive split across stdout chunks (e.g. `failed TestName` + `(61ms)` on the next line, or `<dll path> (net10.0|x64)` + `failed with 1 error(s) (459ms)`) are now reassembled before parsing, preventing missed and bogus results
  - **Exit Code 2 Handling**: `dotnet test` returns exit code `2` in MTP mode when at least one test fails (per https://aka.ms/testingplatform/exitcodes). The runner now treats this as a normal "tests ran with failures" outcome instead of rejecting the run as a runner error
  - **MTP Placeholder Result**: When the assembly summary is the only signal that passing tests ran, a synthetic `isMtpPlaceholder` result is emitted so the controller's existing matching logic marks every expected child not explicitly failed as passed
  - **Accurate Test Counts**: The Test Run Summary in the TEST RESULTS panel now reflects the real passed / failed counts (e.g. `Total: 10, Passed: 9, Failed: 1`) instead of double-counting the failed test or showing only the 1 failure. Counts are recovered by walking the test tree and matching failed results to their leaves using fully-qualified, suffix, and method-name strategies (MTP often emits just the method name)
  - **Internal Cleanup**: The synthetic placeholder result is no longer streamed to the output channel or the per-test callback, eliminating spurious `__mtp_placeholder__ - passed` lines

## [1.2.10] - 2026-04-28

### Fixed

- **Hover — Clickable Type Links for External Types**: Fixed "in class `TypeName`" links in hover tooltips not navigating to metadata/NuGet types outside the current solution
  - Clicking the containing type link (e.g. `NewtonsoftJsonMvcBuilderExtensions`) now falls back to F12 (Go to Definition) when the type is not found via workspace symbol search, allowing the LSP server to decompile and navigate to the metadata source
  - Links for source-defined types continue to use direct file navigation as before

### Added

- **Hover — Go to Definition Footer for Types**: Hovering over a class, interface, struct, enum, or record now shows a "Go to: `TypeName`" footer link at the bottom of the hover
  - Works identically to the existing "Go to: `Type`" footer on parameters and local variables
  - Clicking the link invokes Go to Definition (F12) at the hovered position, navigating to the type's source or decompiled metadata

## [1.2.9] - 2026-04-27

### Added

- **Solution Renaming**: Added ability to rename solution display names in the Solutions view
  - Right-click on any solution and select "Rename Solution" to customize the display name
  - Custom names are preserved when reopening solutions

### Improved

- **Add to Current Workspace**: Fixed "Add to Current Workspace" command to include all workspace folders
  - When adding a multi-folder workspace, all folders are now added instead of just the first one
  - Properly supports complex workspace configurations with multiple solution directories

- **Context Menu Organization**: Improved context menu structure in the Solutions view
  - Consolidated all solution and group actions into a single unified menu group
  - Cleaner, more streamlined right-click experience with better action organization

## [1.2.8] - 2026-04-26

### Enhanced

- **Runners — Configure CodeLens**: Added "Configure" CodeLens action directly on runner class declarations
  - **Class-Level Action**: "Configure" button appears on the runner class line alongside existing Run/Debug lenses, allowing quick access to runner configuration without navigating the tree
  - **Class Line Number Tracking**: Runner discovery now captures the exact line number of each runner class declaration, enabling precise CodeLens placement

## [1.2.7] - 2026-04-23

### Fixed

- **Debugging Support for Custom MSBuild Output Paths**: Fixed debugging and test execution for projects with custom MSBuild output path properties
  - Properly handles `AppendTargetFrameworkToOutputPath=false` setting
  - Supports custom `OutputPath`, `BaseOutputPath`, and `AssemblyName` properties
  - Correctly resolves `AppendRuntimeIdentifierToOutputPath` and `AppendPlatformToOutputPath` configurations
  - **Full support for MSBuild property inheritance hierarchy:**
    - Properties from `Directory.Build.props` files (searched upward from project directory)
    - Properties from `.csproj` file (can override `Directory.Build.props`)
    - Properties from `Directory.Build.targets` file (highest priority, can override `.csproj`)
  - Works correctly in monorepo scenarios with nested `Directory.Build.props` files

## [1.2.6] - 2026-04-22

### Added

- **GitHub Pull Request Viewer**: Integrated GitHub pull request viewer directly in the extension
  - **PR Repository Navigation**: Browse and manage pull requests from your repositories
  - **Resizable Sidebar**: Draggable resize handle for flexible panel sizing with state persistence
  - **PR Details View**: Display comprehensive PR information with diff preview capabilities

### Improved

- **UI Components Refinement**: Enhanced UI component library for better consistency
  - **DiffSkeleton Loading State**: New loading skeleton component for diff views during data fetch
  - **Split-Button Merge Control**: Refactored merge dropdown into split-button design for improved UX and better state visualization
  - **Component Testing**: Comprehensive test coverage for new UI components

- **Language Server (LSP 1.3.2)**: Fixed LSP build artifacts
  - **Build Process**: Improved LSP binary compilation and packaging for reliable extension deployment
  - **Artifact Integrity**: Ensured proper inclusion of built LSP components in extension package

## [1.2.5] - 2026-04-18

### Improved

- **Blazor Code-Behind Extractor — Directive Handling**:
  - **@inject → [Inject] Properties**: Automatically converts `@inject Type Name` directives into `[Inject] private Type Name { get; set; } = default!;` properties in the generated code-behind file
  - **@implements → Class Inheritance**: Converts `@implements IInterface` directives into interface implementations on the partial class declaration (e.g., `public partial class MyComponent : IAsyncDisposable`)
  - **Multiple Directives**: Supports multiple `@inject` and `@implements` directives in the same component
  - **Directive Removal**: Removes `@inject` and `@implements` directives from the `.razor` file alongside the `@code` block
  - **Expanded Using Detection**: Added detection for `IJSObjectReference`, `IJSInProcessRuntime`, `JSDisconnectedException`, `DotNetObjectReference`, `ComponentBase`, `MarkupString`, `ElementReference`, `NavigationManager`, and `RenderTreeBuilder`
  - **Indentation Normalization**: Code-behind content now strips minimum common indentation and re-indents consistently at 4 spaces
  - **Combined Directive Support**: All directives (`@inject`, `@implements`, `@typeparam`) work together correctly in complex components

## [1.2.4] - 2026-04-18

### Added

- **Add Feed Credential Button**: Added "Add Credential" button to the NuGet Credential Management tab
  - **Feed Source Selector**: Choose from local feeds (from active nuget.config) or global feeds (from user/machine configs) 
  - **Username & Password Fields**: Enter credentials for private NuGet feeds with show/hide password toggle
  - **Windows DPAPI Encryption**: Optional checkbox (Windows only) to store credentials as encrypted in nuget.config using dotnet CLI
  - **VS Code Secure Storage**: Default storage method that works cross-platform and integrates with existing credential management
  - **Automatic Refresh**: Credential list refreshes automatically after successful save
  - **Inline Error Display**: Errors from dotnet CLI or validation are shown directly in the modal without closing it

### Improved

- **Blazor Code-Behind Extractor Enhancements**:
  - **Precise Code Action Trigger**: The "Extract to code-behind" quick fix now only appears when the cursor is on the `@code` line itself, not anywhere inside the code block
  - **Generic Type Parameters Support**: Automatically detects `@typeparam` directives and applies generic type parameters to the generated partial class (e.g., `public partial class MyComponent<TItem>`)
  - **Smart Using Detection**: Automatically adds required `using` statements based on attributes and types used in the code:
    - `using Microsoft.AspNetCore.Components;` for `[Parameter]`, `[Inject]`, `[CascadingParameter]`, `EventCallback`, etc.
    - `using Microsoft.JSInterop;` for `IJSRuntime`, `JSInvokable`
  - **Multiple Generic Parameters**: Correctly handles components with multiple generic type parameters (e.g., `<TKey, TValue>`)
  - **Sorted Imports**: Generated using statements are automatically sorted alphabetically

## [1.2.3] - 2026-04-18

### Added

- **Blazor Code-Behind Extractor**: Added refactoring action to extract `@code` blocks from Blazor components into separate code-behind files
  - **Quick Refactoring**: Available via lightbulb or context menu when working with `.razor` files containing `@code` blocks
  - **Automatic File Generation**: Creates `.razor.cs` file with proper namespace and partial class structure
  - **Smart Namespace Detection**: Automatically detects namespace from `@namespace` directive, `_Imports.razor`, or project structure
  - **File-Scoped Namespace**: Generated code-behind files use modern C# file-scoped namespace syntax
  - **Code Block Removal**: Automatically removes the `@code` block from the original `.razor` file after extraction
  - **Overwrite Protection**: Prompts user for confirmation if a code-behind file already exists

## [1.2.2] - 2026-04-17

### Added

- **NuGet Settings — Local Credentials Display**: The NuGet Settings tab now displays credentials found directly in `nuget.config` files
  - **Info Alert**: When local credentials are detected, an info banner shows which feeds have credentials in the config file
  - **Security Recommendation**: Users are encouraged to migrate sensitive credentials to VS Code's Secure Storage instead of storing them in config files
  - **Credentials Parsing**: New `parseLocalCredentialsFromConfig` method extracts username/password entries from XML structure

- **Settings Webview — State Persistence**: Settings webview now remembers which tab was active when you switch between editor files and return
  - **Active Section Saved**: Uses VS Code's `vscode.getState()`/`vscode.setState()` to persist the selected settings section
  - **Seamless Navigation**: Returning to Settings keeps you on the NuGet/Projects/Editor tab you were using

- **Projects Settings — Inline Browse Button**: The "Default Parent Folder Path" input now has an inline "Browse..." button at the end
  - **Better UX**: Button is outlined and positioned in the same row as the input field for compact layout
  - **Accessibility**: Keyboard-friendly layout without extra vertical spacing

### Improved

- **NuGet Authentication — Feed Skip Tracking**: When users cancel authentication setup for a private feed, that feed URL is tracked for the session
  - **Avoid Repeated Prompts**: Same private feed won't prompt again for authentication in the same operation
  - **Better Workflow**: Reduces interruptions when multiple feeds require authentication

- **NuGet Config Detection — Windows Case-Sensitivity Fix**: Fixed duplicate `nuget.config` file detection on Windows
  - **Normalized Paths**: Config paths are now compared case-insensitively on Windows, case-sensitively on Unix
  - **Fewer Warnings**: Eliminates false duplicate warnings when config files differ only in case

- **NuGet Settings Integration**: Removed local SettingsModal from NuGet Package Manager webview
  - **Centralized Settings**: Settings are now managed exclusively from the main Settings webview (accessible via "Settings" icon in NuGet tab)
  - **Simplified Architecture**: Single source of truth for all NuGet configuration and credentials

### Changed

- **Legacy Settings Webview Removed**: Deleted old vanilla JS settings webview files (`settings.html`, `settings.css`, `settings.js`)
  - **React-Only**: Extension now uses React-based settings webview exclusively for consistency and maintainability
  - **Reduced Bundle Size**: Removes ~6KB of legacy webview code from the extension

### Fixed

- **Settings Tab Visibility**: Settings webview no longer resets to the first tab when hidden and shown again
  - **State Restoration**: Previously active tab is correctly restored on webview reveal

## [1.2.1] - 2026-04-16

### Fixed

- **NuGet Package Manager — Hierarchical Config Resolution**: The NuGet Package Manager now correctly reads package sources (feeds) from all levels of the NuGet config hierarchy
  - Computer-level configs (`%ProgramFiles(x86)%\NuGet\Config\*.Config`) are now recognized
  - User-level configs (`%APPDATA%\NuGet\NuGet.Config` and `%APPDATA%\NuGet\config\*.Config`) are merged with solution-level configs
  - Solution-level configs (walking up from project/solution folder to drive root) are properly discovered
  - Package sources are merged additively across all hierarchy levels, respecting `<clear />` semantics
  - Private feeds defined in solution-level or project-level `nuget.config` files now appear in the feed dropdown
  - This fixes workflows for teams using private feeds without committing credentials to git

## [1.2.0] - 2026-04-14

### Added

- **Razor & Blazor Language Support**: Full IntelliSense for `.razor` and `.cshtml` files powered by the Razor compiler and Roslyn
  - **Autocomplete**: Typing `@` in markup automatically triggers completions — no need for Ctrl+Space. Shows fields, properties, and methods from `@code` blocks and `ComponentBase` with proper priority ordering
  - **Template Context Variables**: `Context="pet"` attributes on component tags (e.g. `<TableTemplate Context="pet">`) are recognized and offered as top-priority completion items inside child content
  - **Smart Filtering**: Type/namespace noise (classes, interfaces, enums, etc.) is filtered out of `@expression` completions — only relevant members, locals, and keywords are shown
  - **Expression Sort Order**: Completions sorted by relevance — parameters first, then private members, protected/ComponentBase members, methods (private → protected → public), and keywords last
  - **Member Access**: `@obj.Property` completions with full type hints, chained access (`@obj.Prop.Sub`), and implicit expression support in HTML attributes
  - **Go to Definition**: Navigate to definitions of symbols in `@code` blocks, `@inject` services, component tags (`<MyComponent>`), child content parameters (`<TableHeader>` → parent's RenderFragment), `@rendermode` values, and Blazor event handlers
  - **Hover Information**: Full documentation tooltips for C# symbols in Razor files including method signatures, XML docs, and type information
  - **Rename**: Rename symbols across Razor files with proper source mapping between original `.razor` and generated C#
  - **Semantic Tokens**: Syntax highlighting for component tags (PascalCase elements colored as types) in both `.razor` and `.cshtml` files
  - **Formatting**: On-type formatting with smart indentation for Razor blocks — handles `@code {}`, `@if/else/for/foreach/while`, `@using`, HTML tag nesting, and mixed C#/HTML contexts
  - **Syntax Grammar**: Comprehensive TextMate grammars for Razor (.razor) and CSHTML (.cshtml) with embedded C# and HTML language support
  - **Emmet Integration**: HTML Emmet abbreviation expansion enabled in `.razor` and `.cshtml` files by default

- **Project/Solution Code Analysis**: New context menu commands to analyze C# projects and solutions for all diagnostics
  - **Analyze Project**: Right-click on any .csproj file in Solution Explorer to analyze all C# files in that project
  - **Analyze Solution**: Right-click on any .sln/.slnx file to analyze all files across all projects in the solution
  - **Comprehensive Results View**: Interactive webview displays detailed analysis summary with errors, warnings, info messages, and hints
  - **Filtering & Navigation**: Filter diagnostics by severity and search text, click on any diagnostic to jump to the exact location in the file
  - **Export Capability**: Export complete analysis results to JSON for documentation or CI/CD integration
  - **Progress Tracking**: Real-time progress indicators show which files are being analyzed with cancellation support

### Improved

- **Completion Type Hints**: New setting `csharp-dev-tools.roslyn.showCompletionTypeHints` (default: on) shows return types and property types inline in the autocomplete list. Can be disabled for performance in large projects

## [1.1.2] - 2026-04-10

### Added

- **NuGet Package Manager — Local Feed Support**: The extension now fully supports NuGet packages from local file system repositories
  - Local feeds (e.g., `C:\LocalPackages` or `/var/local/nuget`) are detected automatically from `NuGet.config`
  - Package metadata (name, version, description, authors) is extracted directly from `.nupkg` files
  - All versions of a package are grouped and displayed correctly, just like with remote feeds
  - Packages from local feeds can be searched, browsed, installed, and updated using the NuGet Package Manager UI
  - Works seamlessly alongside remote feeds (nuget.org, Azure DevOps, etc.)

## [1.1.1] - 2026-04-10

### Improved

- **Advanced Search — Index Cache Size Optimization**: Reduced search index cache file size by ~60-70% through compact serialization format
  - **Property Name Mangling**: All JSON property names shortened to 1-2 character keys (e.g., `name`→`n`, `filePath`→`f`, `startLine`→tuple index)
  - **Redundant Data Elimination**: File paths no longer stored per SearchItem (restored from outer key on load), saving ~10-15% of item data
  - **Comment Content Dropped**: Only TODO comment ranges and flags are cached — non-TODO comments and raw content are re-parsed from source when needed
  - **Compact Value Encoding**: Type kinds and SearchItem types stored as numeric indexes, modifier arrays stored as bitmasks, ranges stored as tuples
  - **Falsy Value Omission**: Default `false` booleans and `undefined` optional fields are omitted from serialized output
  - Cache version bumped to `2.0.0` — old caches are automatically invalidated and rebuilt

- **Index Cache — Stale Cache Cleanup**: Extension now automatically removes stale search index cache files on startup
  - Cache files in `search-index-cache/` that haven't been modified in over 30 days are deleted
  - Prevents unbounded disk usage from workspaces no longer in use

## [1.1.0] - 2026-04-10

### Added

- **Built-in Roslynator Analyzers**: The language server now ships with a full fork of Roslynator integrated directly — no separate Roslynator extension required
  - **184 diagnostic analyzers** (RCS0001–RCS1263) covering redundant code, naming, formatting, simplification, and best-practice patterns
  - **195 code fix providers** — lightbulb actions available for all Roslynator diagnostics directly in the editor
  - **207 refactorings** (RR0001–RR0216) surfaced alongside Roslyn built-in refactorings in the lightbulb menu
  - Roslyn upgraded from 4.7.0 → 5.3.0 with zero breaking changes; Roslynator Apache 2.0 license preserved
  - Full `.editorconfig` integration — per-rule severity can be overridden via `dotnet_diagnostic.RCS1033.severity = none` and similar entries

- **Roslynator Configuration Settings**: New settings under `csharp-dev-tools.roslyn.roslynator*` to control built-in analysis
  - `roslynatorEnabled` — master toggle for all Roslynator features (default: `true`)
  - `roslynatorAnalyzersEnabled` — enable/disable the 184 diagnostic analyzers (default: `true`)
  - `roslynatorCodeFixesEnabled` — enable/disable code fix providers (default: `true`)
  - `roslynatorRefactoringsEnabled` — enable/disable refactorings (default: `true`)

### Improved

- **Fix in Scope — Major Performance Improvement**: "Fix in Scope" (project/solution) quick fixes are now **5–10× faster**
  - **Before**: ~13 s for a project with ~300 documents — each document triggered a separate `CompilationWithAnalyzers` setup with all 100+ analyzers
  - **After**: ~1–3 s — one compilation per project, only analyzers that produce the target diagnostic ID are loaded, Roslyn's internal parallelism does the rest
  - **Compiler diagnostics** (`CS*`) now bypass the analyzer pipeline entirely and use `compilation.GetDiagnostics()` directly
  - **Solution scope** now analyzes all projects in parallel via `Task.WhenAll`
  - Timing information logged to the LSP output channel: `Diagnostic collection took Xms — found N occurrence(s) of <ID> across M file(s)`

## [1.0.16] - 2026-04-08

### Fixed

- **Test Explorer - VSTest mode for .NET 10 projects without MTP config**: Fixed regression where all .NET 10 projects were incorrectly forced into Microsoft.Testing.Platform (MTP) mode, even when no `global.json` with `test.runner` was present. `dotnet test` CLI mode is now determined solely by `global.json` configuration — without it, VSTest (positional argument) is used regardless of SDK version
- **Test Explorer - Debug tests in xUnit v3 projects**: Fixed test debugging not hitting breakpoints in xUnit v3 (`xunit.v3.core`) projects. xUnit v3 projects compile to standalone executables with their own in-process runner; attaching to the VSTest `testhost` process never worked because tests run in a different process. Debugging now uses direct DLL launch (`coreclr` `request: launch`) for all xUnit v3 projects, ensuring breakpoints are hit correctly
- **Test Explorer - xUnit v3 native CLI filter syntax**: Debug sessions for xUnit v3 projects now use the xUnit v3 native CLI filter format (`-method`, `-class`) instead of VSTest-style `FullyQualifiedName=` filters, which are not supported by the xUnit v3 in-process runner

## [1.0.15] - 2026-04-08

### Changed

- **Internal Refactor - LSP Server Extraction**: Moved .NET LSP server, Mono debugger and Notebook host to a separate private repository (`csharp-dev-tools-lsp`). Binaries are now downloaded at runtime from GitHub releases instead of being bundled in the .vsix, reducing extension size significantly
- **Internal Refactor - Debugger Path Resolution**: Fixed `coreclr` and `unity` debug adapter paths to resolve from the downloaded LSP binaries directory (via `DebugAdapterDescriptorFactory`) instead of relying on static `extension/bin/` paths
- **Internal Refactor - Legacy Server Infrastructure Removed**: Removed `ServerStatusBarController`, `ServerStateController`, `ProjectMetadataService` and related dead code. Active project and configuration tracking is now handled exclusively by `StartupProjectManager`
- **Internal Refactor - Dead Code Cleanup**: Removed unused constants, events (`onActiveProjectChanged`, `onActiveConfigurationChanged`, `onActiveFrameworkChanged`, `onProjectLoaded`) and unused static task provider methods

## [1.0.12] - 2026-04-06

### Added
- **Create Runner Code Lens**: Added "Create Runner" Code Lens on public methods in C# files, allowing quick creation of runner methods from your code
- Runner creation dialog with support for creating runner methods in existing runner projects or creating new runner projects
- Visual project selection with icons in the runner creation dialog
- Configuration option to enable/disable Runner Generation Code Lens

## [1.0.11] - 2026-04-05

### Changed

- **Runners (Preview)**: Runners feature is now opt-in via the `csharp-dev-tools.tools.showRunners` setting (default: false)
  - Runners allow running and debugging individual service methods without starting the full application
  - This feature is in preview and disabled by default - enable it in settings to try it out (window reload needed)

## [1.0.10] - 2026-04-04

### Added

- **Runners**: New feature that allows running and debugging individual service methods without starting the full application. Set up a runner project for any .NET project to create lightweight runner classes that mirror the project's dependency injection setup. Runner methods get Run/Debug CodeLens actions directly in the editor, and the Runners section in the Tools tree provides an overview of all configured runners and their methods. Ideal for testing DI-registered services (e.g., in Web API projects) without preparing HTTP payloads or starting the web server

## [1.0.9] - 2026-04-03

### Improved

- **Solution Explorer - Copy/Paste**: When copying a file and pasting it in the same folder, the extension now automatically creates a copy with "copy" added to the filename (e.g., "File.cs" becomes "File copy.cs") instead of showing an overwrite warning, matching Windows Explorer behavior

## [1.0.8] - 2026-04-03

### Improved

- **File Rename**: When renaming a file (F2), the dialog now pre-selects only the filename without the extension for easier editing

## [1.0.7] - 2026-04-03

### Fixed

- **NuGet Package Manager**: Fixed issue where commented-out PackageReference entries in .csproj files were incorrectly displayed in the NuGet Package Manager
  - XML comments (`<!-- -->`) are now properly ignored when parsing project files
  - Applies to both single-line and multi-line commented packages

## [1.0.6] - 2026-04-03

### Fixed

Custom web views in cursor had addiional padding on the sides, which is now gone

## [1.0.5] - 2026-04-03

### Fixed

- **Release Notes - Show-Once Behavior**: Fixed release notes re-appearing after every extension update
  - Release notes are now permanently dismissed once shown, regardless of subsequent version updates
  - Only the latest (highest-priority) release note is auto-shown on activation — older notes are automatically superseded
  - New users installing a later version will only see the most recent release note, not all historical ones
  - Replaced per-version tracking (`triggerId@version`) with version-independent dismissal mechanism

## [1.0.4] - 2026-04-02

### Enhanced

- **Semantic Token Colors**: Enhanced semantic token color settings to include struct type highlighting with a dedicated color style

### Changed

- **Tools**: Minor adjustments to the Tools tree view

## [1.0.3] - 2026-04-02

### Added

- **Platform-Specific VSIX Targets**: Added support for additional platform-specific VSIX targets for ARM architectures (linux-arm64, alpine-arm64, win32-arm64, darwin-arm64)

### Changed

- **Publishing Scripts**: Enhanced publishing scripts for building and packaging platform-specific VSIX files

## [1.0.2] - 2026-04-02

### Changed

- **Build Process**: Updated .NET version support and added build step for Language Server in the prepublish script
- **Vendored Dependencies**: Vendored LanguageServer.Framework and Debugging.MonoLib as regular project files instead of external submodule references

## [1.0.1] - 2026-04-01

### Added

- **Release Notes Viewer**: Implemented Release Notes viewer with Markdown rendering support
  - React-based webview with styled Markdown content and image support
  - Automatic trigger system to show release notes on extension updates based on version conditions
  - History tracking for previously viewed release notes
  - Configurable trigger conditions (version range, VS Code fork type, installed extensions)

- **Colorized Bracket Pairs**: Added colorized bracket pairs configuration for C# language support

- **C# Syntax Highlighting**: Enhanced C# syntax highlighting with new keyword matches and updated settings for Roslyn project files

## [1.0.0] - 2026-03-30

### Added

- **Fully Standalone Extension**: C# Dev Tools is now fully self-contained — no external C# LSP extension dependencies required
  - **Built-in Language Server (LSP)**: Ships its own Roslyn-based Language Server Protocol implementation for IntelliSense, code navigation, and diagnostics
  - **Built-in Debugger**: Ships the same underlying debug adapter as the Microsoft C# extension — no changes to launch configurations required
  - **Open VSIX / Cursor / VSCodium Support**: DotRush or other external C# extensions are no longer required

- **Enhanced Hovers**: Richer hover experience powered by Roslyn with improved type display, generic constraints, enum member values, and clickable type links

- **Inlay Hints**: Added inlay hint support with type resolution for inferred variable types and text edit integration

- **C# Snippet Completion Provider**: New snippet completion provider for enhanced code snippet support with context-aware suggestions

- **Unused Symbol Highlighting**: Customizable highlight styles for unused code symbols with settings integration

- **Code Navigation**: Added command for navigating to containing type via the Language Server

- **Workspace Reload**: Enhanced workspace reload handling with debounce logic for smoother project changes

### Changed

- **Project Creation**: Updated project creation workflow to reload LSP workspace instead of restarting the .NET language server
- **Fix All Service**: Updated FixAllPerActionService to use LSP code actions instead of dotnet format
- **Diagnostic Filtering**: Improved diagnostic filtering in LanguageServerController to suppress noisy diagnostics

## [0.28.8] - 2026-03-21

### Added

New colored icons for Run and Debug status bar buttons

## [0.28.7] - 2026-03-21

### Fixed

- **Problems Panel - Run Build in Terminal**: Fixed build diagnostics not appearing (or appearing garbled) in the Problems panel when the "Run Build in Terminal" setting is enabled
  - Terminal output line-wrapping was corrupting the MSBuild diagnostic format, making paths, line numbers, and error codes unparsable
  - MSBuild now writes clean output to a temporary log file via the `-flp` file logger; the extension reads and parses the file after the build completes
  - Used an MSBuild response file (`.rsp`) to pass the `-flp` parameter, avoiding PowerShell semicolon-splitting issues
  - Removed the `$msCompile` problem matcher from terminal-based tasks to prevent duplicate and garbled entries
- **Problems Panel - Stale Markers**: Build error markers in the Problems panel are now cleared immediately when the affected source file is saved, rather than waiting for the next build

## [0.28.6] - 2026-03-19

### Fixed

- **Run Without Debugger - Multiple Projects**: Fixed issue where running a second project without debugger would stop the first running project. Multiple projects can now run concurrently without affecting each other
  - Each project runs independently in its own process
  - Switching startup projects no longer stops other running projects
  - Applies to all project types (Web APIs, Console apps, Azure Functions, etc.)

## [0.28.5] - 2026-03-18

### Added

- **Azure Functions - CLI Detection**: Added validation to check if Azure Functions Core Tools (func CLI) is installed before attempting to run or debug Azure Functions projects
  - Shows a helpful error message with installation instructions if the func CLI is not found
  - Provides direct link to Microsoft documentation for installing Azure Functions Core Tools

## [0.28.4] - 2026-03-18

### Changed

- **Build Error Handling**: Improved error handling after failed builds to avoid duplicating C# errors already shown by the base C# extension
  - Build errors for `.cs` files are no longer added to the Problems panel (base extension already handles these)
  - Build errors for `.csproj` files continue to be shown in the Problems panel
  - Reduces duplicate error messages and improves Problems panel clarity

## [0.28.3] - 2026-03-17

### Changed

- **Status Bar - Run & Debug Button Colors**: Styled the Run and Debug status bar buttons for better visual distinction using custom theme color tokens
  - **Run button** (`$(play)`) is shown in green (`csharpDevTools.runButtonColor`)
  - **Debug button** (`$(debug)`) is shown in red (`csharpDevTools.debugButtonColor`)
  - Colors are optimized for contrast on both dark (blue) and light status bars
  - New setting **`csharp-dev-tools.debug.colorizeStatusBarButtons`** (default: `true`) — disable to revert to the default VS Code status bar icon color
  - Custom colors can be overridden per-theme via `workbench.colorCustomizations` in `settings.json`

## [0.28.2] - 2026-03-17

### Added

- **Solutions View - Clear Older Than**: New option in the Solutions view "more actions" menu to clear unpinned solutions opened before a specified date
  - Shows date input prompt with MM/dd/YYYY format and validation
  - Preserves pinned solutions regardless of their last opened date
  - Displays count of removed solutions after execution

## [0.28.1] - 2026-03-11

### Fixed

- **C# Notebook - Host Missing from .vsix**: Fixed packaging issue where the built `.vsix` included C# source files (`.cs`, `.csproj`) from the notebook host instead of the compiled `bin/Debug/net8.0/` output
  - Updated `.vscodeignore` to exclude all host source files (`*.cs`, `*.csproj`, `Execution/`, `Protocol/`, `obj/`) and include only the Debug build output
  - Added `dotnet build` step to the `vscode:prepublish` script to ensure the .NET host is compiled before packaging

## [0.28.0] - 2026-03-11

### Added

- **C# Notebook - Markdown Cell Support**: Added full Markdown cell support with live preview, syntax highlighting, and editing
  - Markdown cells can be toggled between edit and preview mode
  - **MarkdownToolbar**: New toolbar with formatting shortcut buttons (bold, italic, code, headings, lists, links, images)
  - **Image support**: Inline images in Markdown cells, with the ability to insert and save images directly into the notebook directory
  - **Image & Link modals**: Dedicated modals for inserting images and links with preview
  - Rendered Markdown is styled to match the VS Code theme

- **C# Notebook - Variables & Diagnostics Panel**: New bottom panel docked below the notebook
  - **Variables tab**: Inspect all active variables from the current session — shows type, value, and for collections: element count and property details
  - **Logs tab**: Live log output from notebook execution
  - **SQL tab**: Captured SQL queries generated during cell execution (via Entity Framework logging)
  - Panel is resizable via drag handle; defaults to collapsed

- **C# Notebook - DataTable Export**: Export cell output tables to **CSV** or **JSON** from a dedicated export button on each data table output

- **C# Notebook - Code Cell Improvements**:
  - Collapse/expand individual code cells with a single click; collapsed cells show a one-line preview
  - **Copy button** on each code cell to copy cell content to clipboard
  - Improved Monaco Editor overflow and scrollbar handling for long code blocks
  - Custom VS Code-themed syntax highlighting for C# in Monaco Editor

- **C# Notebook - Execution Improvements**:
  - Improved cell addition with automatic scroll to the new cell
  - Cancellation of running cells is now more robust and correctly propagates to the .NET host
  - Enhanced stderr listener and notification forwarding from the host process
  - Better error messages and stack trace display on execution failure

- **C# Notebook - Assembly Management**:
  - Improved assembly resolution with DI scope management inside `ScriptStateManager`
  - Multiple assembly loading strategies (TPA, NuGet cache, local paths) for better compatibility with loaded packages

### Changed

- **C# Notebook - C# Completion**: Excluded noise method suggestions from the completion provider to keep IntelliSense results clean and focused on type members

## [0.27.7] - 2026-03-07

### Fixed

- **Debugger Target Framework Detection**: Fixed issue where debugger would use incorrect .NET version when target framework is specified in Directory.Build.props
  - Debugger now correctly reads target framework from Directory.Build.props hierarchy when not explicitly defined in project file
  - Resolves "Could not execute because dotnet-{path}/bin/Debug/net8.0/{project}.dll does not exist" errors for projects using net9.0 or other versions defined in Directory.Build.props
  - Improved consistency with how solution explorer and other features detect target frameworks

## [0.27.6] - 2026-03-04

### Fixed

- **Offer to Run Last Successful Build Setting**: Fixed "Unable to write to User Settings" error when toggling the "Offer to run last successful build" setting
  - **Setting Registration**: Added missing `csharp-dev-tools.debug.offerToRunLastBuild` configuration registration in package.json, resolving the error that occurred when changing this setting from the Settings webview
  - **Desktop App Support**: Enhanced build artifact detection to correctly locate `.exe` files for WPF and WinForms desktop applications, using the same path structure (bin/{Platform}/{Config}/{TF}/{RID}/{name}.exe) as the debug adapter
  - **Fallback Logic**: For non-desktop projects, continues to check for `.dll` artifacts as before

## [0.27.5] - 2026-03-04

### Added

- **Standalone C# File Execution**: Added support for running standalone .cs files using .NET 10's `dotnet run file.cs` feature
  - Run single .cs files directly from the editor or file explorer context menu without needing a project file
  - "Run C# File" command available in right-click context menu for .cs files and in the command palette when a C# file is open
  - Automatically saves unsaved changes before execution
  - Creates an integrated terminal session showing the output
  - Perfect for quick scripts, testing code snippets, or learning C# concepts

## [0.27.4] - 2026-03-02

### Fixed

- **Desktop Application Debugging**: Improved debugging support for WPF and WinForms applications
  - WPF and WinForms apps now launch using the compiled EXE directly instead of through the dotnet CLI, resolving issues where debugger attachment would fail or the application wouldn't start properly
  - Console output for desktop applications is now visible by default in the integrated terminal during debugging, making it easier to see Console.WriteLine statements and debug output
  - Fixed watch mode behavior to properly show console output in terminal for desktop applications

## [0.27.3] - 2026-03-02

### Enhanced

- **Debug & Run Architecture Refactor**: Complete overhaul of project launch system for better separation of debug vs run-without-debug workflows
  - **Run Without Debugger**: Now bypasses debug adapter entirely, executing directly via `StartupProjectManager.runProjectDirectly()` for faster startup and no debug session overhead
  - **ProjectLaunchService**: New singleton service centralizing build and launch logic, shared between debug adapter and direct run workflows
  - **Cleaner Debug Adapter**: Removed ~400 lines of no-debug code paths from `DevToolsDebugAdapter`, now exclusively handles debug mode
  - **Aspire Dashboard Auto-Open**: When running Aspire AppHost without debugger, extension now captures process output, detects dashboard login URL (e.g., `https://localhost:17081/login?t=TOKEN`), and automatically opens it in the browser
  - **Azure Functions External Terminal**: Fixed issue where `func host start` always launched in VS Code's integrated terminal even when external terminal was configured — now respects `console` setting for both debug and run modes



## [0.27.2] - 2026-02-27

### Changed

- **Solution Explorer - Context Menu Simplification**: Improved context menu clarity for project-level actions
  - Simplified menu item names by removing "Manage" prefix: "NuGet Packages", "Project References", and "User Secrets" (previously "Manage NuGet Packages", "Manage Project References", and "Manage User Secrets")
  - Moved the three management commands into their own menu group, separated from "Open in Integrated Terminal" and "Reveal in File Explorer" for better visual organization

## [0.27.1] - 2026-02-27

### Added

- **Solution Explorer - Remove Missing Files**: Added ability to remove missing files from projects and solutions via context menu
  - When a file tracked in a project or solution no longer exists on disk (displayed with orange "X" icon), right-click now shows "Remove from Project" or "Remove from Solution" option
  - **Solution Items**: Removes file references from `.sln` and `.slnx` files' `ProjectSection(SolutionItems)` sections
  - **Project Files**: Removes file references from `.csproj` files (Compile, Content, None, EmbeddedResource elements)
  - Handles both SDK-style projects with implicit includes and legacy projects with explicit file references
  - Automatically cleans up empty `ProjectSection` or `ItemGroup` elements after removal
  - Supports both forward slash and backslash path separators in solution files

## [0.27.0] - 2026-02-26

### Added

- **NuGet - .csproj IntelliSense & Code Intelligence**: New suite of code intelligence features for `.csproj` files
  - **Package Name Completion**: IntelliSense suggestions when typing `<PackageReference Include="` — shows matching NuGet packages with descriptions and latest versions
  - **Package Version Completion**: IntelliSense suggestions when typing `Version="` — lists all available versions for the referenced package, sorted newest first
  - **Version Status Decorators**: Inline indicators next to `PackageReference` elements — ✅ when the package is up to date, 🆕 when a newer version is available. Supports both regular `PackageReference` and Central Package Management (CPM)
  - **Quick Fix Code Actions**: Light-bulb actions on `PackageReference` lines to update the version in-place, with markers for latest and current versions. Works with both standard versioning and CPM

- **NuGet Package Manager - Consolidate & Update Filters**: New filtering capabilities in the Installed tab
  - **Updates Filter**: Filter installed packages to show only those with newer versions available
  - **Consolidate Filter**: Filter packages that have different versions across projects in the solution, making it easy to align versions
  - **Filter Toggle Buttons**: Dedicated UI buttons with active state indicators and package counts


## [0.26.15] - 2026-02-23

### Fixed

- Removed an erroneous alias in package.json. The alias previously collided with the C# language mode and caused incorrect syntax coloring in hover documentation; this change restores correct syntax highlighting in hovers.

## [0.26.14] - 2026-02-14

### Fixed

- **Template Engine - Missing .templateengine Directory**: Fixed issue where template engine directory C:\Users\{username}\.templateengine\dotnetcli does not exist, causing no templates to be available. The extension now automatically populates the template cache by running 'dotnet new list' when the directory is missing.

## [0.26.13] - 2026-02-12

### Added

- **Solution Explorer - XAML File Nesting**: Added support for nesting `.xaml.cs` code-behind files under their parent `.xaml` files in Solution Explorer, similar to existing `.razor` and `.cshtml` file nesting. XAML files (e.g., `MainWindow.xaml` and `MainWindow.xaml.cs`) are now grouped together for better organization and navigation in WPF, MAUI, and Xamarin projects.

## [0.26.12] - 2026-01-31

### Fixed

- **Solution Explorer - Active File Tracking**: Fixed reveal logic for single-solution workspaces to prevent unnecessary tree expansions
  - **Single Solution Optimization**: Modified revealActiveFile method to skip intermediate items when only one solution is loaded
  - **Improved Performance**: Reduced redundant tree operations in single-solution scenarios for faster file navigation

## [0.26.11] - 2026-01-31

### Enhanced

- **Solution Explorer - Active File Tracking Performance**: Optimized reveal process to avoid unnecessary tree expansions during active file tracking
  - **Expansion State Tracking**: Added intelligent tracking of expanded tree nodes using a Set to monitor expanded item IDs
  - **Smart Reveal Logic**: Modified revealActiveFile method to skip already-expanded tree nodes, preventing redundant expansion operations
  - **Event-Driven State Management**: Integrated TreeView expansion/collapse event listeners to maintain accurate expansion state
  - **Performance Improvement**: Reduced unnecessary tree operations when navigating to active files, improving responsiveness
  - **Backward Compatibility**: Maintains existing reveal behavior while optimizing performance for already-expanded paths

## [0.26.10] - 2026-01-31

### Fixed

- **Solution Explorer - Active File Tracking**: Fixed unwanted tree jumping when manually opening files from Solution Explorer
  - **Timing Issue Resolution**: Removed unreliable setTimeout-based flag reset and implemented atomic flag check-and-reset in the event handler
  - **Clean Code**: Removed debug console.log statements that were cluttering the codebase
  - **Improved User Experience**: Files opened from Solution Explorer no longer trigger unwanted tree navigation to the active file

## [0.26.9] - 2026-01-30

### Added

- **Open Solution in New Window Command**: Added missing command registration for opening solutions in new VS Code windows from the Recent Solutions view
  - **Context Menu Integration**: "Open Solution in New Window" option now properly available in Recent Solutions tree view context menu
  - **Inline Button Support**: Quick access button for opening solutions in new windows directly from the tree view
  - **Consistent Command Naming**: Refactored solution command identifiers for better clarity and consistency across the extension
  - **Enhanced User Experience**: Seamless navigation between multiple solution workspaces with proper new window handling

## [0.26.8] - 2026-01-30

### Improved

- **Extract Global Usings**: Enhanced user experience with better path display and selective extraction
  - **Relative Paths**: GlobalUsings.cs path is now displayed as a workspace-relative path in confirmation dialog for better readability
  - **Selective Extraction**: New "Extract Selected" option allows choosing specific using statements to extract via checkbox list
  - **Ambiguity Warning**: Added warning message about potential type ambiguity after extraction to help users prepare for necessary qualifications
  - **Improved Preview**: Enhanced message display logic - shows all statements when 11 or fewer, avoids showing "1 more" for exactly 11 items
  - **Extract All Option**: Original functionality now available as "Extract All" button alongside the new selective option

## [0.26.7] - 2026-01-30

### Added

- **Extract Global Usings**: New refactor feature to extract common using statements across multiple files
  - **Automatic Detection**: Identifies using statements that appear in 2 or more files within a project or folder
  - **Bulk Extraction**: Extracts common usings to GlobalUsings.cs in one operation
  - **Smart Filtering**: Only processes regular using statements (excludes static usings and aliases)
  - **File Cleanup**: Removes extracted usings from source files and eliminates empty lines
  - **Sorted Results**: Both global usings and remaining usings in source files are alphabetically sorted
  - **Preserves Comments**: Maintains header comments and existing content in GlobalUsings.cs
  - **Project-Level Scope**: Works at project or folder level from the Solution Explorer
  - **Visual Feedback**: Shows preview of changes with count of affected files before extraction
  - **Flexible Location**: Respects the configured global usings filename setting

## [0.26.6] - 2026-01-29

### Added

- **Configurable C# File Outline**: New setting to control .cs file outline expansion
  - **Optional Outline**: Added "Expand .cs Files Outline" setting in Solution Explorer > General settings (enabled by default)
  - **User Control**: Users can now disable .cs file outline expansion if they prefer a simpler tree view
  - **Cleaner Display**: Namespace nodes are no longer shown in the outline - types (classes, interfaces, etc.) now appear directly under the .cs file
  - **Improved Navigation**: Outline now shows types at the top level, making it faster to navigate to classes and interfaces
  - **Settings UI Integration**: Setting is available in the extension's settings webview under "Solution Explorer Settings > General"

## [0.26.5] - 2026-01-27

### Added

- **C# File Outline in Solution Explorer**: Enhanced navigation for C# files with expandable file outline
  - **Expandable .cs Files**: C# files (.cs) in Solution Explorer are now expandable to show their structure
  - **Symbol Navigation**: View classes, methods, properties, fields, interfaces, and other symbols directly in the tree
  - **Quick Navigation**: Click on any symbol to instantly navigate to its location in the code
  - **Hierarchical View**: Symbols are displayed in a hierarchical structure matching the code organization
  - **Icon Support**: Each symbol type has its own distinctive icon (class, method, property, field, etc.)
  - **Nested Symbols**: Expand classes to see their methods, properties, and nested types
  - **Document Outline Integration**: Uses VS Code's document symbol provider for accurate symbol information
  - **Automatic Updates**: Outline automatically reflects changes when the file is modified

## [0.26.4] - 2026-01-27

### Added

- **Automatic File-Scoped Namespace Conversion**: Enhanced C# editing experience with automatic namespace syntax conversion
  - **Smart Detection**: Automatically detects when a semicolon is added at the end of a namespace declaration
  - **Instant Conversion**: Converts traditional block-scoped namespaces to modern file-scoped syntax
  - **Brace Removal**: Automatically removes the opening and closing namespace braces
  - **Content Dedentation**: Properly dedents all content that was inside the namespace block
  - **Formatting**: Adds a blank line after the file-scoped namespace declaration for better readability
  - **Works with Complex Files**: Handles files with multiple classes, interfaces, enums, records, using statements, XML documentation, and attributes
  - **Non-Intrusive**: Only activates when you type a semicolon after a namespace declaration, matching Visual Studio 2026 behavior

## [0.26.3] - 2026-01-27

### Fixed

- **Move to Global Usings**: Fixed empty lines being left behind after moving using statements to GlobalUsings.cs file

## [0.26.2] - 2026-01-27

### Added

- **OpenAPI UI Integration for Web API Projects**: Enhanced project creation wizard with OpenAPI UI support
  - **Enable OpenAPI UI Option**: Added new checkbox in project creation wizard for Web API projects, appearing below the "Enable OpenAPI" option
  - **Smart Dependency**: The "Enable OpenAPI UI" checkbox is automatically enabled/disabled based on the "Enable OpenAPI" checkbox state
  - **OpenApiUi Package Integration**: Automatically adds the OpenApiUi NuGet package (version 1.1.0) to newly created Web API projects when the option is enabled
  - **.NET 9+ Support**: For .NET 9 and higher projects, configures OpenAPI UI with the new MapOpenApi() endpoint and custom OpenAPI specification path
  - **Legacy Framework Support**: For .NET 8 and earlier projects, replaces the default Swagger UI with OpenAPI UI for an improved documentation experience
  - **Browser Launch Configuration**: Automatically updates launchSettings.json to launch the browser with OpenAPI UI endpoint instead of Swagger
  - **Seamless Experience**: Creates projects ready to use with modern OpenAPI documentation UI without manual configuration

## [0.26.1] - 2026-01-26

### Added

- **Global Usings File Template**: Added "Global usings" option to the "Add" context menu for creating C# global using directives files
  - **Context Menu Integration**: Available when right-clicking on projects or folders in Solution Explorer under "Add > Global usings"
  - **Configurable Filename**: New setting `csharp-dev-tools.templates.globalUsingsFileName` (default: "GlobalUsings.cs") to customize the global usings filename 
  - **Template Content**: Creates a file with example global using directives for common System namespaces
  - **Settings UI**: Added input field in the Settings webview under Templates > Namespace Generation section
  - **No Prompt Creation**: Automatically creates the file using the configured filename from settings without prompting

- **Imports Razor File Template**: Added "Imports razor" option to the "Add" context menu for creating Blazor _Imports.razor files
  - **Context Menu Integration**: Available when right-clicking on projects or folders in Solution Explorer under "Add > Imports razor"
  - **Blazor Integration**: Creates _Imports.razor file with common Blazor using directives
  - **Template Content**: Pre-populated with standard Blazor namespaces and component imports
  - **No Prompt Creation**: Automatically creates _Imports.razor without prompting for a filename

- **Move Using Statements to GlobalUsings.cs**: Added refactoring feature to move using statements from C# files to a GlobalUsings.cs file with global keyword
  - **Context Menu**: Available in editor context menu when selecting text in C# files as "Move to GlobalUsings.cs"
  - **Code Action (Lightbulb)**: Available via Ctrl+. on any `using` statement line for quick refactoring
  - **Selection Support**: Moves all using statements within the selected text to GlobalUsings.cs
  - **Cursor Support**: When cursor is on a using statement line (without selection), moves that single using statement
  - **Global Keyword**: Automatically prepends `global ` keyword to moved using statements
  - **Smart Placement**: Finds or creates GlobalUsings.cs in the project root directory
  - **Duplicate Prevention**: Checks for existing using statements before adding to GlobalUsings.cs
  - **Automatic Sorting**: Automatically sorts all global using statements alphabetically (case-insensitive) after adding new ones
  - **Header Preservation**: Preserves all comments and license headers above the first global using statement
  - **File Management**: Removes moved using statements from the source file and opens GlobalUsings.cs for review
  - **Project Detection**: Automatically locates the project directory by searching for .csproj files
  - **Respects Settings**: Uses the configured global usings filename from settings

- **Move Directives to _Imports.razor**: Added refactoring feature to move @using and @inject directives from Blazor files to _Imports.razor
  - **Context Menu**: Available in editor context menu when selecting text in Razor files (.razor) as "Move to _Imports.razor"
  - **Code Action (Lightbulb)**: Available via Ctrl+. on any `@using` or `@inject` directive line for quick refactoring
  - **Directive Support**: Handles both @using and @inject directives
  - **Selection Support**: Moves all directives within the selected text to _Imports.razor
  - **Cursor Support**: When cursor is on a directive line (without selection), moves that single directive
  - **Smart Placement**: Finds or creates _Imports.razor in the Blazor project root directory
  - **Duplicate Prevention**: Checks for existing directives before adding to _Imports.razor
  - **Grouped Sorting**: Automatically sorts directives in groups - all @using directives (A-Z) first, then @inject directives (A-Z)
  - **Header Preservation**: Preserves all Razor comments (@* *@) and other content above the first directive
  - **File Management**: Removes moved directives from the source file and opens _Imports.razor for review
  - **Project Detection**: Automatically locates the project directory by searching for .csproj files
  - **Blazor-Specific**: Only works with Razor files (razor and aspnetcorerazor language modes)


## [0.26.0] - 2026-01-26

### Added

- **Quick Add Solution Item**: Added "New Item" command to solution explorer for quickly adding solution-level files
  - **Context Menu Integration**: Available in the "Add" submenu when right-clicking on solution or solution folders
  - **Keyboard Shortcut**: Mapped to Shift+F2 when solution or solution folder is selected (complements existing Shift+F2 for project/folder items)
  - **Quick Pick Dialog**: Intuitive quick pick input with template suggestions:
    - .editorconfig (.NET) - Pre-configured with .NET C# coding conventions
    - .editorconfig (empty) - Basic EditorConfig template
    - Directory.Build.props - MSBuild properties shared across all projects
    - Directory.Packages.props - Central Package Management configuration
    - Markdown file - Standard README.md template
    - Text file - Basic text file
  - **Custom Files**: Can create any custom file by typing the file name instead of selecting a template
  - **Format Support**: Full support for both .sln and .slnx solution file formats
  - **Solution Items Folder**: Automatically creates "Solution Items" folder when adding to solution root
  - **New Setting**: `csharp-dev-tools.solutionExplorer.fileManagement.recreateSolutionPathForNewSolutionFiles`
    - **Default**: false - Files are created in the solution root directory
    - **When true**: Recreates solution folder hierarchy in the file system (e.g., /src solution folder creates src/ directory)
  - **Telemetry**: Tracks template usage, target location (solution root vs folder), and file types created
  - **Comprehensive Tests**: Added full test coverage for SLN and SLNX formats, including nested folders and various settings configurations
- **Add Existing Item**: Added "Add Existing Item" command to solution explorer for adding files to solution folders
  - **Context Menu Integration**: Available when right-clicking on solution folders or solution root in Solution Explorer
  - **Solution Items Folder**: Automatically creates "Solution Items" folder when adding files to solution root
  - **Format Support**: Full support for both .sln and .slnx solution file formats
  - **Multi-File Support**: Allows adding multiple files at once via file picker
  - **Deep Nesting**: Supports adding files to deeply nested solution folders (3+ levels)

### Fixed

- **SLNX Folder IDs**: Fixed SLNX folder ID stability by using normalized folder paths as IDs instead of random GUIDs, ensuring consistent folder references across solution re-parses

## [0.25.11] - 2026-01-25

### Fixed

- **Debug Adapter - Process Detection**: Fixed process detection in debug adapter for dotnet watch scenarios by removing unnecessary EnvironmentUtil.processFileName call and using project name directly in findProcesses.

## [0.25.10] - 2026-01-25

### Added

- **Deployment Wizard - .NET 10 Support**: Added .NET 10.0 as a selectable option in the deployment wizard for generating GitHub Actions and Azure Pipelines YAML files
  - **Version Detection**: Enhanced automatic .NET version detection to recognize net10.0 target framework
  - **Dropdown Option**: Added .NET 10.0 option to the version dropdown in deployment configuration
  - **Multi-Framework Support**: Updated both TargetFramework and TargetFrameworks parsing to detect net10.0

## [0.25.9] - 2026-01-24

### Enhanced

- **Test Coverage and Execution**: Updated variable naming and logic for Microsoft Testing Platform (MTP) mode detection in test coverage and test runner services. Removed redundant MTP mode detection logic from DotnetVersionService for cleaner code organization.

## [0.25.8] - 2026-01-24

### Fixed

- **Dotnet Command Path Handling**: Updated dotnet commands (run, test, watch) to use project filenames instead of full paths to avoid shell path separator issues across different platforms.

## [0.25.7] - 2026-01-24

### Fixed

- **Solution Explorer - Project Path Matching**: Fixed issue where files from projects with names that are prefixes of other project names were incorrectly matched to the wrong project
  - **Path Separator Fix**: Enhanced `findProjectContainingFile`, `findProjectContainingFolder`, `getTreePathForFile`, and `findFolderNodeByPath` methods to use path separators in matching logic
  - **Prefix Prevention**: Projects like "Project.Admin" no longer incorrectly match files from "Project.Admin.Botgram" or "Project.Admin.Core"
  - **Sorting Optimization**: Added project path length sorting (descending) in `getTreePathForFile` to match most specific projects first
  - **Test Coverage**: Added comprehensive test suite covering project name prefix scenarios

## [0.25.6] - 2026-01-24

### Added

- **Nested File Operations**: Enhanced delete and rename operations to handle parent files (.razor, .cshtml) with their nested/dependent files (.cs, .css, .js). Users are shown modal dialogs to choose whether to operate on just the parent file or all related files. For rename operations, the modal appears after entering the new name. 

## [0.25.5] - 2026-01-24

### Added

- **Advanced Search - Recently Opened Items**: New workspace-scoped history tracking feature for Advanced Search (Ctrl+P)
  - Tracks the last 10 opened items per workspace
  - Displays recently opened items under "Recently opened" separator
  - Sorted by most recent access date (descending order)
  - Automatically filters out non-existent files
  - Persisted in workspace state for quick access across sessions

## [0.25.4] - 2026-01-23

### Enhanced

- **Directory.Build.props Parser - Import Element Support**: Enhanced the Directory.Build.props parser to handle `<Import>` elements in .csproj files, enabling proper resolution of MSBuild properties from imported files
  - **Circular Reference Protection**: Added depth limits and visited path tracking to prevent infinite recursion during import resolution
  - **Project File Import Processing**: Extended parser to process imports in .csproj files with proper precedence (imports before local properties, local properties override imports)
  - **Comprehensive Test Coverage**: Added extensive test suite covering various import scenarios including nested imports, missing files, and SDK import skipping

## [0.25.3] - 2026-01-22

### Fixed

- **Open Output on Build Tests**: Fixed failing tests for the Open Output on Build feature by adding missing showOutput() call in runBuildAsTask method

### Added

- **runBuildInTerminal Tests**: Added new tests for runBuildInTerminal configuration reading to ensure proper functionality

## [0.25.2] - 2026-01-21

### Changed

- **File Deletion Behavior**: Changed file deletion operations to permanently delete files instead of moving them to trash/recycle bin for immediate cleanup

## [0.25.1] - 2026-01-21

### Enhanced

- **Solution Folder Deletion - SLNX Support and Improved User Prompts**: Enhanced solution folder deletion functionality with comprehensive .slnx format support and improved user interaction prompts
  - **XML-Based Deletion**: Added proper XML manipulation for .slnx files when deleting solution folders, ensuring correct structure maintenance
  - **Enhanced User Prompts**: Improved confirmation dialogs with clearer descriptions of what will be deleted and potential impacts
  - **Robust Error Handling**: Better error handling for edge cases during folder deletion operations

### Fixed

- **Solution Explorer - README.md Duplication Prevention**: Removed README.md file handling from SolutionViewerProvider to prevent duplicate registration and display issues
  - **Duplicate Prevention**: Eliminated "Element with id...already registered" errors that prevented solutions from loading correctly
  - **Consistent Logic**: Applied same duplicate prevention logic used for .props files to README.md files

## [0.25.0] - 2026-01-21

### Added

- **Solution Explorer - Advanced Drag & Drop with Physical File Movement**: Complete overhaul of project drag and drop functionality with optional physical file relocation
  - **.slnx Format Support**: Fixed project drag and drop for XML-based .slnx solution files (previously non-functional)
  - **Interactive Move Dialog**: New modal dialog with three options when moving projects:
    - **Move in Solution Only**: Updates .sln/.slnx structure without touching filesystem
    - **Move Files & Update References**: Relocates project folder AND updates all affected .csproj references
    - **Cancel**: Abort the operation
  - **Automatic Reference Management**: When moving files physically, extension automatically:
    - Detects all projects with references to/from the moved project
    - Updates relative paths in all affected .csproj files
    - Maintains solution integrity across complex dependency graphs
  - **Smart Path Resolution**: Handles both absolute and relative project references correctly
  - **Robust Error Handling**: Enhanced error handling for file operation failures:
    - Automatically closes open editors in VS Code before moving project files (prevents EPERM errors)
    - Falls back to copy+delete approach when direct rename fails (handles cross-device moves, locked files)
    - Retry mechanism with delays for locked file handles
    - User-friendly error messages with actionable tips

### Fixed

- **Solution Explorer - .slnx Drag & Drop**: Project movement in .slnx files now works correctly (was completely broken)
  - Projects can now be moved between solution folders in .slnx format
  - Projects can be moved to solution root in .slnx format
  - XML structure is properly maintained during all operations
  - **Duplicate Folder Prevention**: Fixed issue where folders with different slash formats (e.g., `/tests/` vs `tests`) were treated as separate folders
    - Folder names are now normalized by removing leading/trailing slashes during comparison
    - Prevents creation of duplicate folders when moving projects
    - Parser updated to normalize all folder paths consistently
- **Solution Explorer - Physical File Movement EPERM Errors**: Fixed "EPERM: operation not permitted, rename" errors when moving project folders
  - Extension now closes all open editors for files in the project directory before attempting move
  - Implements copy+delete fallback when rename operation fails (handles locked files, cross-device moves, busy files)
  - Added retry mechanism with delays to handle temporarily locked file handles
  - Improved error messages guide users when manual intervention is needed


## [0.24.6] - 2026-01-20

### Added

- **Solution Explorer - Missing Solution Items Detection**: Added visual indicators for solution item files that don't exist on disk
  - **File Existence Checking**: Solution items (files defined in `.sln`/`.slnx` ProjectSection(SolutionItems)) are now checked for existence on disk
  - **Visual Indicators**: Missing files display an error icon (❌), "Missing" description, and grayed-out text styling
  - **Consistent UI**: Matches the existing missing project indicator pattern for visual consistency
  - **Context Awareness**: Missing files have a separate context value (`missingFile`) and cannot be opened (no command assigned)
  - **File Decorations**: Created `MissingFileDecorationProvider` to apply grayed-out styling to missing solution items and projects
  - **Backward Compatible**: Project files are not checked (would break for dynamically generated or gitignored files)

## [0.24.5] - 2026-01-20

### Added

- **Build - Optional Output Channel Display**: Added optional automatic display of C# Dev Tools output channel during build operations
  - **New Setting**: `csharp-dev-tools.debug.openOutputOnBuild` (default: false) - When enabled, automatically opens the output channel when building projects
  - **Open Logs Button**: Added "Open logs" button to build progress notifications for manual access to build output
  - **Debug Adapter Integration**: Setting works for both manual build commands and debug adapter build operations
  - **Better Debugging**: Users can now easily monitor build output without manually opening the output panel

## [0.24.4] - 2026-01-20

### Changed

- **Keybindings - Bookmark Shortcuts Unified**: Updated bookmark navigation shortcuts to use macOS-style keybindings across all platforms
  - **Toggle Bookmark**: `shift+alt+down` → `alt+shift+[` (removed conflict with "Copy Line Down")
  - **Previous Bookmark**: `alt+shift+left` → `alt+shift+p`
  - **Next Bookmark**: `alt+shift+right` → `alt+shift+]`
  - **Show Bookmark List**: `shift+alt+up` → `alt+shift+-`
  - **Cross-Platform Consistency**: Unified all platforms to use macOS-style keybindings

## [0.24.3] - 2026-01-20

### Fixed

- **Debug Adapter - Azure Functions Process Detection**: Fixed debugger attachment for Azure Functions which use `dotnet.exe` process instead of `ProjectName.exe`
  - **Multi-Process Search**: Enhanced `waitForDotNetProcess` to search both `dotnet.exe` and project-specific processes
  - **Command Line Parsing**: Added detection of project DLL in command line arguments for Azure Functions scenarios
- **Debug Adapter - Dotnet Watch Process Detection**: Improved process detection for dotnet watch scenarios to prevent attaching to wrong instances
  - **Unique Session ID**: Added unique session identifier to distinguish dotnet watch tasks
  - **Path Escaping Fix**: Changed ShellExecution from string concatenation to command+args form to properly handle paths with spaces
  - **Project Path Filtering**: Enhanced filtering to check project path in command line


## [0.24.2] - 2026-01-20

### Enhanced

- **Debug Adapter - Progress Bar for Build and Launch Operations**: Added visual progress notifications for all debug adapter build and launch operations
  - **Launch Progress**: Progress bar shows during project debugging/running with stages: Saving files → Building → Starting → Ready
  - **Build Progress**: Progress reporting during build operations with clear status messages (No build needed, Build succeeded, Build failed)
  - **Hot Reload Progress**: Progress bar during hot reload operations showing: Stopping debugger → Rebuilding → Restarting → Ready
  - **Better UX**: Users now have clear visual feedback about what's happening during debug sessions and rebuilds

## [0.24.1] - 2026-01-20

### Fixed

- **Solution Explorer - README.md Duplication Fix**: Fixed issue where README.md files were registered twice when explicitly added as Solution Items, preventing solution folders from displaying correctly
  - **Duplicate Prevention**: Extension now checks if README.md is already registered as a solution item before adding it at the solution level
  - **ID Collision Resolution**: Eliminated "Element with id...already registered" errors that prevented solutions from loading correctly
  - **Consistent Logic**: Applied same duplicate prevention logic used for .props files to README.md files


## [0.24.0] - 2026-01-20

### Added

- **Debug - .NET Hot Reload Support**: Added comprehensive hot reload functionality during debugging sessions
  - **Dotnet watch support**: New `csharp-dev-tools.enableWatch` setting to enable/disable hot reload (default: false)
  - **File Watcher Integration**: Automatic detection of file changes during debug sessions
  - **Process Management**: Enhanced debug adapter tracks and manages child/grandchild processes
  - **Launch Configuration Updates**: Updated project launch configs to use 'devtools' debug type with project path
  - **Build Options**: Added 'skipBuild' setting to launch last built version without rebuilding
  - **Build Necessity Checks**: Smart detection of when rebuild is required before launching
  - **Session Management**: Improved termination handling for debug sessions and child processes

## [0.23.5] - 2026-01-16

### Enhanced

- **Recent Solutions - Enhanced Open Solution Command**: Improved `solutions.openSolution` command with QuickPick interface for better solution access
  - **QuickPick Interface**: Command now shows QuickPick instead of immediately opening file browser
  - **Recent Solutions List**: Displays all recently opened solutions sorted by most recent first
  - **Browse Option**: "Open solution file..." as first item opens traditional file browser
  - **Custom Icons**: Uses same custom SVG icons as Solutions view (solution-blank.svg for regular solutions)
  - **Consistent Styling**: Pinned solutions show yellow pin icon, multi-root workspaces show folder-library icon
  - **Time Display**: Shows human-readable "last opened" time (Today, Yesterday, X days ago)
  - **Quick Search**: Filter solutions by name, path, or project count
  - **Open in Current Window**: Default action (Enter) opens solution in current window
  - **Open in New Window**: Button (link-external icon) on hover opens solution in new window - same as Solutions view
  - **Solution Details**: Shows directory path, project count, and last access time for each solution

## [0.23.4] - 2026-01-15

### Fixed

- **Solution Explorer - .props File Duplication**: Fixed issue where .props files (Directory.Build.props, Directory.Packages.props) were registered twice when explicitly added as Solution Items
  - **Duplicate Prevention**: Extension now tracks files already registered as Solution Items to prevent automatic re-registration
  - **Recursive Detection**: Added `getAllSolutionItemFilePaths()` method to scan all solution folders and nested folders for existing files
  - **ID Collision Resolution**: Eliminated "Element with id...already registered" errors that prevented solutions from loading correctly
  - **Solution Loading Fix**: Solutions with .props files in Solution Items now load completely, showing all projects and files

## [0.23.3] - 2026-01-10

### Added

- **Solution Explorer - JavaScript Project (.esproj) npm Scripts Support**: Added npm scripts integration for .esproj projects in Solution Explorer
  - **Scripts Node**: New "Scripts" node appears under .esproj projects showing all npm scripts from package.json
  - **One-Click Execution**: Click on any script to run `npm run <script>` in integrated terminal
  - **Visual Indicators**: Scripts node uses $(code) icon, individual scripts use $(play) icon
  - **Smart Detection**: Automatically parses package.json and displays scripts when available
  - **Clean Context Menu**: Scripts nodes excluded from file system operations (no unnecessary context menu options)

### Enhanced

- **Syntax Highlighting - .esproj Files**: Added XML syntax highlighting for .esproj (JavaScript project) files
  - **Proper Language Association**: .esproj files now recognized as XML for proper syntax coloring
  - **Better Readability**: MSBuild XML elements, attributes, and values are now properly highlighted

## [0.23.2] - 2026-01-09

### Added

- **Solution Explorer - Blazor Component File Nesting**: Added support for nesting .razor files in Solution Explorer, similar to existing .cshtml file nesting. Blazor components (.razor, .razor.cs, .razor.css) are now grouped together for better organization and navigation.

## [0.23.1] - 2026-01-09

### Fixed

- **NuGet Package Manager - Browse Tab Pagination Bug**: Fixed issue where scrolling to load more packages would clear all existing results when no more packages were available
  - **Content Preservation**: Existing package list is now preserved when pagination returns zero results
  - **End of Results Indicator**: Shows "No more packages to load" message when all results have been loaded
  - **Improved Append Logic**: Fixed condition that incorrectly replaced content instead of appending in pagination mode

- **NuGet Package Manager - Search Term Preservation**: Fixed issue where search term was ignored when switching from Installed to Browse tab
  - **Search Priority**: Search term in input field is now always respected when switching to Browse tab
  - **Automatic Search Execution**: Entering search term on Installed tab and switching to Browse now automatically searches for that term
  - **Preload Fallback**: When no search term is present, Browse tab shows preloaded packages as expected

- **NuGet Package Manager - UI Polish**: Improved visual feedback and messaging in Browse tab
  - **Friendlier Empty State**: "No packages found" message now uses neutral styling instead of error colors (red background/border removed)
  - **Search Progress Indicator**: Browse tab package count now shows animated spinner with "Searching packages..." text during search operations
  - **Better Empty State Design**: Search results empty state uses consistent icon and description styling

### Enhanced

- **NuGet Package Manager - Package Prefetch**: Improved background prefetching of NuGet packages when opening the Package Manager
  - **Early Loading**: Package list starts loading immediately when webview opens, before user switches to Browse tab
  - **Better Logging**: Added detailed logging for prefetch progress and status
  - **Seamless Experience**: When switching to Browse tab, packages are either already loaded or show loading indicator

## [0.23.0] - 2026-01-08

### Added

- **.NET Aspire AppHost Support**: Complete integration for .NET Aspire distributed application projects
  - **Automatic Detection**: Projects with `Aspire.AppHost.Sdk` or `Aspire.Hosting.AppHost` package are automatically recognized
  - **Aspire Extension Integration**: Seamless integration with Microsoft's Aspire VS Code extension for debugging
  - **Custom Aspire Icons**: Dedicated icon for Aspire AppHost projects in Solution Explorer and project pickers
  - **Simplified Debugging**: One-click debugging with automatic extension installation if needed
  - **Test Coverage**: Comprehensive test suite for Aspire project detection and configuration

## [0.22.0] - 2026-01-08

### Enhanced

- **Settings Webview - Icon Theme Variants**: Added comprehensive icon theme variant support in the extension settings
  - **Multiple Theme Options**: Support for Tabler Icons, VS Code native icons, Hero Icons (solid and outline), and Phosphor icons
  - **Custom Icon Provider**: Enhanced SVG icon generation with theme-specific color schemes and thickness options
  - **Settings Integration**: Icon theme preferences accessible through the dedicated Settings webview under "Appearance" section
  - **Real-time Theme Switching**: Icon themes update immediately without requiring extension restart


## [0.21.9] - 2026-01-06

### Enhanced

- **Project Creation - Unified Folder Opening Experience**: Refactored post-creation folder opening logic for consistency across all creation scenarios
  - **Common Handling Method**: Introduced `handlePostCreationFolderOpening()` method that centralizes folder opening logic after creating solutions/projects
  - **Three Creation Flows**: Method is now used consistently when creating empty solutions, standalone projects, and new solutions with projects
  - **Respects User Settings**: Honors `onCreateBehaviour` setting (openInCurrentWindow/openInNewWindow/promptSelection) across all flows
  - **Smart Context Awareness**: Only prompts for folder opening when creating new solutions or when no workspace exists; shows simple notification when adding to existing workspace
  - **Automatic File Opening**: Opens Program.cs automatically after project creation when appropriate
  - **Language Server Integration**: Restarts .NET language server automatically after folder opens for better IntelliSense

- **Project Creation - Improved Dependency Handling**: Enhanced build and dependency management during project creation
  - **Automatic Build**: Projects with NuGet dependencies are now automatically built after creation to ensure proper package restore
  - **Extension Host Management**: Smart extension host restart logic for projects with dependencies to refresh Solution Explorer
  - **CPM Integration**: Improved Central Package Management migration workflow for newly created projects

### Fixed

- **Solution File Discovery**: Updated solution file search patterns to include both .sln and .slnx formats while excluding additional directories (bin, obj, node_modules, .git, .vs)
- **Nested Solution Folders**: Improved directory path handling for nested solution folders in project creation to ensure correct physical folder structure
- **Error Messaging**: Enhanced error handling and user feedback during project creation with clearer, more actionable error messages



## [0.21.8] - 2026-01-05

### Fixed

- **Project Creation - Framework Selection for Empty Solutions**: Fixed bug where selected framework in UI was not being passed to backend, causing empty solutions and standalone projects to use wrong SDK version in global.json
  - **Framework Parameter Passing**: Framework dropdown value now correctly sent from webview to backend for all creation types (empty solution, project only, project in solution)
  - **Framework List Ordering**: Fixed framework list being sorted ascending instead of descending, now correctly selects newest framework as default
  - **Improved Validation**: Added validation to prevent global.json creation when framework parameter is empty or undefined

## [0.21.7] - 2026-01-04

### Fixed

- **Solution Manager - Nested Solution Folders (SLN & SLNX)**: Corrected handling of nested solution folders so new folders are inserted under their intended parent instead of at the solution root. Improvements include:
  - **Full path handling for .slnx**: Preserve and use full folder paths when parsing and inserting into XML-based `.slnx` files to ensure proper nesting.
  - **Parent-aware duplicate detection**: Duplicate folder checks now consider the parent context (full path) so siblings with the same name can coexist under different parents.
  - **Robust insertion logic**: Improved recursive search and insertion point resolution for both `.sln` and `.slnx` formats.


## [0.21.6] - 2026-01-04

### Fixed

- **Project Creation - global.json placement**: Ensure `global.json` (when automatically created to satisfy framework/SDK compatibility) is created in the solution root (next to `.sln`/`.slnx`) instead of in project subfolders like `src`. Added unit tests covering both "add project to solution" and "create empty solution" flows. (Files: src/features/projectCreation/newProjectWebView.ts, src/test/newProjectWebViewFramework.test.ts)



## [0.21.5] - 2026-01-04

### Enhanced

- **Performance Improvements**: Major performance optimizations across the extension
  - **Solution Explorer File Path Caching**: Implemented intelligent caching system for file path resolution, significantly speeding up file reveal operations
  - **Optimized Refresh Logic**: Enhanced debounced refresh mechanism to prevent unnecessary tree rebuilds and improve responsiveness
  - **Advanced Search Logging Cleanup**: Removed debug logging from AdvancedSearchProvider methods for cleaner operation

### Added

- **Solution Explorer Collapse All Keybinding**: New keyboard shortcut `Shift+Alt+K` to collapse all expanded folders in Solution Explorer tree view

### Fixed

- **Solution Explorer Tree Item IDs**: Fixed unique ID generation for FolderTreeItem to ensure proper VS Code tree view operations






## [0.21.4] - 2026-01-02

### Fixed

- **Solution Manager - .slnx Folder Creation**: Fixed "Cannot find insertion point" error when adding solution folders to .slnx files
  - **XML-Based Manipulation**: Implemented specific XML handling for .slnx files instead of legacy text parsing
  - **Correct Insertion Logic**: Now properly locates the closing `</Solution>` tag to insert new folder elements
  - **Nested Folder Support**: Added support for creating nested solution folders in .slnx format
  - **Robust Error Handling**: Improved error messages and validation for solution file modifications

## [0.21.3] - 2026-01-02

### Fixed

- **Speedscope Viewer - Build Process**: Fixed Speedscope performance profiler not loading due to missing built assets in extension package
  - **Build Integration**: Added Speedscope build process to extension packaging pipeline
  - **Asset Inclusion**: Speedscope dist folder now properly included in published extension
  - **Cross-Platform Compatibility**: Windows-compatible build commands for Speedscope compilation

## [0.21.2] - 2026-01-02

### Added

- **Framework Compatibility & SDK Management**: Enhanced project creation with automatic framework compatibility checks
  - **DotnetVersionService**: New service for detecting installed .NET SDKs and managing global.json files
  - **Automatic global.json Creation**: Creates global.json files when selected frameworks require specific SDK versions
  - **SDK Version Detection**: Automatically finds the best compatible SDK for target frameworks (e.g., .NET 8.0 projects use 8.x SDKs)
  - **Framework Compatibility Validation**: Ensures projects are created with compatible SDK versions

- **Automatic SLN to SLNX Migration**: Support for modern .NET solution format migration
  - **SDK Version Detection**: Detects when solution directories use .NET 9+ SDKs
  - **Automatic Migration**: Automatically migrates .sln files to .slnx format using `dotnet sln migrate`
  - **Seamless Integration**: Migration happens transparently during project creation without user intervention
  - **Backward Compatibility**: Maintains support for traditional .sln files when using older SDKs

## [0.21.1] - 2026-01-01

### Added

- **TODOs Management**: New "TODOs" section in the Tools view
  - **Centralized Tracking**: Automatically discovers and lists all TODO comments across the solution
  - **Smart Grouping**: Groups TODOs by file for easy navigation
  - **Interactive Navigation**: Click on any TODO item to jump directly to the source code location
  - **Real-time Updates**: Automatically updates as you type or modify files
  - **Support for Multiple Formats**: Detects `TODO:`, `FIXME:`, `HACK:`, `NOTE:`, `UNDONE:` and other common comment patterns

## [0.21.0] - 2025-12-30

### Added

- **Namespace Synchronization**: New "Refactor" context menu in Solution Explorer with "Sync Namespaces" functionality
  - **Context-Aware Namespace Sync**: Right-click on solution, project, folder, or individual C# files to synchronize namespaces with folder structure
  - **Multi-Level Support**: Works across different scopes - sync all C# files in a solution, project, folder, or individual files
  - **Namespace Syntax Support**: Handles both traditional block namespaces (`namespace MyNamespace { ... }`) and file-scoped namespaces (`namespace MyNamespace;`)
  - **Project-Relative Path Calculation**: Calculates expected namespaces based on file paths relative to project root directories
  - **User Feedback**: Shows progress notifications and success/error messages with file counts
  - **Safe Operations**: Only modifies files that need namespace changes, preserves existing code structure
  - **Error Handling**: Comprehensive error handling with detailed error messages for failed operations

## [0.20.2] - 2025-12-30

### Fixed

- **Central Package Management Migration**: Fixed Directory.Packages.props creation at solution level instead of project folders
  - **Correct Working Directory**: Changed central-pkg-converter execution to run from solution directory instead of project directory
  - **Proper File Placement**: Directory.Packages.props now correctly appears at solution root for Central Package Management

## [0.20.1] - 2025-12-30

### Fixed

- **Project Creation Dialog - Single Window Instance**: Fixed issue where clicking "Create Solution" or "Add New Project" multiple times would open duplicate windows
  - **Window Reuse**: Now automatically closes any existing project creation window before opening a new one
  - **Proper Cleanup**: Implemented singleton pattern to ensure only one project creation dialog can be open at a time
  - **Better User Experience**: Prevents confusion and resource waste from multiple overlapping project creation windows

- **Project Creation Dialog - Single Template Selection**: Fixed issue where single template in a category (e.g., Console) couldn't be deselected
  - **Deselection Support**: Users can now deselect even auto-selected single templates by clicking on them again
  - **Consistent Behavior**: All templates now follow the same selection/deselection pattern regardless of category size
  - **Better Flexibility**: Allows users to create empty solutions without selecting a template

### Enhanced

- **Project Creation Dialog - Layout Improvements**: Enhanced UI layout for better space utilization
  - **Full-Width Parent Folder**: Parent folder input now spans the full available width for better path visibility
  - **Compact Header**: Reduced header size (18px font, 12px padding) to provide more space for content
  - **Cleaner Interface**: Smaller description text in header for less visual clutter

- **Project Creation Dialog - VS Code Hover Delay Integration**: Template tooltips now respect VS Code's hover delay setting
  - **Settings Sync**: Reads `editor.hover.delay` value from VS Code settings (default: 300ms)
  - **Consistent Experience**: Hover behavior matches the rest of VS Code's interface
  - **Improved UX**: Prevents accidental tooltip triggers while browsing templates

## [0.20.0] - 2025-12-28

### Added

- **Central Package Management Migration**: New command to migrate .NET solutions to use Central Package Management (CPM)
  - **Solution-Level Command**: Available in Solution Explorer context menu for solution items
  - **Automatic Directory.Build.props Creation**: Creates or updates Directory.Build.props file with centralized package versions
  - **Package Reference Migration**: Converts individual package references to use central version management
  - **Multi-Project Support**: Handles migration across all projects in a solution with proper dependency resolution

## [0.19.8] - 2025-12-27

### Added

- **Recreate Solution Folder Path in Explorer Setting**: New boolean setting to control physical folder creation behavior during project creation
  - **Default Behavior**: `recreateSolutionFolderPathInExplorer` setting defaults to `true` for backward compatibility
  - **Physical Folder Creation**: When enabled, creates physical directories matching solution folder hierarchy during project creation
  - **Fallback Mode**: When disabled, uses solution root directory for solution folders without physical counterparts
  - **Available in Settings**: Toggle available in Solution Explorer Settings webview under "Projects" section

### Fixed

- **Nested Solution Folder Path Resolution**: Fixed incorrect parent folder path calculation for nested solution folders in new project creation
  - **Hierarchical Path Building**: Now properly constructs full hierarchical paths for deeply nested solution folders
  - **Recursive Folder Traversal**: Implemented recursive logic to traverse solution folder hierarchy and build complete paths
  - **Conditional Directory Creation**: Physical directories are created only when the new setting is enabled
  - **Backward Compatibility**: Maintains existing behavior for projects created in solution folders with physical paths

### Enhanced

- **Project Creation Path Logic**: Improved path resolution with comprehensive fallback hierarchy
  - **Smart Path Priority**: Follows hierarchy - solution folder physical path → constructed path → solution directory → configured default → last used → Documents folder
  - **Solution Folder Integration**: Projects created in solution folders are automatically placed in the correct filesystem directory
  - **Existing Solution Support**: When adding projects to existing solutions, path resolution respects solution folder structure

## [0.19.7] - 2025-12-27

### Enhanced

- **Template Cleanup**: Removed obsolete `using System;` statements from all C# file templates (Class, Interface, Enum, Record) as they are no longer required in modern C# development.

## [0.19.6] - 2025-12-26

### Added

- **Solution Explorer Context Menu**: Added "Open Solution" commands for opening .sln files from VS Code file explorer
  - **Open Solution**: Opens solution in current window and loads it in Solution Explorer
  - **Open Solution in new window**: Opens solution in a new VS Code window
  - Works with both .sln and .slnx solution file formats
  - Includes comprehensive telemetry tracking for usage analytics

- **Solution Explorer Multi-Solution Context Menu**: Added solution-specific context menu commands when multiple solutions are loaded
  - **Open Solution**: Opens selected solution in current window from within Solution Explorer
  - **Open Solution in new window**: Opens selected solution in new window from within Solution Explorer
  - Only visible when multiple solutions are displayed in Solution Explorer
  - Provides quick switching between different solutions in multi-solution workspaces

## [0.19.5] - 2025-12-23

### Fixed

- **Test CodeLens on Class Level**: Fixed missing CodeLens buttons for running all tests in a class. Classes now properly display run buttons on their declaration lines by including line numbers in test discovery.

## [0.19.4] - 2025-12-23

### Enhanced

- **Solution Explorer File Context Menu**: Right-clicking on files now displays the "Add" menu, enabling creation of new items (classes, interfaces, etc.) in the file's parent folder instead of failing

## [0.19.3] - 2025-12-22

### Added

- **Project Creation Settings**: New configuration options for customizing project creation workflow
  - **Default Parent Folder Path**: Set a default location for new projects and solutions (configurable via Settings webview)
  - **On Create Behaviour**: Choose how VS Code opens after creating projects - current window, new window, or prompt for choice
  - **Settings Integration**: Both settings accessible through Solution Explorer Settings webview under new "Projects" tab

- **Solution & Explorer Folder**: New command for creating solution folders backed by filesystem directories
  - **Dual Creation**: Creates both a solution folder in .sln file and corresponding directory on disk
  - **Physical Path Tracking**: Solution folders now support optional `physicalPath` property for filesystem-backed folders
  - **Hierarchical Support**: Works at both solution root and nested within other solution folders
  - **Context Menu**: Available alongside standard "Solution Folder" command for flexible folder management

### Enhanced

- **Input Dialog Improvements**: Enhanced all input dialogs across the extension with better titles and focus behavior
  - **Contextual Titles**: All QuickPick dialogs now display descriptive titles indicating the action being performed
    - "Create new class", "Create new enum", "Create new interface", etc. for template items
    - "Create new folder" for filesystem folders
    - "Create new solution folder" for solution organizational folders
  - **Improved Focus Management**: Added `ignoreFocusOut: true` to all input dialogs preventing accidental dismissal when clicking outside
  - **Quick Add Enhancement**: Shift+F2 quick file creation dialog also includes improved focus management
  - **Better User Experience**: Clear context and reduced frustration from accidentally closed dialogs

- **Project Creation Path Resolution**: Improved logic for determining where projects are created
  - **Smart Path Priority**: Follows hierarchy - solution folder physical path → constructed path → solution directory → configured default → last used → Documents folder
  - **Solution Folder Integration**: Projects created in solution folders are automatically placed in the correct filesystem directory
  - **Existing Solution Support**: When adding projects to existing solutions, path resolution respects solution folder structure
  - **New Solution Support**: When creating new solutions with projects, proper directory structure is established automatically

### Fixed

- **Project Creation in Solution Folders**: Fixed issue where projects were created in solution root instead of within selected solution folder
  - **Correct Path Calculation**: Projects are now created in `solutionFolder/projectName/` instead of root when solution folder is selected
  - **Path Consistency**: Fixed WebView logic to properly use `outputPath` which already contains solution folder path for existing solutions
  - **Git Initialization**: Git repositories are now only initialized when creating new solutions, not when adding projects to existing ones



## [0.19.2] - 2025-12-21

### Fixed

- **New Project Window - Sticky Buttons**: Fixed Cancel/Create buttons requiring scrolling to view
  - **Flexbox Layout Optimization**: Added `min-height: 0` to parent containers (`.main-content`, `.templates-panel`, `.form-panel`) to properly constrain flexbox children
  - **Always Visible**: Cancel and Create buttons now remain visible at the bottom of the right panel without scrolling
  - **Better UX**: Users can now access action buttons immediately without needing to scroll through form content

## [0.19.1] - 2025-12-21

### Enhanced

- **NuGet Package Manager - Mobile Responsive Design**: Complete redesign of package details panel for mobile and small screen devices
  - **Mobile Overlay Panel**: Package details panel now slides in from the right on screens <= 900px with smooth animations
  - **Auto-Close After Installation**: Panel automatically closes on small screens after successful package installation for better UX
  - **Transparent Close Button**: Added close button with transparent background, visible only when panel is active
  - **Backdrop Overlay**: Added semi-transparent backdrop for better focus on active panel

### Fixed

- **NuGet Package Manager - Package Installation**: Fixed version selection not being respected during package installation
  - **Version Dropdown Integration**: Fixed `installPackageInProject()` to use `window.versionDropdown` instead of old DOM element lookup
  - **Consistent Version Handling**: Both main install button and project-specific install icons now correctly use selected version from dropdown
  - **Null Version Protection**: Added validation to ensure version is always available before installation attempt

- **NuGet Package Manager - UI Improvements**: Enhanced package display with better space utilization and readability
  - **Compact Layout**: Reduced horizontal padding from 15px to 8px and gap from 12px to 10px for package tiles
  - **Smaller Icons**: Reduced package icons from 30px to 24px and SVG icons from 22px to 18px
  - **Multiline Package Names**: Changed from ellipsis truncation to 2-line wrap for better visibility on small screens
  - **Simplified Version Display**: Removed version icons for cleaner, more compact interface
  - **Vertical Feed Layout**: Feed indicator now appears below author in vertical column layout

## [0.19.0] - 2025-12-19

### Enhanced

- **Project Creation Workflow**: Major improvements to project and solution creation experience
  - **Template Framework Compatibility**: Templates now show compatibility status with selected target framework
    - Compatible templates displayed normally with full interaction
    - Incompatible templates shown as blocked/disabled with clear visual indication
    - Framework parameter validation ensures only supported frameworks are used
    - Automatic template compatibility checking based on Framework parameter choices
  - **Smart Template Filtering**: Extension now analyzes template metadata to determine supported frameworks
    - Prevents errors when trying to create projects with unsupported framework versions
    - Dynamic template list updates when target framework changes
    - Clear separation between available and unavailable templates
  - **Enhanced User Interface**: Improved project creation dialog with better layout and consistency
    - Consistent spacing and padding across all form elements
    - Improved label formatting with proper handling of camelCase and acronyms (e.g., "AAD B2C Instance", "Client ID")
    - Cleaner checkbox layout with labels on left and controls on right
    - Removed hover effects and borders from template options for cleaner appearance
    - Better tooltip visibility for disabled/incompatible templates
  - **Folder Management**: Streamlined folder selection and solution organization
    - Optional solution folder customization with toggle visibility
    - Folder selection now saves only after successful project creation
    - Better workspace integration with "Add to Current Workspace" command
  - **Post-Creation Actions**: Improved workflow after project/solution creation
    - VS Code notification with three options: Open, Open in New Window, Dismiss
    - No automatic folder opening - user has full control over workspace management
    - Webview closes before showing notification for better UX
    - Right-click context menu disabled to prevent UI refresh issues
  - **Solution Explorer Improvements**: Enhanced solution file detection and workspace management
    - Loading states with skeleton loaders during solution file detection
    - Removed .github folder from root level display
    - Removed maximum limit on recent solutions
    - Better handling of multi-folder workspaces

### Fixed

- **Template Parameter Handling**: Fixed issue where templates without framework parameters were incorrectly filtered
- **UI Consistency**: Resolved checkbox and form element alignment issues
- **Template Option Display**: Fixed template options container hiding when no options available

## [0.18.2] - 2025-12-18

### Fixed

- **Test Explorer - MTP Test Result Parsing**: Improved Microsoft.Testing.Platform (MTP) test result capture for .NET 10+ projects
  - **Enhanced Result Detection**: Fixed regex patterns to correctly match MTP output format (`Passed`, `Failed`, `Skipped` with leading spaces)
  - **Accurate Error Message Parsing**: Improved error message and stack trace extraction by locating `Error Message:` and `Stack Trace:` section headers
  - **Duration Support**: Added support for both standard durations (`123 ms`) and fast test notation (`< 1 ms`)
  - **Preserved Formatting**: Error messages and stack traces now maintain their original formatting and indentation for better readability
  - **Reliable Test Status**: Test Explorer now consistently shows correct pass/fail/skip indicators for all tests in MTP mode

## [0.18.1] - 2025-12-15

### Enhanced

- **Flexible Project Creation**: Complete redesign of project/solution creation workflow
  - **Three Creation Scenarios**: Choose between creating empty solution, project only, or project in solution
  - **Smart Validation**: At least one item (solution name OR project name + template) required before creation
  - **Dynamic UI**: Header and help text adapt based on whether creating new solution or adding to existing
  - **Recently Used Templates**: Cleaner interface with category/framework chips removed and remove button visible only on hover
  - **No Workspace Required**: Solution Explorer now visible in empty VS Code window with empty state actions
  - **Browse Folder Always Available**: Folder selection button always accessible regardless of creation scenario
  - **Automatic Workspace Opening**: VS Code opens created solution/project folder automatically after creation

## [0.18.0] - 2025-12-15

### Changed

- **Improved Test Streaming & Multi-Solution Support**: 
  - **Reliable Streaming Results**: Fixed the real-time streaming result handling so streamed test outcomes are consistently captured, merged with final parsing, and delivered to Test Explorer callbacks. This resolves intermittent missing or duplicated results when using streaming output.
  - **Multi-Solution Test Execution**: Strengthened test execution and result aggregation across multi-root workspaces containing multiple .NET solutions. Test discovery, execution, and result mapping now correctly handle multiple solution roots and aggregate results into the Test Explorer.


## [0.17.2] - 2025-12-09

### Fixed

- **Test Execution - Result Capture**: Improved test result capturing and reporting in Test Explorer
  - **Enhanced TRX Parsing**: Fixed test result matching to ensure all test outcomes (passed/failed/skipped) are accurately captured and displayed
  - **Reliable Test Status**: Test Explorer now consistently shows correct test status indicators after test runs

## [0.17.1] - 2025-12-08

### Fixed

- **NuGet Package Manager - Light Theme Visibility**: Fixed selected packages being hard to see on light theme
  - **Background Color Fix**: Changed selected package background from `--vscode-list-activeSelectionBackground` to `--vscode-input-background` for better contrast on light themes
  - **Text Color Adjustment**: Updated text colors for selected packages to use normal editor foreground colors on light theme instead of active selection colors
  - **Consistent Experience**: Both "Installed" and "Browse" sections now have proper visibility for selected packages across all VS Code themes

- **NuGet Package Manager - Responsive Header**: Improved header layout and responsiveness
  - **Adaptive Title Display**: "NuGet Package Manager" title now hides automatically on viewports narrower than 1020px, showing only the icon
  - **Reorganized Layout**: Moved title into controls container for better alignment - filters and buttons on the left, title on the right
  - **Cleaner Interface**: Optimized horizontal space usage for better experience on smaller screens

## [0.17.0] - 2025-12-07

### Added

- **Enhanced Item Template Support**: Completely redesigned "Add New Item" experience
  - **Recent Items**: Quickly access your most frequently used templates from a dedicated "Recent Items" section with tile view
  - **Smart History**: Automatically tracks used templates and allows removing items from history
  - **Improved UI**: Modernized interface with SVG icons, better categorization, and responsive layout
  - **Advanced Parameter Support**: Full support for template parameters including dropdowns for SDK versions (e.g. global.json) and dynamic options
  - **Namespace Intelligence**: Automatic namespace calculation based on folder structure

## [0.16.1] - 2025-12-04

### Enhanced

- **Webview Theming**: Updated all extension webviews to fully respect VS Code themes (light/dark/high contrast) for a consistent visual experience
- **Tool Icons**: Added missing icons for several tools to improve visual identification
  - **HTML Tool**: Added HTML5 icon
  - **URL Tool**: Added link icon
  - **Base64 Tool**: Added binary file icon
  - **Cubic Bezier**: Added cubic bezier curve icon
- **JWT Tool UI**: Fixed layout issues in JWT tool to prevent unnecessary scrollbars and improve responsiveness

### Added

- **URL Decoder Tool**: New dedicated tool for URL encoding and decoding operations

## [0.16.0] - 2025-12-04

### Enhanced

- **NuGet Package Manager - .slnx Solution Support**: Full support for new XML-based solution files in NuGet Package Manager
  - **.slnx File Recognition**: NuGet Package Manager now recognizes .slnx files as solutions alongside traditional .sln files
  - **All Projects View**: Right-clicking on .slnx solutions shows "All Projects" view instead of solution name, matching .sln behavior
  - **Project Switching**: Project dropdown in NuGet Manager now works correctly for .slnx solutions, allowing seamless switching between projects
  - **Unified Solution Parsing**: Integrated with existing SolutionParser for consistent .sln/.slnx handling throughout the extension
  - **Parent Solution Detection**: Enhanced solution detection to find parent .slnx files when managing packages from individual projects
  - **Feature Parity**: Complete functional equivalence between .sln and .slnx files in all NuGet Package Manager operations

## [0.15.0] - 2025-12-02

### Enhanced

- **Directory.Build.props Support**: Added comprehensive support for Directory.Build.props files throughout the extension
  - **NuGet Package Detection**: Automatically detect and display NuGet packages defined in Directory.Build.props hierarchy
  - **Solution Explorer Integration**: View Directory.Build.props packages in project Dependencies node
  - **NuGet Manager WebView**: Full support for managing packages from Directory.Build.props files
  - **Smart Package Removal**: Use PackageReference Remove entries instead of dotnet remove command for Directory.Build.props packages
  - **Unified Logic**: Consistent package management behavior between Solution Explorer and NuGet Manager interfaces
  - **Hierarchy Navigation**: Support for nested Directory.Build.props files with proper inheritance

### Fixed

- **Solution Explorer Dependencies Context Menu**: Fixed "Manage NuGet Packages" and "Manage Project References" commands from Dependencies section that were failing with null reference errors

## [0.14.1] - 2025-11-28

### Fixed

- **Solutions View - Group Membership Preservation**: Fixed bug where opening a solution from a solution group would incorrectly move it back to the root level instead of keeping it within its assigned group
  - **Group ID Preservation**: The `addRecentSolution` method now preserves both `isPinned` status and `groupId` when updating existing solutions
  - **Correct Behavior**: Solutions opened from groups now remain in their respective groups as expected
  - **Data Integrity**: Ensures solution organization is maintained when solutions are accessed from within groups

## [0.14.0] - 2025-11-27

### Enhanced

- **Solutions View - Complete Transformation with Group Management**: Major overhaul of Recent Solutions into comprehensive Solutions management system
  - **Renamed to Solutions View**: Changed from "Recent Solutions" to "Solutions" with updated navigation buttons (Open Solution, Create Solution, Create Group)
  - **Solution Groups**: Create, rename, pin/unpin, and delete solution groups for better organization
  - **Drag & Drop Support**: Move solutions between groups and root level using intuitive drag & drop operations
  - **Hierarchical Organization**: Pinned groups → Pinned solutions → Unpinned groups → Unpinned solutions display order
  - **Group Actions**: Context menus and inline buttons for group management (Open All Solutions in Group, Toggle Pin, Rename, Remove)
  - **Data Preservation**: All existing solutions and pin status preserved during migration to new group system
  - **Visual Consistency**: Updated icons and button ordering to match VS Code patterns

## [i] - 2025-11-25

### Enhanced

- **Icons Tool - Keyboard Navigation**: Improved keyboard navigation in Tabler Icons tool
  - **Auto-Focus Search**: Search input automatically receives focus when Icons tool opens
  - **Ctrl+L Shortcut**: Press Ctrl+L to quickly focus the search input from anywhere in the tool
  - **Arrow Key Navigation**: Use left/right arrow keys to navigate between icon pages (when search input is not focused)
  - **Enhanced User Experience**: Streamlined navigation for browsing through 4964+ Tabler Icons

## [0.13.3] - 2025-11-20

### Enhanced

- **Solution Explorer - Native File Opening Behavior**: Solution Explorer now matches VS Code's native Explorer behavior for opening files
  - **Single-Click Preview**: Single-clicking a file opens it in preview mode (italicized tab name)
  - **Double-Click Pin**: Double-clicking the same file within 500ms pins it (normal tab name)
  - **Consistent Experience**: File opening behavior now identical to VS Code's native Explorer
  - **Command-Based Detection**: Uses `solutionViewer.openFile` command with timestamp tracking for reliable double-click detection
  - **Universal Support**: Works with all file types in Solution Explorer (regular files, appsettings.json variants, Razor pages, and project dependencies)

## [0.13.2] - 2025-11-11

### Added

- **Pull Request Manager - OAuth Authentication Support**: Comprehensive OAuth integration alongside existing Personal Access Token (PAT) authentication
  - **GitHub OAuth Integration**: Native VS Code authentication for GitHub repositories using built-in GitHub provider
  - **Azure DevOps OAuth Integration**: Native VS Code authentication for Azure DevOps using built-in Microsoft provider  
  - **Per-Organization Authentication Choice**: Users can choose between OAuth and PAT authentication methods for each connection
  - **Session Management**: Automatic OAuth session handling with token refresh and session recovery
  - **Migration Support**: Seamless migration from existing PAT connections to OAuth with preserved connection settings
  - **Enhanced Connection Manager UI**: Updated webview with OAuth setup options and authentication method selection
  - **Theme-Aware Connection Icons**: New connection manager icons that adapt to VS Code's light and dark themes

### Enhanced

- **Improved Authentication Flow**: Streamlined authentication experience with better error handling and user feedback
- **Connection Testing**: Enhanced connection validation supporting both PAT and OAuth authentication methods
- **Security**: OAuth tokens are managed by VS Code's secure authentication system, eliminating the need to store tokens manually

## [0.13.1] - 2025-11-11

### Enhanced

- **Recent Solutions with Unique Workspace Support**: Enhanced Recent Solutions to support unique workspace identities preventing workspace contexts from overwriting each other
  - **Workspace Signature Generation**: Uses MD5 hashing of folder paths to create unique workspace signatures for reliable identification
  - **Automatic .code-workspace File Creation**: Creates temporary workspace files for multi-folder configurations when needed

## [0.13.0] - 2025-11-08

### Added

- **Database Tools Section**: New "Database" section in Tools panel for database management tools
  - **MS SQL Manager Integration**: One-click access to MS SQL Manager extension
  - **Auto-Installation**: Automatically installs MS SQL Manager extension if not already present
  - **Quick Access**: Opens Database Explorer view directly from Tools panel
  - **Theme-Aware Icons**: Custom database icons that adapt to VS Code's light and dark themes

## [0.12.6] - 2025-11-06

### Updated
- **macOS Keyboard Shortcuts for Bookmarks**: Updated bookmark navigation keybindings for better macOS compatibility
  - **Toggle Bookmark**: `Alt+Shift+[` (previously `Alt+Shift+Down`)
  - **Next Bookmark**: `Alt+Shift+]` (previously `Alt+Shift+Right`)
  - **Previous Bookmark**: `Alt+Shift+P` (previously `Alt+Shift+Left`)
  - **Bookmarks Lookup**: `Alt+Shift+-` (previously `Alt+Shift+Up`)
  - **Platform-Specific Optimization**: Keybindings now follow macOS conventions while maintaining functionality across all platforms

## [0.12.5] - 2025-10-28

### Added

- **Multi-Solution Workspace Support for Tests and Startup Projects**: Enhanced support for workspaces containing multiple .NET solutions
  - **Comprehensive Test Execution**: All test-related features (test discovery, execution, debugging, and coverage) now work across all solutions in a multi-solution workspace, ensuring seamless testing regardless of solution boundaries.
  - **Unified Startup Project Management**: Startup project selection and execution (Run/Debug) now support projects from any solution within the workspace, with automatic detection and consistent behavior across all solutions.
  - **Solution-Aware Context**: Test and startup project operations respect the context of their respective solutions, maintaining proper project references and configurations.
  - **Enhanced Solution Explorer**: Displays all solutions and their projects cohesively, with clear separation and navigation for tests and startup projects across the workspace.

### Enhanced

- **Improved Test Integration**: Test Explorer now aggregates test results from all solutions in the workspace, providing a unified view of test outcomes across multiple solutions.
- **Streamlined Debugging Workflow**: Debug configurations dynamically adapt to the selected startup project, regardless of which solution it belongs to, for a consistent debugging experience.
- **Performance Optimization**: Optimized test discovery and project loading to handle large multi-solution workspaces efficiently, reducing overhead and improving responsiveness.

## [0.12.4] - 2025-10-22

### Added

- **Auto Import Namespace**: New intelligent namespace import feature
  - **Automatic Import**: Automatically executes "add namespace" quick fixes when there is only one available option
  - **Smart Detection**: Detects missing namespace diagnostics (CS0246, CS0103) and automatically applies using statements
  - **Alphabetical Ordering**: Automatically inserts using statements in correct alphabetical position
  - **Configurable**: Can be enabled/disabled via `csharp-dev-tools.editor.autoImportNamespace` setting (default: enabled)
  - **Seamless Integration**: Works with OmniSharp's existing quick fix system without disrupting workflow

## [0.12.3] - 2025-10-21

### Enhanced

- **Test Debugging - Dual Mode Implementation**: Complete overhaul of test debugging with mode-specific implementations for optimal performance
  - **MTP Launch Configuration**: .NET 10+ projects now use direct DLL launch with `request: 'launch'` - eliminates debugger stopping at entry points
  - **VSTest Attach Configuration**: Legacy projects use process attachment with `request: 'attach'` for proper debugging workflow
  - **TRX File Integration**: Both modes generate and parse TRX files for accurate test result reporting in VS Code Test Explorer
  - **Smart Mode Detection**: Automatic detection of .NET version and test runner mode for seamless debugging experience
  - **Real Test Results**: Debug sessions now return actual test outcomes (passed/failed) instead of boolean success indicators
  - **Enhanced Error Handling**: Comprehensive error handling with proper cleanup and meaningful error messages
  - **Performance Optimized**: Removed redundant process detection and streamlined debug workflows for faster test execution

## [0.12.2] - 2025-10-20

### Fixed

- **Test Debugging - .NET 10+ MTP Support**: Fixed test debugging for Microsoft Testing Platform (MTP) mode in .NET 10+
  - **MTP Process Detection**: Fixed debugger attachment by correctly identifying test processes by project name (e.g., Extra.Test.exe) instead of searching for non-existent testhost processes
  - **Simplified Debug Flow**: Removed dependency on debug output messages that don't appear in MTP mode - extension now waits for process initialization and directly attaches to the test executable
  - **Command Injection Prevention**: Added input sanitization for project names to prevent potential security issues during process detection
  - **Dual Mode Support**: Maintained full compatibility with VSTest mode while adding proper MTP mode support

## [0.12.1] - 2025-10-20

### Enhanced

- **Test Execution - .NET 10+ Microsoft.Testing.Platform Support**: Complete support for the new testing platform in .NET 10+
  - **Dual-Mode Test Execution**: Automatic detection and support for both Microsoft.Testing.Platform (MTP) mode for .NET 10+ and legacy VSTest mode for .NET 9 and earlier
  - **Smart Version Detection**: `DotnetVersionService` automatically detects .NET SDK versions and determines appropriate test runner mode
  - **MTP Output Parsing**: Specialized parser for Microsoft.Testing.Platform output format with comprehensive test result extraction
  - **Global.json Integration**: Support for enabling MTP mode via global.json configuration with user-friendly commands
  - **Backward Compatibility**: Seamless fallback to VSTest mode for older .NET versions ensuring existing workflows continue to work
  - **Enhanced Test Result Matching**: Advanced fuzzy matching algorithms to correlate MTP test results with VS Code test discovery
  - **Command Generation**: Dynamic test command generation using appropriate flags (--project/--solution vs positional arguments) based on detected mode
  - **Debugging Support**: Full debugging capability for both MTP and VSTest modes with proper command adaptation

## [0.12.0] - 2025-01-27

### Added

- **Secret Scanning with TruffleHog Integration**: Comprehensive workspace security scanning to detect exposed secrets
  - **Local Secret Detection**: Automated TruffleHog installation and execution for secure, local-only secret scanning
  - **Interactive Security Reports**: Visual dashboard showing detected secrets with file locations, verification status, and scan statistics
  - **Dual Scan Support**: Scans both current filesystem and git history for comprehensive secret detection
  - **Smart Ignore System**: Mark false positives as ignored with persistent state across scan sessions
  - **Platform Support**: Full support for Windows, macOS, and Linux (x64 and ARM64 architectures)
  - **Security-First Design**: Checksum verification for downloaded binaries, user consent required, and redacted secret display
  - **Tools Panel Integration**: Added "Security" section to Tools panel with one-click secret scanning access


## [0.11.3] - 2025-01-27

### Fixed

- **Solution Explorer - Refresh Performance**: Fixed multiple refresh triggers and empty state issues during project operations
  - **Concurrency Protection**: Added proper concurrency control to prevent simultaneous refresh operations during project add/remove
  - **Atomic Solution Loading**: Implemented atomic updates to prevent temporary empty states in solution tree during refresh
  - **Duplicate File Watcher Prevention**: Enhanced file watcher management to prevent duplicate watchers from causing multiple refresh triggers

## [0.11.2] - 2025-10-15

### Enhanced

- **Advanced Search - Interface Method Detection**: Improved interface method detection in file-scoped namespaces
  - **Enhanced Interface Support**: Interface methods are now properly detected and indexed in Advanced Search
  - **Better Type Handling**: Improved detection of classes, interfaces, structs, and records within file-scoped namespaces
  - **Accurate Scope Tracking**: Fixed brace level tracking for nested types and better method containment detection

- **Test Generation - UI and Logic Improvements**: Enhanced test creation experience with better file handling
  - **Dynamic Page Titles**: Test generation dialog now shows the target method or class name in the page header
  - **Improved File Creation Logic**: Better handling of new vs existing test file creation with enhanced logging
  - **Enhanced UI Styling**: Added visual indicators for method and class information with improved CSS styling

## [0.11.1] - 2025-10-14

### Fixed

- **Run C# Projects View - Icon Consistency**: Fixed icon inconsistency between RUN C# projects view and Solution Explorer
  - **Unified Icon Logic**: RUN C# projects view now uses the same project type detection and icon rendering as Solution Explorer
  - **Folder Color Theme Support**: Icons in RUN C# projects view now properly respect Folder Color Theme settings
  - **Singleton Architecture**: Implemented singleton pattern for SolutionViewerProvider to eliminate code duplication and ensure consistency
  - **Shared Icon Provider**: Both views now use the same IconProvider instance for consistent visual experience

## [0.11.0] - 2025-10-14

### Added

- **Run C# Projects View**: New custom tree view in Run and Debug container for managing .NET startup projects
  - **Dedicated Debug Panel**: "Run C# Projects" view appears in Run and Debug sidebar alongside Performance Monitor
  - **Project Type Icons**: Each project displays with the same themed icons as Solution Explorer (ASP.NET Core, Azure Functions, WPF, WinForms, Console, etc.)
  - **Startup Project Indicator**: Currently selected startup project marked with ⭐ badge and "Startup" description
  - **Inline Action Buttons**: Each project has quick-access buttons:
    - Run without debugging (play icon)
    - Set as startup project (star icon)
  - **Click to Debug**: Click any project name to launch with debugger attached
  - **Smart Launch Behavior**: Launching a project no longer automatically changes the startup project - use dedicated button instead
  - **Auto-Refresh**: View updates automatically when startup project changes

### Enhanced

- **Inline Debug Values - Performance Optimizations**: Significant improvements to debugging performance and reliability
  - **Method Scope Filtering**: Variables are now filtered to only show those actually defined/used in the current method, dramatically reducing processing overhead
  - **Simplified Type Display**: Added intelligent type simplification for common framework types:
    - HTTP types: HttpResponseMessage, HttpRequestMessage, HttpResponse, HttpRequest (shows StatusCode, Method, Path)
    - ASP.NET Core: WebApplicationBuilder (shows Environment)
    - Threading: CancellationToken (shows IsCancellationRequested, CanBeCanceled)
    - Database: DbContext, SqlConnection (shows State, Database)
    - Streams: FileStream, MemoryStream (shows Length, Position, Capacity)
    - And many more framework types with useful property summaries
  - **Smart Variable Filtering**: Automatically excludes compiler-generated variables, 'this', 'base' references, and very long qualified names
  - **Result Caching**: Simplified type results are cached by unique variable reference to avoid redundant debugger calls
  - **Type-Specific Exclusions**: Certain problematic types (e.g., HttpRequestData) are automatically excluded from inline display


## [0.10.8] - 2025-10-12

### Enhanced

- **NuGet Package Manager - Project Selection Dialog**: Improved user experience for package installation
  - **Cancel Button**: Added cancel button to project selection dialog for easier dismissal
  - **Click Outside to Close**: Dialog now closes when clicking on the overlay background
  - **Smart Dependencies Section**: Dependencies section is now hidden when packages have no dependencies, providing a cleaner interface

## [0.10.7] - 2025-10-10

### Added

- **Startup Project Indicator**: Visual indicator for startup project in Solution Explorer
  - **Green 'S' Badge**: Startup project now displays with a green 'S' badge and "Startup Project" tooltip
  - **Bold Font Styling**: Startup project name appears in bold using Unicode mathematical bold characters
  - **Configurable**: Toggle the indicator on/off via `csharp-dev-tools.solutionViewer.highlightStartupProject` setting (default: enabled)
  - **Settings Integration**: Available in Solution Explorer Settings webview under Startup Project section
  - **Real-time Updates**: Badge and bold styling update immediately when startup project changes

## [0.10.6] - 2025-10-10

### Added

- **Themed Folders in Solution Explorer**: Solution Explorer now supports custom themed icons for folders, adapting to both light and dark VS Code themes for improved visual clarity.

- **Configurable Folder Width**: New setting to adjust the width of folder nodes in Solution Explorer.
  - **Flexible Layout**: Users can set folder width to small, normal, medium, or large via the extension settings or Solution Explorer Settings webview.
  - **Immediate Effect**: Changes apply instantly without requiring a reload, supporting both workspace and global scopes.


## [0.10.5] - 2025-10-09

### Added

- **Build Solution Keybinding (Ctrl+Shift+B)**: Override default VS Code build task when a solution is loaded
  - **Smart Context Switching**: Pressing `Ctrl+Shift+B` builds the entire solution when a .NET solution is detected
  - **Integrated Build**: Uses the same build infrastructure as Solution Explorer context menus with NuGet credential injection
  - **Command Palette Access**: "Build Solution" command available in command palette when solution is loaded
  - **Visual Feedback**: Shows progress notifications and "View Logs" button on build failures

## [0.10.4] - 2025-10-09

### Fixed

- **Test Execution - Individual Test Results**: Fixed issue where individual test methods executed successfully but weren't marked as passed/failed in Test Explorer
  - **Method-Level Result Matching**: Added handler for method-level test results with comprehensive matching strategies (exact match, fuzzy match, endsWith)
  - **Test Grouping Support**: Properly displays pass/fail status for tests organized by namespace, class, or trait groupings
  - **Better User Experience**: Test Explorer now correctly shows green checkmarks for passed tests and red X for failed tests

- **Smart Test Execution - Solution Build Detection**: Fixed build check for solution-level test runs to verify individual projects instead of solution directory
  - **Project-Level Build Verification**: Solution builds now check each project's bin/obj directories for build artifacts
  - **Accurate Build Detection**: Prevents unnecessary rebuilds and catches when individual projects need compilation
  - **Performance Optimization**: Early exit when first project needing rebuild is detected

## [0.10.3] - 2025-10-08

### Fixed

- **Playwright Testing View Visibility**: Fixed context variable mismatch preventing Playwright view from appearing in Testing Explorer
  - **Correct Context Variable**: Changed from `playwrightViewVisible` to `playwrightTestsVisible` to match package.json configuration
  - **Automatic Detection**: Playwright settings panel now correctly appears when Playwright projects are detected in solution
  - **Testing Integration**: Browser visibility toggle and other Playwright-specific settings now accessible when needed

### Enhanced

- **Run Settings UI**: Improved Run Settings webview interface with better usability
  - **Edit Icon Button**: Replaced static file icon with interactive edit button for opening .runsettings files
  - **Cleaner Layout**: Streamlined interface with edit functionality directly on the file item
  - **Better Visual Feedback**: Icon button with hover states for improved user experience

- **Gherkin/SpecFlow Feature Files**: Added language-specific icon support for .feature files
  - **Cucumber Icon**: .feature files now display with Cucumber icon in editor tabs and file explorer
  - **Non-Intrusive**: Icon only applies to .feature files without affecting other file icons
  - **Better Visual Recognition**: Easier to identify Gherkin/SpecFlow files in the workspace

## [0.10.2] - 2025-10-08

### Fixed

- **Test Controller Visibility**: Fixed C# test infrastructure appearing in non-.NET workspaces
  - **Conditional Test Controller Registration**: Test controller is now only created when a .NET solution is detected, preventing the Testing tab from appearing in empty or non-.NET workspaces
  - **Solution-Aware UI**: Test run, debug, and coverage buttons only appear when a .NET solution is loaded
  - **Context-Sensitive Menus**: Test-related menu items in Testing view are hidden when no C# solution is found
  - **Dynamic Infrastructure Management**: Test infrastructure (controller, coverage providers, tree views) is created when solutions are found and cleaned up when removed
  - **Clean Experience**: JavaScript, Python, and other non-.NET projects no longer show any C# test-related UI elements
  - **Lazy Initialization**: Test controller and related components are initialized on-demand, improving extension startup performance
  - **Better Workspace Support**: Prevents confusion in mixed-language workspaces by showing only relevant testing tools

### Enhanced

- **Test Organization and Filtering**: Improved test discovery and organization with advanced grouping and filtering capabilities
  - **Flexible Test Grouping**: Multiple test organization modes available via "Change Test Grouping" button in Testing view
    - **Project > Namespace > Class**: Default hierarchical grouping with namespace organization
    - **Project > Class**: Simple grouping by project and test class
    - **Traits**: Group tests by categories/traits for behavior-driven organization
  - **Trait-Based Filtering**: Enhanced support for test filtering using traits and categories
    - **xUnit Support**: Filter by `[Trait("Category", "Integration")]` attributes and custom trait keys
    - **NUnit Support**: Filter by `[Category("Unit")]` attributes and test categories
    - **MSTest Support**: Filter by `[TestCategory("Performance")]` attributes
    - **Advanced Tag Filtering**: Use `@category` syntax in Test Explorer filter to run specific test groups
    - **Multi-Framework Compatibility**: Consistent trait detection across all major .NET test frameworks
  - **Smart Test Discovery**: Automatic detection and indexing of test traits for improved organization and filtering

## [0.10.1] - 2025-10-07

### Enhanced

- **Recent Solutions View - Quick Actions**: Added "Create New Solution" and "Open Folder Containing Solution" commands to the Recent Solutions view menu
  - **Consistent Experience**: Same quick actions available in Solution Explorer when no solution is loaded are now accessible from Recent Solutions
  - **Faster Workflow**: Create new solutions or open existing ones directly from the Recent Solutions three-dots menu without switching views
  - **Better Discoverability**: Users can start working with solutions more easily from their recent solutions list

## [0.10.0] - 2025-10-07

### Added

- **Test Coverage Dashboard**: Comprehensive code coverage visualization and analysis
  - **Interactive Coverage Dashboard**: Real-time coverage metrics with visual charts and detailed breakdowns
    - Circular progress indicators for line and branch coverage with percentage displays
    - Bar chart visualization showing coverage by package/project with customizable visibility controls
    - Risk hotspots table highlighting classes with high complexity and low coverage
    - CRAP (Change Risk Anti-Patterns) index calculation for identifying risky code
  - **Solution-Level Test Execution**: Optimized test running with single `dotnet test` command for entire solution
    - Eliminates per-project test execution overhead for faster coverage collection
    - Automatic coverage report merging across multiple projects
    - Zero-delay coverage processing with immediate result display
  - **Coverage Report Management**: Intelligent parsing and merging of Cobertura XML coverage reports
    - Line-by-line hit aggregation across multiple test projects
    - Accurate coverage recalculation for merged reports
    - Support for complex class hierarchies including nested classes and compiler-generated methods
  - **Create Tests Integration**: Direct test creation from risk hotspots with one-click access
    - "Create Test" button in risk hotspots table with outline styling
    - Opens same test generation dialog as CodeLens for consistent workflow
    - Test tube icon for clear visual identification
  - **Theme-Aware Design**: Full VS Code theme integration with CSS variables
    - Adapts to light/dark themes automatically
    - Consistent with VS Code's native UI components
  - **Hotspot Analysis**: Pagination support with configurable items per page
    - Risk level badges (Critical, High, Medium, Low) based on CRAP index
    - Sortable and filterable coverage details table
    - Click-to-navigate to source code from coverage entries

## [0.9.4] - 2025-10-03

### Fixed

- **Build Progress Notification**: Restored standard VS Code progress notification when building projects
  - **Progress Indicator**: Build, Rebuild, and Clean commands now show real-time progress notifications with status updates
  - **Cancellable Operations**: Users can cancel long-running build operations from the progress notification
  - **Consistent Experience**: Matches the progress notification pattern used throughout the extension for better UX
  - **Status Updates**: Shows "Starting...", "Command started...", "Processing...", and final "Completed successfully" or "Failed" messages

## [0.9.3] - 2025-10-03

### Enhanced

- **Pull Request Manager - Multi-Workspace Support**: Complete multi-workspace folder support for Pull Request management
  - **Multiple Repository Detection**: Automatically detects and displays all Git repositories across all workspace folders
  - **Repository-Specific Context**: Each repository maintains its own pull request list and operations
  - **Correct Git Command Execution**: All git operations (fetch, diff, branch listing) execute in the correct repository folder
  - **Auto-Refresh on Load**: Pull requests are automatically loaded for all detected repositories on extension activation
  - **Workspace Path Context**: Create Pull Request webview maintains correct workspace context for git operations
  - **PAT Expiration Handling**: Fixed command not found error when PAT expires, now correctly opens connection manager

## [0.9.2] - 2025-10-03

### Fixed

- **Launch Profile Browser Launching**: Fixed browser not opening when `launchBrowser: true` is set in `launchSettings.json`
  - **Multiple URL Support**: When `applicationUrl` contains multiple URLs separated by semicolons (e.g., `https://localhost:7247;http://localhost:5134`), the extension now correctly extracts the first URL for browser launching
  - **Pattern Matching Fix**: Resolved regex pattern mismatch issue where ASP.NET Core prints each URL on a separate line, preventing the browser from opening
  - **LaunchUrl Support**: Added support for `launchUrl` property to specify relative paths (e.g., `"launchUrl": "openapi-ui"` opens at `/openapi-ui`)
  - **Smart URL Construction**: Browser now opens at the correct full URL combining `applicationUrl` (base) + `launchUrl` (path)
  - **Automatic Path Formatting**: Handles both `"swagger"` and `"/swagger"` formats automatically
  - **Consistent Behavior**: Works correctly in both debug and run modes with proper `serverReadyAction` configuration

## [0.9.1] - 2025-10-02

### Enhanced

- **Advanced Search - Current File Symbols**: Enhanced `@` symbol search to show symbols from the current active file
  - **Instant Search**: Automatically searches for selected text when opening the search dialog - no need to type
  - **Quick Navigation**: Type just `@` to instantly see all methods, properties, fields, and events from your current file
  - **Context-Aware**: Focuses on the file you're working with for faster symbol navigation
  - **Smart Fallback**: Shows all workspace symbols if no active file or no symbols found
  - **Seamless Integration**: Works alongside existing search modes (`@method`, `ClassName@`, `ClassName@method`)



## [0.9.0] - 2025-10-02

### Added

- **Playwright Test Integration**: Comprehensive Playwright testing support with enhanced debugging capabilities
  - **Playwright Configuration Panel**: New Testing view panel for managing Playwright-specific test execution settings
  - **Override RunSettings**: Toggle to override .runsettings files with Playwright-specific configuration when debugging
  - **Show Browser Mode**: Toggle headless/headed browser mode for visual test debugging
  - **Enable Debugger**: PWDEBUG integration for step-by-step Playwright test debugging with inspector
  - **Slow Mode**: Configurable slow-motion execution (500ms delay) for better test observation
  - **Dynamic Configuration**: All settings update immediately without requiring test re-runs
  - **Smart Detection**: Automatically detects Playwright projects (Microsoft.Playwright.MSTest, NUnit, xUnit)
  - **Centralized Resolution**: RunSettingsResolver service manages .runsettings file selection across all test execution paths

- **RunSettings File Support**: Complete .runsettings file management for .NET test configuration
  - **Automatic Detection**: Detects .runsettings files in solution root and test project directories
  - **Priority-Based Selection**: Solution root files take precedence over project-level files
  - **RunSettings Panel**: New Testing view panel showing all detected .runsettings files with dropdown selection
  - **File Selection UI**: Clean interface displaying file names and source locations (solution root or project name)
  - **Quick File Access**: Open .runsettings files directly from the panel for editing
  - **Test Integration**: Selected .runsettings files automatically apply to all test execution (dotnet test --settings)
  - **Debugging Support**: .runsettings files integrated with test debugging sessions
  - **File Template**: New .runsettings template available via Quick Add (Shift+F2) with RunConfiguration and TestRunParameters sections
  - **Solution Explorer**: .runsettings files visible at solution level like README.md files

- **Gherkin/SpecFlow Feature File Support**: Complete syntax highlighting and editor support for .feature files
  - **Syntax Highlighting**: Comprehensive TextMate grammar for Gherkin language with full keyword support
  - **Feature Keywords**: Highlighting for Feature, Scenario, Scenario Outline, Background, Examples
  - **Step Keywords**: Support for Given, When, Then, And, But, * with proper coloring
  - **Tag Support**: Custom highlighting for scenario tags (@ignore, @XrayID:AT-12345, @e2e, @regression, etc.) in distinct color
  - **Comments & Strings**: Proper highlighting for # comments, quoted strings, doc strings (""" blocks)
  - **Data Tables**: Syntax support for pipe-delimited Gherkin data tables
  - **Multi-Language Support**: International Gherkin keywords (Polish, German, French, Spanish, Turkish, Russian, Japanese, Korean, etc.)
  - **Cucumber Icon**: Custom Cucumber.png icon for .feature files in both File Explorer and Solution Explorer
  - **Language Configuration**: Auto-closing pairs, brackets, and surrounding pairs for better editing experience
  - **Quick Add Integration**: .feature files detectable in Quick Add (Shift+F2) template detection

### Enhanced

- **Test Execution**: Unified test execution with intelligent .runsettings file resolution
  - All test commands (Run, Debug, Smart Test) now support .runsettings files
  - Playwright projects automatically use appropriate configuration based on override settings
  - Non-Playwright projects use detected/selected .runsettings from RunSettings panel

- **Testing View**: New dedicated panels for test configuration management
  - RunSettings view appears when .runsettings files detected
  - Playwright view appears when Playwright projects detected and .runsettings files exist
  - Clean, consistent UI design matching Performance Monitor styling

## [0.8.7] - 2025-09-26

### Fixed

- **Test Debugging**: Fixed test debugging functionality to properly attach debugger and hit breakpoints
  - **Proper Debugger Attachment**: Test debugging now uses Azure Functions-style debugging pattern with `VSTEST_HOST_DEBUG=1` and process attachment
  - **Testhost Process Detection**: Automatically finds and attaches to testhost processes using platform-specific process listing (tasklist on Windows, ps on Unix)
  - **JustMyCode Support**: Configured debugger to focus on user code (`justMyCode: true`) and skip framework internals for better debugging experience
  - **Multi-Level Debugging Support**: Supports debugging individual test methods, classes, and namespaces with appropriate test filters
  - **Telemetry Integration**: Added comprehensive telemetry tracking for test debugging sessions with success/failure metrics
  - **Enhanced Error Handling**: Proper cleanup of test processes and clear error messages when debugging fails to start or attach

## [0.8.6] - 2025-09-26

### Added

- **PAT Expiration Warning System**: Comprehensive Personal Access Token management with proactive expiration notifications
  - **Smart Authentication Error Detection**: Automatically detects 401/403 responses across Azure DevOps, GitHub, and NuGet feeds
  - **Provider-Specific Warnings**: Tailored warning messages for Azure DevOps, GitHub, and NuGet authentication failures
  - **Actionable Notifications**: Warning dialogs with direct links to update credentials, open connection managers, and access documentation
  - **Intelligent Cooldowns**: 5-minute notification cooldowns per provider/connection to prevent spam while maintaining awareness
  - **Enhanced Pull Request Providers**: Updated Azure DevOps and GitHub providers with `makeRequestWithErrorHandling()` methods
  - **NuGet Authentication Enhancement**: Improved existing 401 error handling with feed-type detection and provider-specific guidance
  - **Telemetry Integration**: Comprehensive tracking of authentication errors, PAT expiration warnings, and credential renewal actions
  - **Centralized Error Handling**: New `AuthenticationErrorHandler` utility class for consistent error management across all providers
  - **User Experience Improvements**: Context-aware notifications showing affected connections/feeds and failed operations

- **Go to Reference Enhancement**: Improved navigation and reference handling capabilities

### Enhanced

- **Authentication Error Messages**: Standardized warning message patterns in `MessageFactory` for consistent user experience
- **Provider Integration**: Seamless integration with existing connection managers and authentication systems
- **Error Recovery**: Clear guidance for users on updating expired credentials with provider-specific instructions

## [0.8.5] - 2025-09-26

### Added

- **Advanced Search - Const String Value Search**: Enhanced Advanced Search with comprehensive const string indexing and value-based filtering
- **Dual Search Entry System**: Creates two searchable entries for each const string - one for property name (e.g., "ToolCleanup") and one for string value (e.g., "tool-cleanup")
- **Property Name Search**: Search by C# property names with `$(symbol-constant)` icon and "ClassName.PropertyName" format
- **String Value Search**: Search by actual string values with `$(symbol-string)` icon and "→ ClassName.PropertyName" format for easy identification

- **Navigation Integration**: Both entries navigate to the same code location for seamless development workflow


## [0.8.4] - 2025-09-25

### Added

- **C# File Rename with Automatic Type Renaming**: Intelligent file renaming system that automatically renames C# types when files are renamed
  - **Smart Type Detection**: Automatically detects matching types (classes, interfaces, enums, records, structs) in C# files being renamed
  - **Interactive Confirmation**: QuickPick dialog with options: "Also rename the type", "Always rename the type", or "No"
  - **Persistent Setting**: New `csharp-dev-tools.fileManagement.alwaysRenameType` setting for automatic type renaming without prompts
  - **Solution-Wide Updates**: Uses LSP reference provider to find and update all type references across the entire solution
  - **Intelligent File Management**: Only opens files that weren't already open, automatically saves all modified files
  - **3-Step Process**: Collects references before file rename, then updates all references with proper URI handling for renamed files
  - **C# Identifier Validation**: Validates that new file names are valid C# identifiers before allowing the rename
  - **Settings Integration**: Available in Solution Explorer Settings webview under File Management section


## [0.8.3] - 2025-09-24

### Added

- **SpecFlow Test Integration**: Comprehensive support for SpecFlow acceptance tests in VS Code Test Explorer
  - **Feature File Discovery**: Automatically detects and parses `.feature` files using Gherkin syntax for test scenarios
  - **Test Execution Support**: Run individual scenarios and features directly from Test Explorer with full result reporting
  - **Multi-Framework Compatibility**: Works seamlessly with NUnit, xUnit, and MSTest as the underlying test framework
  - **Intelligent Test Correlation**: Advanced fuzzy matching system to accurately correlate test discovery names with execution results
  - **Dynamic Namespace Generation**: Automatically extracts root namespaces from project files for accurate test identification
  - **Build System Integration**: Smart detection and triggering of builds when `.feature` files are modified
  - **Robust Result Parsing**: Comprehensive test result parsing with multiple pattern recognition for reliable pass/fail detection
  - **File Change Monitoring**: Selective refresh system that updates tests without disrupting the UI when feature files change
  - **Performance Optimized**: Efficient test discovery and execution with minimal overhead on large test suites

## [0.8.2] - 2025-09-24

### Fixed

- **Custom Template Framework Parameter Support**: Fixed issue where `--framework` parameter was being passed to all dotnet templates
  - **Template Framework Detection**: Added intelligent detection to check if a template supports the `--framework` parameter before adding it to the command
  - **Error Prevention**: Prevents "Invalid option(s): --framework" errors when creating templates that don't support framework selection (e.g., custom templates like `mglib`)
  - **Template Engine Analysis**: Uses template parameter analysis from `.templateengine` directory to determine framework support
  - **Graceful Fallback**: Falls back to original behavior if template analysis fails, ensuring compatibility with all scenarios
  - **Debug Logging**: Added logging to help identify when framework parameter is skipped for unsupported templates

## [0.8.1] - 2025-09-23

### Fixed

- **New Project Template Issues**: Fixed "New Project" functionality not working properly with third-party templates
  - **Command Argument Parsing**: Resolved issue where `--framework` parameter was incorrectly parsed when using third-party templates like MonoGame Library (`mglib`)
  - **Shell Execution Safety**: Replaced unsafe shell command construction with proper process spawning in `DotnetCommandService`
  - **Argument Escaping**: Fixed quote handling issues that caused CLI parameter parsing errors
  - **Consistent Command Execution**: All dotnet project creation now uses the same safe command execution pattern as other dotnet operations
  - **Third-Party Template Support**: Enhanced compatibility with community templates that have specific parameter requirements

## [0.8.0] - 2025-09-23

### Enhanced

- **NuGet Source and Mappings Management**: Comprehensive improvements to NuGet package source configuration and package source mappings
  - **Advanced Package Source Management**: Enhanced NuGet.config editor with complete package source configuration capabilities
  - **Package Source Mappings Support**: Full support for packageSourceMapping configuration to control which packages come from which sources
  - **Interactive Configuration Editor**: Rich webview interface for managing NuGet sources, credentials, and mappings without manual XML editing
  - **Source Priority Management**: Visual interface for reordering package sources by priority with drag-and-drop functionality
  - **Secure Credential Handling**: Enhanced credential management with secure storage and automatic cleanup options
  - **Validation and Testing**: Built-in validation for source URLs and connectivity testing for configured package sources
  - **Import/Export Configuration**: Ability to backup and restore NuGet configuration settings across different environments
  - **Multiple Configuration Scope Support**: Support for global, solution-level, and project-level NuGet.config files with proper inheritance

## [0.7.10] - 2025-09-22

### Fixed

- **.NET Tool Installation Reliability**: Enhanced .NET tool installation commands to ensure NuGet.org is always available as a package source


## [0.7.9] - 2025-09-22

### Added

- **NuGet Credentials Persistence**: New setting to control whether NuGet credentials remain in configuration files after dotnet operations
  - **Persist NuGet Credentials Setting**: Added `csharp-dev-tools.nuget.persistNuGetCredentials` setting (default: false) in NuGet configuration section
  - **Security by Default**: Credentials are automatically removed after operations complete unless persistence is explicitly enabled
  - **Settings UI Integration**: Toggle available in Settings webview under NuGet section with detailed security warning
  - **Manual Cleanup Command**: New "Clear Persisted NuGet Credentials" command for manual credential cleanup when needed
  - **Comprehensive Coverage**: Works across all dotnet operations (build, restore, run) and all credential injection points in the extension

## [0.7.8] - 2025-09-22

### Enhanced

- **Advanced Search - JSON File Support**: Extended Advanced Search with comprehensive JSON file indexing and @ filtering
  - **JSON File Type Recognition**: JSON files now appear as searchable types with member count display (e.g., `$(symbol-key) 25`)
  - **@ Symbol Filtering**: Use `filename@property` syntax to filter JSON properties (e.g., `package@name` shows all properties containing "name" from package.json)
  - **Property Count Display**: JSON files show total property count in search results, similar to C# types showing member count
  - **Nested Property Support**: Automatically indexes all nested JSON properties with full path context
  - **Smart Icon Integration**: JSON files display with `$(json)` icon, properties use `$(symbol-key)` icon
  - **File Context Display**: JSON properties show their source file name in search descriptions for better navigation

## [0.7.7] - 2025-09-20

### Fixed

- **NuGet Package Manager**: Resolved "No enabled sources found for package search" bug and improved reliability
  - **Direct XML Parsing**: Changed from dotnet CLI output parsing to direct NuGet.config XML file reading for better reliability
  - **Console Output Fix**: Fixed parsing issues caused by line wrapping in dotnet CLI console output
  - **File I/O Optimization**: Eliminated duplicate file reads by consolidating NuGet.config parsing into single operation
  - **Locale Independence**: Improved compatibility across different system locales by avoiding console output interpretation
  - **Better Performance**: Single file read now populates both package sources and source mappings caches simultaneously

## [0.7.6] - 2025-09-12

### Fixed

- **Text Comparer Tool**: Resolved security and Monaco editor loading issues
  - **CSP Security Warning**: Fixed Content Security Policy violations that were causing "iframe which has both allow-scripts and allow-same-origin" sandbox warnings
  - **Monaco Editor Loading**: Resolved 403 Forbidden errors and "require is not a function" issues that prevented Monaco Editor from loading properly
  - **Enhanced Error Handling**: Added comprehensive fallback mechanisms with functional text areas when Monaco Editor fails to load
  - **Improved WebView Compatibility**: Updated Monaco Environment setup with webview-compatible worker configuration
  - **Better User Experience**: Added graceful degradation with basic diff comparison functionality in fallback mode

## [0.7.5] - 2025-09-12

### Enhanced

- **Intelligent Test Runner**: Significant improvements to C# test execution performance and user experience
  - **Smart Build Detection**: Tests now only rebuild when source files have been modified, dramatically reducing test execution time
  - **Project Dependency Analysis**: Automatically analyzes project references and dependencies to determine build necessity
  - **Optimized Caching**: Implements intelligent caching to prevent duplicate project analysis in complex solution structures
  - **Enhanced Error Handling**: Improved distinction between build failures and test failures for better user notifications
  - **Timestamp-Based Detection**: Uses file system timestamps to detect changes in source files, project files, and build artifacts
  - **Seamless Integration**: Works transparently with existing test workflows while providing significant performance improvements

## [0.7.4] - 2025-08-29

### Added

- **Speedscope Custom Editor**: Integrated speedscope performance profiler with custom editor support
  - **Direct File Opening**: Automatically opens `.speedscope.json` files with native speedscope web application interface
  - **Professional Performance Analysis**: Full speedscope functionality for analyzing CPU performance profiles and flame graphs
  - **Seamless VS Code Integration**: Custom editor provider that embeds speedscope directly in VS Code editor tabs
  - **Web Application Integration**: Uses the complete speedscope web application (v1.23.1) with WebGL rendering support
  - **Automatic File Loading**: Performance profiles load automatically without requiring manual import steps
  - **Telemetry Integration**: Track speedscope editor usage and performance analysis workflows

## [0.7.3] - 2025-08-28

### Added

- **Launch Profile Support**: Comprehensive launch profile integration for enhanced debugging and running workflows
  - **Automatic Profile Detection**: Automatically detects and parses `launchSettings.json` files in project Properties folders
  - **Smart Status Bar Integration**: Dynamic status bar controls for launch profile selection based on project configuration
    - Single project with profiles: Shows profile selector only
    - Multiple projects: Shows both project and profile selectors
    - No profiles: Clean interface without profile controls
  - **Conditional UI Display**: Status bar elements appear contextually based on project scenarios and profile availability
  - **Launch Profile Priority**: Command line arguments from launch profiles (`commandLineArgs`) take precedence over workspace program arguments
  - **Environment Variables Integration**: Automatic application of environment variables from selected launch profiles
  - **Debug Configuration Enhancement**: Launch profiles seamlessly integrate with VS Code debug configurations
  - **Telemetry Tracking**: Comprehensive usage analytics for launch profile selection and usage patterns
  - **Persistent Selection**: Launch profile preferences are saved per solution and project combination
  - **Multiple Profile Support**: Support for web, console, and desktop application launch profiles
  - **Application URL Handling**: Automatic browser launching for web applications with profile-specific URLs

## [0.7.2] - 2025-08-26

### Added

- **Standalone .csproj Project Support**: Extension now supports opening individual .csproj projects without requiring .sln/.slnx files
  - **Automatic Detection**: Automatically detects standalone .csproj files when no solution files are present in the workspace
  - **Root-Level Display**: Projects are displayed directly at the root level of Solution Explorer without solution wrapper
  - **Full Feature Compatibility**: All existing features (NuGet management, testing, debugging, startup projects) work seamlessly with standalone projects
  - **Virtual Solution Creation**: Creates virtual solutions internally to maintain compatibility with existing extension architecture
  - **Convert to Solution**: New context menu option for standalone projects to convert them into proper solution structure
    - Creates project subdirectory and moves all files into it
    - Generates .sln file in root directory and adds project reference
    - Automatically refreshes Solution Explorer to show new solution structure

## [0.7.1] - 2025-08-26

### Added

- **Program Arguments Code Lens**: New CodeLens feature for managing program arguments in C# applications
  - **Smart Detection**: Automatically detects `Program.cs` files and displays CodeLens above Main methods and top-level statements
  - **Main Method Support**: Supports all variants of Main method signatures including `public/private static void/Task/Task<int> Main` and `async` methods
  - **Interactive Commands**: "Add Program Arguments" and "Edit Program Arguments" commands with input dialogs for easy argument management
  - **Settings Integration**: Arguments stored in workspace settings (`csharp-dev-tools.debug.programArguments`) with Settings UI support
  - **Debug Integration**: Automatically injects program arguments into launch configurations for seamless F5 debugging experience
  - **Top-Level Statement Support**: Works with modern C# top-level programs without explicit Main method declarations

## [0.7.0] - 2025-08-26

### Added

- **Performance Monitor**: Real-time application performance monitoring in the Run and Debug panel
  - **Live Performance Metrics**: Monitor CPU usage and memory consumption in real-time during debugging sessions
  - **Interactive Charts**: Visual time-series charts showing performance trends over the last 60 seconds
  - **Automatic Integration**: Seamlessly integrates with existing debug workflows and startup project management
  - **Smart Visibility**: Only appears when a solution is loaded and debugging is active


## [0.6.3] - 2025-08-21

### Added

- **Optional Extension Installation**: Enhanced extension activation with smart dependency management
  - **Automatic Detection**: Extension now detects missing optional extensions (`JakubKozera.my-todos` and `JakubKozera.github-copilot-code-reviewer`) during activation
  - **User Choice Dialog**: Presents users with a friendly dialog offering to install recommended extensions for enhanced C# development experience
  - **Flexible Installation Options**: Users can choose to "Install All", "Not Now", or "Don't Ask Again" with persistent preference storage
  - **Non-Intrusive Approach**: Only asks once per workspace and respects user preferences to avoid repeated prompts

## [0.6.2] - 2025-08-20

### Fixed

- **Interface Implementation Code Lens**: Fixed code lens placement when both interface and implementation are in the same file
  - **Correct Code Lens Positioning**: "Go to Implementation" code lens now appears on interface method definitions instead of class method implementations when both are in the same file
  - **Enhanced Block Detection**: Improved interface block detection using brace depth tracking to accurately identify interface method boundaries
  - **Context-Aware Method Detection**: Code lens provider now properly distinguishes between interface method declarations and their implementations

## [0.6.1] - 2025-08-20

### Added

- **Diagram Manager Enhancements**: New features for the Diagram Manager tool
  - **Generate Diagram with Github Copilot**: AI-powered diagram generation using GitHub Copilot
    - Supports flowcharts, sequence diagrams, and system architecture diagrams
    - Customizable prompts for specific diagram types
## [0.6.0] - 2025-08-18

### Added

- **Diagram Manager**: Comprehensive diagramming tools with Excalidraw integration
  - **Interactive Diagram Editor**: Create and edit flowcharts, system diagrams, and visual documentation using Excalidraw
  - **Basic Elements Library**: Pre-built shapes and elements (rectangle, ellipse, diamond, triangle, arrow) with drag-and-drop functionality
  - **Preset Integration**: Azure icons, components, and Basic elements in unified interface with proper selection highlighting
  - **Global and Workspace Diagrams**: Support for both global diagrams (stored in user folder) and workspace-specific diagrams
  - **Diagram Management**: Create, open, rename, delete, and reveal diagrams in file explorer with dedicated tree view
  - **SVG Preview Generation**: Real-time preview thumbnails for Basic elements with proper coordinate transformation

## [0.5.5] - 2025-08-13

### Fixed

- **Text Tools Monaco Editor Loading**: Fixed Monaco Editor initialization issues in Text Comparer and Text Analyzer tools
  - **Corrected Path Resolution**: Removed dynamic path parsing that was causing loader.js not found errors
  - **Proper Resource Loading**: Fixed `require.config is not a function` errors by using pre-configured paths from HTML templates
  - **Stable Editor Initialization**: Both text tools now properly load Monaco Editor from the correct webview resource URIs

## [0.5.4] - 2025-08-13

### Enhanced

- **Build Error Reporting**: Enhanced dotnet command service with comprehensive build error detection and Problems panel integration
  - **Project-Level Error Support**: Build errors like assembly version conflicts (CS1705) are now captured and displayed in the VS Code Problems panel
  - **Enhanced Error Parsing**: Multiple regex patterns for different error formats (file-based, project-level, compiler errors)
  - **View Logs Button**: Added "View Logs" action button for build failures to quickly access detailed error information
  - **NuGet Credentials Integration**: Integrated NuGet credentials injection throughout the build pipeline for seamless package restoration

## [0.5.3] - 2025-08-13

### Enhanced

- **Inline Debug Values**: Improved variable detection and collection rendering for better debugging experience
  - **Closest Variable Detection**: Debug hints now show for the variable closest to the debugger position instead of the first occurrence in the file, providing more accurate context
  - **Foreach Loop Filtering**: Collection variables in foreach statements (e.g., `people` in `foreach(var p in people)`) are no longer incorrectly highlighted as debug variables

  - **Collection Rendering Fix**: Arrays and lists now properly display with square brackets `[item, item]` instead of dictionary-style braces `{item, item}`, while actual Dictionary types continue to use braces `{key: value}`

## [0.5.2] - 2025-08-12

### Added

- **Inline Debug Values**: New configuration option to disable red coloring for changed values
  - **Highlight Changed Values Toggle**: Added `csharp-dev-tools.inlineDebugValues.highlightChangedValues` setting to control whether changed variable values are highlighted in red during debugging
  - **Improved User Experience**: When disabled, all debug values use the same blue color regardless of whether they have changed, reducing visual distraction during debugging sessions
  - **Settings UI**: Added toggle in the Settings webview under Debug Settings > Inline Debug Values section

### Enhanced

- **Inline Debug Values**: Improved accuracy by only showing hints for executed lines
  - **Smart Line Filtering**: Debug hints are now only displayed for lines that have been executed (lines above the current debugger position)
  - **Accurate Variable States**: Ensures that only properly evaluated variable values are shown, preventing display of uninitialized or future variable states
  - **Better Debugging Experience**: Reduces confusion by hiding hints for code that hasn't been executed yet


## [0.5.1] - 2025-08-12

### Enhanced

- **JSON to C# Classes Generation Improvements**: Enhanced Quick Add feature (Shift+F2) with better JSON-to-C# conversion
  - **Array Support**: Fixed crash when converting JSON arrays as root objects - now properly generates C# classes for array inputs
  - **Smart Type Detection**: Added automatic detection of GUID and DateTime patterns in JSON strings, converting them to proper C# `Guid` and `DateTime` types instead of generic strings
  - **System Namespace**: Automatically includes `using System;` when generated classes use `Guid` or `DateTime` types

## [0.5.0] - 2025-08-12

### Added

- **User Interface Design Tools Suite**: Comprehensive collection of UI/UX design utilities for web developers
  - **Color Converter**: Advanced color format conversion between HEX, RGB, HSL, and more with real-time preview
  - **Color Palette Generator**: Generate beautiful color palettes with multiple harmony algorithms (complementary, triadic, analogous, etc.)
  - **Gradient Maker**: Interactive CSS gradient generator with visual editor, drag-and-drop color stops, and angle controls
  - **Cubic Bezier Editor**: Professional easing function designer with real-time animation preview and CSS output
  - **Contrast Checker**: WCAG accessibility compliance checker with AA/AAA level validation for text readability
  - **Color Mixer**: Blend two colors with adjustable ratios and see results in multiple formats


## [0.4.10] - 2025-08-10

### Enhanced

- **Test Generation WebView Improvements**: Enhanced user experience for test creation dialog
  - **Smart Dialog Management**: WebView now automatically closes and reopens when clicking "Create Tests" while dialog is already open, ensuring fresh context is loaded
  - **Improved Auto-Detection**: Test project auto-population now works reliably based on project naming conventions (*.Test[s])
  - **Settings Cleanup**: Removed test generation preferences from workspace settings - auto-detection handles all scenarios efficiently
  - **Better User Feedback**: Added notification messages when refreshing dialog context for improved user awareness

## [0.4.9] - 2025-08-10

### Enhanced

- **Dotnet Command Service Refactor**: Major improvements to background dotnet command execution
  - **Unified Progress Notifications**: Fixed duplicate progress notifications during run/debug operations - now shows single progress bar instead of two separate ones
  - **Background Execution**: All dotnet commands (build, rebuild, clean, restore, run) now execute in background without opening terminal windows
  - **Enhanced Output Logging**: Comprehensive command output logging to dedicated "C# Dev Tools" output channel with color-coded messages
  - **Intelligent Error Handling**: Automatic error parsing from MSBuild output with file path extraction and line number detection
  - **Auto-File Opening**: Failed builds automatically open files with errors and navigate to problem locations
  - **Problems Panel Integration**: Build errors are automatically displayed in VS Code's Problems panel for easy navigation
  - **Smart Progress Coordination**: Run/debug operations now coordinate with build progress to prevent UI notification conflicts
  - **Auto-Save Integration**: Files are automatically saved before executing build/run operations
  - **Error Summarization**: Build failures display comprehensive error summaries with highlighted error counts

## [0.4.8] - 2025-08-09

### Enhanced

- **Icons Tool Performance Optimization**: Dramatically improved loading speed with lazy loading implementation
  - **90% Faster Initial Load**: Icons tool now loads pinned icons + first 50 icons instantly instead of all 4,964 icons
  - **Background Loading**: Remaining icons load progressively in batches of 200 without blocking the UI
  - **Silent Loading**: Removed loading progress indicators for a clean, distraction-free interface
  - **Smart Prioritization**: Pinned icons are always loaded first for immediate access to favorites
  - **Seamless Experience**: Users can start browsing icons immediately while additional content loads in background

## [0.4.7] - 2025-08-09

### Added

- **Enum Assignment Code Lens**: New CodeLens feature for C# enum values
  - **Assignment Detection**: Shows "X Assignments" CodeLens on enum values to find where they are assigned
  - **Smart Filtering**: Only shows assignments (using `=` operator), excludes comparisons (`==`, `!=`, etc.)
  - **Single Assignment Navigation**: Directly navigates to the assignment location when there's only one
  - **Multiple Assignment References**: Opens references panel when there are multiple assignments
  - **Parallel Processing**: Optimized performance with parallel reference counting
  - **Configurable**: Toggle via `csharp-dev-tools.codeLens.enableEnumAssignments` setting in VS Code settings or extension settings webview

## [0.4.6] - 2025-08-07

### Added

- **Icons Tool**: New Tabler Icons browser and utility tool
  - **Comprehensive Icon Library**: Browse through all Tabler Icons with live preview and search functionality
  - **Advanced Filtering**: Real-time search with instant filtering across all icon names
  - **Customizable Display**: Adjustable icon size (16-64px) and stroke width (0.5-3.0) with live preview
  - **Pagination Support**: Organized display with pagination for smooth browsing of large icon collections
  - **SVG Export Features**: Copy SVG code to clipboard or download individual icons as SVG files
  - **Professional Interface**: VS Code-themed interface with side-by-side layout and detailed code preview
  - **Attribution & Licensing**: Proper attribution to Tabler Icons creators with MIT license information


### Changed

- Fix fetching branches in pull request creation
- The `getBranches` method now correctly retrieves branches from the repository detection service, ensuring accurate branch lists for pull requests.
- Removed unnecessary repository initialization steps that were causing issues with branch fetching.


## [0.4.5] - 2025-08-07

### Added

- **Encoders / Decoders Tools Section**: New suite of encoding/decoding utilities for text and web development
  - **JWT Encoder / Decoder**: Decode and encode JWT tokens with timestamp hover and validation
  - **HTML Encoder / Decoder**: Encode/decode HTML entities with robust error handling
  - **Base64 Encoder / Decoder**: Encode and decode Base64 text with UTF-8/ASCII support


## [0.4.4] - 2025-08-07

### Added

- **Text Comparer Tool**: Advanced side-by-side and inline text comparison utility
  - **Monaco Editor Integration**: Professional diff editor with native highlighting and line numbers
  - **Auto-Comparison**: Instantly compares original and modified text as you type
  - **Inline/Side-by-Side Modes**: Toggle between diff views for easier analysis
  - **Theme-Adaptive Tab Icon**: Custom tool icon in editor tab, adapts to light/dark themes

- **Text Analyzer & Utilities Tool**: Powerful text analysis and transformation suite
  - **Monaco Editor-Based Editor**: Modern text editor with line numbers and clean UI
  - **Text Statistics**: Real-time display of character, word, and line counts with clear labels
  - **Case Conversion & Sorting**: Convert text to various cases, sort lines, and more
  - **Live Updates**: Statistics and transformations update instantly as you type
  - **Theme-Adaptive Tab Icon**: Custom tool icon in editor tab, adapts to light/dark themes

## [0.4.3] - 2025-08-06

### Fixed

- debuger inline values not showing up in the editor

## [0.4.2] - 2025-08-05

### Added

- **Regex Tester Tool**: Comprehensive regular expression testing and validation interface
  - **Interactive Regex Testing**: Real-time regex pattern validation with live match highlighting
  - **Advanced Configuration**: Support for all JavaScript regex flags (global, case-insensitive, multiline, etc.)
  - **Visual Match Display**: Highlighted matches in text with detailed match information table
  - **Integrated Cheat Sheet**: Built-in regex syntax reference with common patterns and examples


## [0.4.1] - 2025-08-05

### Enhanced

- **Solution Explorer Improvements**:
  - Properties folder is now always shown at the top of the folder list in projects.
  - Added custom dark/light themed icons for the Properties folder.
  - Solution-level README.md file is now displayed at the top level in Solution Explorer if present.

## [0.4.0] - 2025-08-05

### Added

- **Inline Debug Values**: Complete variable value display system during debugging sessions (similar to JetBrains Rider)
  - **Inline Variable Display**: Shows variable values at the end of declaration/usage lines during debugging
  - **Change Highlighting**: Highlights changed variable values in red/orange (configurable), unchanged variables in blue
  - **Complex Object Support**: Shows summaries for objects, arrays, and collections with expandable tooltips
  - **Smart Variable Detection**: Finds variable declarations, assignments, loop variables, and method parameters
  - **Performance Optimized**: Debounced updates and minimal refresh logic for smooth debugging experience
  - **Configurable Settings**: Full configuration support with 5 settings for customizing display behavior
  - **Toggle Command**: "C# Dev Tools: Toggle Inline Debug Values" command in command palette
  - **Debug Session Integration**: Automatically activates during .NET debug sessions and cleans up on exit
  - **Multi-file Support**: Works across all C# files in the workspace during debugging
  - **Collection Viewer**: Advanced data table with LINQ query execution, sorting, filtering, and CSV export
  - **Monaco Editor Integration**: Professional C# code editor with IntelliSense for LINQ expressions
  - **Settings Integration**: All inline debug values settings available in the extension's settings webview
  - **Hover Information**: Rich tooltips showing variable name, type, full value, and change indicators

## [0.3.2] - 2025-08-04

### Added

- **Interface Implementation Code Lens**: Enhanced C# interface development with "Go to Implementation" functionality
  - **Method-Level Navigation**: Interactive code lenses above interface methods that navigate directly to implementations
    - Supports all C# return types including nullable types (string?, int?, etc.)
    - Handles complex generic types and Task-based async methods
    - Smart method name detection with accurate cursor positioning
  - **Interface-Level Navigation**: Code lens on interface declaration line for finding all implementing classes
    - Click the interface name to see all classes that implement the interface
    - Quick navigation between interface contracts and their concrete implementations
  - **Multiple Implementation Support**: When multiple implementations exist, shows selection UI
    - Single implementation: Direct navigation to the implementation
    - Multiple implementations: Shows references panel or quick pick for selection
  - **Fallback Implementation Search**: Robust implementation discovery with workspace symbol search
    - Uses VS Code's built-in implementation provider as primary method
    - Falls back to workspace symbol search when implementation provider is unavailable
    - Smart filtering to exclude interface declarations from results
  - **Configuration Support**: Toggle the feature on/off via `csharp-dev-tools.codeLens.enableGoToImplementation` setting

## [0.3.1] - 2025-08-03

### Added

- **Comprehensive Bookmark System**: Complete bookmark management and navigation system
  - **Global Navigation**: Navigate between bookmarks across all files in the workspace
    - `Alt+Shift+Right`: Go to next bookmark globally (not just current file)
    - `Alt+Shift+Left`: Go to previous bookmark globally with wrap-around support
  - **Visual Gutter Integration**: Enhanced editor experience with visual feedback
    - Bookmark icons displayed in the editor gutter to visually indicate bookmark locations
    - Right-click gutter context menu for adding/removing bookmarks directly from the editor
    - Hover tooltips showing bookmark labels and line information
  - **Tools View with Bookmarks Tree**: Organized bookmark management interface
    - New "Tools" view in Solution Explorer containing bookmark management as the first section
    - Expandable tree structure showing files with their individual bookmarks
    - Auto-refresh functionality - bookmarks appear instantly when added/removed
    - Individual bookmark entries with labels and line numbers for easy navigation
  - **Unified Bookmark and Breakpoint Navigation**: Enhanced quick selection interface
    - `Alt+Shift+Up`: Show unified bookmark and breakpoint selection with visual separator
    - Jump to both code bookmarks and debugging breakpoints from a single interface
    - Smart filtering of enabled breakpoints with file path and line number sorting
  - **Inline Action Buttons**: Convenient bookmark management with hover-activated controls
    - X buttons appear on hover for clearing bookmarks at file level and individual bookmark level
    - "Clear All Bookmarks" action button in the tree view header
    - Integrated with existing bookmark commands for consistent behavior
  - **Enhanced Keyboard Shortcuts**: Complete keyboard-driven bookmark workflow
    - `Alt+Shift+Down`: Toggle bookmark at current cursor position
    - All navigation and management functions accessible via keyboard shortcuts
  - **Smart Context Menus**: Right-click functionality throughout the bookmark system
    - Gutter context menu with multiple fallback strategies for reliable line detection
    - Tree view context menus for file and bookmark management
    - Consistent command registration and conflict resolution

## [0.3.0] - 2025-08-02

### Added

- **Enhanced Test Generation with GitHub Copilot Integration**: Major upgrade to the test creation system
  - **AI-Powered Test Generation**: Full integration with GitHub Copilot for intelligent test generation
    - Automatic test method generation based on source code analysis
    - Context-aware test scenarios and assertions
    - Support for complex method signatures including async, static, and generic methods
  - **Advanced Test Framework Support**: Comprehensive support for multiple testing frameworks
    - xUnit, NUnit, and MSTest framework integration
    - FluentAssertions, Shouldly, and NFluent assertion library support
    - Automatic package reference management in test projects
  - **Intelligent Project Management**: Smart test project creation and management
    - Auto-detection of matching test projects based on naming conventions
    - New test project creation with proper framework configuration
    - Automatic project references and solution integration
  - **Flexible Test File Organization**: Multiple options for test file placement
    - Create new test files or append to existing ones
    - Maintain folder structure consistency between source and test projects
    - Smart namespace adjustment based on project structure
  - **Enhanced User Experience**: Intuitive webview interface with rich configuration options
    - Visual test framework and assertion library selection
    - Real-time preview of generated content
    - Saved preferences per solution for consistent workflow
    - Additional context file inclusion for better AI understanding
  - **GitHub Copilot Instructions Support**: Optional integration with custom Copilot instructions
    - Leverage existing `.github/copilot-instructions.md` files
    - Enhanced context for more accurate test generation
    - Customizable AI prompts for specific testing requirements

## [0.2.7] - 2025-07-31

### Fix

- Fixed loading EF migrations preferences

## [0.2.6] - 2025-07-30

### Fix

- Solution explorer will open only on the intial load of the workspace solution

## [0.2.5] - 2025-07-30

### Enhanced

- Adjusted the startup notifications into one merged progressbar VSC message

## [0.2.4] - 2025-07-29

### Enhanced
- Create PR view starts with loader screen, by default picks the current branch as the source and master/main/develop as the target
- Removed console.logs

## [0.2.3] - 2025-07-29

### Enhanced

- **JSON to C# Classes Generation**: Improved Quick Add feature (Shift+F2) with enhanced JSON-to-C# conversion
  - **Proper Namespace Support**: Generated C# files now include correct namespace declarations based on project structure and target folder
  - **File-Scoped Namespace Support**: Automatically uses file-scoped namespaces (`namespace MyNamespace;`) for .NET 6+ projects when enabled in settings
  - **Correct Code Structure**: Using statements now appear before namespace declarations, following C# conventions
  - **Folder Path Support**: Enhanced input parsing for patterns like `Models/{...json...}User.cs` to create files in specific folders
  - **Multiline JSON Support**: Improved regex parsing to handle complex, multiline JSON objects in Quick Add input

## [0.2.2] - 2025-07-28

### Changed

- The built-in Code Review feature has been removed. Code review functionality is now provided via the [JakubKozera.github-copilot-code-reviewer](https://marketplace.visualstudio.com/items?itemName=JakubKozera.github-copilot-code-reviewer) extension, which is now a dependency.

## [0.2.1] - 2025-07-26

### Added

- **My Todos Extension**: Real-time TODO management and synchronization
  - **Real-time TODO Synchronization**: TODO comments are detected and synced live to the Todos view as you type (500ms debounce), with instant updates on file save.
  - **CodeLens Integration**: Interactive status badges above TODO comments; click to jump to the Todos view. Visual indicators for TODO, IN PROGRESS, DONE, and BLOCKED.
  - **Smart TODO Management**: Supports global, workspace, and code-detected TODOs. Track status, filter, and sort by text, status, or type.
  - **Supported Comment Formats**: Detects TODOs in //, /**/, #, and <!-- --> comments.
  - **Getting Started**: Install, open the Todos view, and start typing TODO comments—see them appear instantly.

## [0.2.0] - 2025-07-26

### Added

- **Pull Request Manager**: Comprehensive pull request management system
  - **Create Pull Requests**: New interface for creating pull requests directly from VS Code
    - Branch selection with visual diff preview
    - Built-in templates and description editor
    - Support for reviewers, assignees, labels, and work items (hidden by default for simplified workflow)
    - Files tab with Monaco Editor integration for diff viewing
  - **View Pull Requests**: Dedicated view for reviewing pull request details
    - Interactive pull request viewer with full metadata
    - Integrated diff viewer for code changes
    - Comment and review management
  - **Pull Request Actions**: Complete workflow support
    - Merge, close, approve, and request changes
    - Add comments and manage reviews
    - View changes in VS Code's native diff viewer
  - **Multi-Provider Support**: Works with both GitHub and Azure DevOps
    - Automatic repository detection
    - Provider-specific UI optimizations
    - Unified interface across platforms

## [0.1.17] - 2025-07-22

### Added

- **Code Review Workflow**: New integrated code review experience in the Source Control tab
  - Custom "Code Review" view for branch selection and file change listing
  - Select a target branch and review all changes between branches
  - Click files to view readable diffs using VS Code's native compare with syntax highlighting
  - Generate code review summaries and prompts for GitHub Copilot
  - Custom Copilot code review mode for guided review sessions


## [0.1.16] - 2025-07-22

### Added

- **Deployment Wizard**: New interactive deployment wizard for .NET web applications
  - Available via right-click context menu "Deploy" on executable projects in Solution Explorer
  - Supports GitHub Actions and Azure Pipelines deployment workflows
  - Auto-detects .NET version from project files (supports .NET 6.0, 7.0, 8.0, 9.0+)
  - Multiple deployment environments: Azure Web App, Docker Hub, FTP, Self-hosted, AWS Elastic Beanstalk, Google Cloud Run
  - Simplified and multi-stage pipeline options with visual preview
  - Automatic YAML generation with workspace-relative paths for portability
  - Test project exclusion - prevents deployment of test projects


## [0.1.15] - 2025-07-22

### Refactored

- **Dotnet Templates Manager Optimization**
  - The extension now retrieves template parameter information from a local `templatecache.json` file instead of running `dotnet` commands for each framework and template.
  - This significantly improves performance and reduces redundant command executions.
  - Template discovery and parameter listing are now faster and more reliable across all supported frameworks.

## [0.1.14] - 2025-07-21

### Added

**Entity Framework Support**
  - New interactive dialog for creating Entity Framework migrations
  - Right-click on solution or project → Entity Framework → Add Migration
  - Project selection dropdowns for migrations and startup projects
  - DbContext class name specification for multi-context scenarios
  - Custom migration folder configuration
  - Live command preview before execution
  - One-click execution in integrated terminal
  - Automatic project discovery and validation
  - Support for complex multi-project solutions

## [0.1.13] - 2025-07-20

### Added

Semantic Colors Configuration: Introduced the csharp-dev-tools.semanticColors.mode setting to control the scope of semantic token coloring.

global: Apply semantic colors globally across all workspaces.

workspace: Apply only to the current workspace.

off: Disable semantic coloring entirely.
Default is set to global.

## [0.1.12] - 2025-07-20

### Fixed

- **Cross-Platform Path Handling**
  - All file and folder paths are now normalized to use the correct platform-specific separator (forward slash for Unix, backslash for Windows)
  - Solution/project parsing and file operations now work reliably on both Windows and Unix systems
  - Enhanced path utility functions to ensure consistent behavior across platforms
  - Recent Solutions, Solution Explorer, and Advanced Search now handle paths correctly regardless of OS

## [0.1.10] - 2025-01-18

### Added

- **File-Scoped Namespace Support in Templates**
  - New setting `csharp-dev-tools.templates.useFileScopedNamespaces` (default: true)
  - When enabled, C# templates automatically use file-scoped namespaces for .NET 6+ projects
  - For older .NET versions (Framework, .NET Core, .NET Standard), traditional block namespaces are used regardless of setting
  - Affects all C# templates: Class, Interface, Enum, Record, Controller, and Razor Page code-behind files
  - Template selection is automatic based on project's target framework detection
  - Available in VS Code settings and Solution Explorer Settings webview under "Templates" section



## [0.1.9] - 2025-07-18

### Added

- **Multi-folder Workspace Support**
  - Solution Explorer now properly detects and displays .NET solutions in multi-folder workspaces
  - When workspace contains multiple folders (e.g., .NET backend + frontend), all solutions are found and displayed
  - Multiple solutions are shown as separate expandable sections in Solution Explorer
  - Single solution workspaces continue to work as before for backward compatibility

### Enhanced

- **Recent Solutions with Workspace Support**
  - Recent Solutions now tracks entire workspaces instead of just solution folders
  - Multi-folder workspaces are saved with descriptive names:
    - Saved workspaces: Uses the `.code-workspace` file name
    - Single additional folder: `"SolutionName + FolderName"`
    - Multiple folders: `"SolutionName + N folders"`
  - Workspace entries display folder icon instead of solution icon to indicate multi-folder workspace
  - Opening workspace entries now restores all workspace folders, not just the solution folder
  - Enhanced tooltips show all additional folders in the workspace

### Fixed

- Solution Explorer no longer limited to first workspace folder only
- Multi-folder workspaces now properly restore all folders when opened from Recent Solutions

## [0.1.8] - 2025-07-18

### Added

- **New File Management Configuration**
  - Added `csharp-dev-tools.solutionViewer.requireConfirmationOnDragDrop` setting (default: false)
  - When enabled, shows a modal confirmation dialog before moving files via drag and drop
  - When disabled, files are moved immediately without confirmation
  - Available in both VS Code settings and Solution Explorer Settings webview
  - Setting is located in the "File Management" section, positioned between "File tracking" and "Namespace Management"

### Enhanced

- **Improved Drag and Drop Experience**
  - Confirmation dialogs are now modal for better visibility and user attention
  - Drag and drop operations can now be performed without confirmation when the new setting is disabled
  - Consistent confirmation behavior across all drag and drop operations (files, projects, solution items)

## [0.1.6] - 2025-07-17

### Added

- **Automatic Namespace Adjustment on File Move**
  - When moving C# files via drag and drop or cut/paste, the extension now prompts to adjust namespaces automatically
  - Single confirmation dialog for all namespace adjustments (simplified UX)
  - Updates the namespace in the moved file to match the new folder structure
  - Updates `using` statements in referencing files to point to the new namespace
  - Removes obsolete `using` statements when namespaces become empty after moves
  - Automatically reopens moved files in the editor from their new location if they were previously open
  - Supports both file-scoped and traditional namespace declarations
  - Comprehensive error handling and progress reporting
  - **New configuration option**: `csharp-dev-tools.solutionViewer.autoNamespaceAdjustment` (default: true)
    - When enabled: Automatic namespace adjustment without confirmation
    - When disabled: Shows confirmation dialog before adjusting namespaces

### Enhanced

- Drag and drop functionality now integrates with namespace adjustment
- Cut/paste operations enhanced with namespace management
- File tracking ensures smooth editor experience when moving files

## [0.1.5] - 2025-07-16

### Features

- **Full support for .slnx files** (new XML-based solution format)
  - Solution Explorer now recognizes and parses both `.sln` and `.slnx` files
  - File search patterns updated to include `**/*.slnx`
  - File watchers monitor changes to `.slnx` files
  - SLNX parser supports folder structures, projects, and solution items
  - Maintains backward compatibility with traditional `.sln` files

### Fixed

- Recent Solutions now correctly displays solution names without file extensions
  - Both `.sln` and `.slnx` extensions are properly removed from display names
  - Project counting works correctly for both solution formats

### Improved

- Extension activation now triggers on both `.sln` and `.slnx` files
- Enhanced solution parsing to handle the modern XML-based solution format
- Better file organization and project detection for SLNX format

## [0.1.4] - 2025-07-15

### Changed

- The Recent Solutions view is now visible by default in the activity bar.
- Refactored command registration for Recent Solutions: commands such as refresh, open, pin/unpin, remove, and clear are now always available, even when no workspace is open. This improves reliability and user experience.
- Improved error handling and logging for solution loading.
- Updated dependencies and improved extension activation performance.

## [0.1.3] - 2025-07-15

### New Features

- Hierarchical display for Razor pages in Solution Explorer
  - `.cshtml` files now show related `.cshtml.cs` and `.cshtml.css` files as nested children
- Enhanced Razor page creation template
  - Creates both `.cshtml` and `.cshtml.cs` files when adding a new Razor page
  - Code-behind file includes proper PageModel class with OnGet() method
  - Input prompt now asks for name without extension

### Enhancements

- Better file organization in Solution Explorer for Razor page files
- More intuitive Razor page development workflow
