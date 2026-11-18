---
title: Available Agent Tools
description: Build, test, diagnose, debug and navigate C# projects from MCP-compatible agents.
sidebar:
  order: 2
---

MCP clients receive the same build, test and debugging tools used by GitHub Copilot, plus the Roslyn-backed `usages` tool. The exact tool schemas are provided by the extension at runtime, so clients can discover their current parameters without a separate configuration step.

## Code analysis and navigation

| Tool | Purpose |
|---|---|
| `usages` | Find semantic references to a C# symbol by qualified name or by file, line and optional column. Ignores comments, strings and unrelated symbols with the same name. MCP-only. |
| `get_diagnostics` | Return fresh Roslyn compiler and analyzer diagnostics for a file, project, solution or all loaded solutions. Supports files that are not open and filters by severity or diagnostic ID. |
| `cleanup` | Apply the active cleanup profile, the built-in Default profile, or a named profile to a file, project or solution. |
| `format_document` | Format a C# or Razor file using the user's `.editorconfig` and editor settings. |

`get_diagnostics`, `cleanup` and `format_document` are also available to GitHub Copilot.

## Build and test

| Tool | Purpose |
|---|---|
| `build_dotnet` | Build a solution or project with the user's selected build configuration, target framework and NuGet credentials. |
| `test_dotnet` | Run a project, namespace, class or individual test through Test Explorer, including the configured runner and `.runsettings`. |
| `add_ef_migration` | Build the selected EF Core projects, create a migration with `dotnet ef`, and save migration preferences. |

Use these tools instead of a generic terminal build or test when the agent needs to follow the user's VS Code and C# Dev Tools configuration.

## Debugging

| Tool | Purpose |
|---|---|
| `create_debug_runner` | Create a small runnable class that resolves services from the application's dependency-injection container. |
| `debug_set_breakpoints` | Add, replace, conditionally enable or count source breakpoints; logpoints are supported. |
| `debug_run_runner` | Launch a runner in the debugger and wait for a breakpoint, termination or timeout. |
| `debug_get_state` | Read the paused call stack and local variables. |
| `debug_evaluate` | Evaluate a C# expression in a paused debug frame. |
| `debug_step` | Step over, into or out of the current code. |
| `debug_continue` | Resume execution until the next stop. |
| `debug_stop` | Stop the debug session and optionally remove the tool-created breakpoints. |

A typical debugging sequence is:

1. `create_debug_runner`
2. `debug_set_breakpoints`
3. `debug_run_runner`
4. `debug_get_state`, `debug_evaluate`, `debug_step` or `debug_continue` as needed
5. `debug_stop`

## Diagrams

`create_diagram` creates or updates an editable Excalidraw diagram in `.vscodecsdt/Diagrams`. Agents can use it for architecture, flow, sequence, data-flow, deployment and class diagrams while the user watches the canvas update in VS Code.

## Tool behavior

- Relative paths are resolved against the workspace folder.
- Diagnostics wait for the language-server workspace to be ready.
- Formatting and cleanup save changed files, except files with unsaved user changes.
- An agent-written file is synchronized from disk before formatting or cleanup, avoiding stale editor contents.
- Build and test failures are returned as structured results rather than hidden in console output.
- Long-running calls receive progress updates and may run for up to 10 minutes before the bridge times out.

Some tools change files, run code or start builds and therefore require confirmation. See [Security and approvals](/vsc-csharp-dev-tools/ai-agents/security/).
