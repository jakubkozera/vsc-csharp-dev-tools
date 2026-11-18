---
title: Security and Approvals
description: Control MCP connections, sensitive operations and the optional HTTP endpoint.
sidebar:
  order: 3
---

C# Dev Tools separates MCP **connection approval** from approval of **tools that can change or execute something**. Approval is shown in the VS Code window even when the AI agent is running in another application.

## First connection

When `csharp-dev-tools.mcp.autoApprove` is `none`, VS Code asks before an agent first uses the window. Choose:

- **Allow** — allow this connection only;
- **Always Allow in This Workspace** — remember the approval for this workspace;
- dismiss the prompt — refuse the connection.

A prompt that is not answered within two minutes is treated as refused. To forget the workspace approval, open the MCP status-bar menu and select **Ask again before agents connect**.

## Per-tool confirmation

The default policy prompts before operations that build, run, evaluate or modify the workspace:

- building and testing .NET projects;
- running EF Core migrations;
- creating diagrams or debug runners;
- setting breakpoints and launching a runner;
- evaluating C# in the debugger;
- running cleanup and formatting.

Choose **Allow** to approve one call or **Allow for This Session** to approve that tool for the current agent session.

Reading semantic usages, reading diagnostics, reading debugger state, stepping and continuing a debugger session do not prompt by default. The agent still needs an approved connection.

## Approval settings

| Setting | Default | Effect |
|---|---:|---|
| `csharp-dev-tools.mcp.enabled` | `false` | Starts the per-window MCP server. |
| `csharp-dev-tools.mcp.autoApprove` | `none` | `none` asks for connections and changing tools; `connections` asks only for changing tools; `all` never asks. |
| `csharp-dev-tools.mcp.http.enabled` | `false` | Also starts a loopback-only Streamable HTTP endpoint. |
| `csharp-dev-tools.mcp.http.port` | `0` | Uses a free port. A fixed port can serve only one VS Code window at a time. |

`csharp-dev-tools.mcp.autoApprove: "all"` should be used only for agents that you fully trust. It allows connection and tool calls without interactive confirmation.

```json
{
  "csharp-dev-tools.mcp.enabled": true,
  "csharp-dev-tools.mcp.autoApprove": "none",
  "csharp-dev-tools.mcp.http.enabled": false
}
```

The server does not run in Restricted Mode. Trust the workspace before enabling it.

## Optional HTTP endpoint

The HTTP listener binds only to `127.0.0.1` and requires a bearer token. It is intended for MCP clients that accept an endpoint URL rather than a command.

1. Set `csharp-dev-tools.mcp.http.enabled` to `true`.
2. Open the MCP status-bar menu.
3. Select **Copy HTTP endpoint and token**.
4. Configure the client with the copied URL and `Authorization` header.

The token changes when the VS Code window restarts. Do not publish or commit it. Prefer the `csdt-mcp` command for clients that support stdio servers; HTTP failures do not affect the standard launcher.

## Troubleshooting

### The agent reports no C# Dev Tools server

- Confirm that `csharp-dev-tools.mcp.enabled` is `true` for the current window.
- Confirm that the VS Code workspace is trusted.
- Restart the agent after changing `.mcp.json`, `.cursor/mcp.json` or Codex `config.toml`.
- Run `~/.csharp-dev-tools/bin/csdt-mcp --list` to check window discovery.

### The launcher cannot find the right window

Start the agent in a folder inside the workspace, or pass the workspace explicitly:

```bash
~/.csharp-dev-tools/bin/csdt-mcp --workspace /path/to/project
```

For multi-root workspaces, make sure the chosen folder is covered by one of the open workspace folders. For multi-process editor setups, clients may use `--pid <process-id>` when an explicit process is known.

### A tool timed out or was refused

A refused consent prompt is returned to the agent as an error; do not immediately retry it without checking the VS Code prompt. The default bridge timeout is 10 minutes and resets when progress is reported.

Bridge connection logs are written to `~/.csharp-dev-tools/mcp/bridge.log` and rotated when the file reaches 1 MiB.

### The server is disabled in Restricted Mode

Trust the workspace, then run **C# Dev Tools: Connect an AI Agent (MCP)…** again. The command checks workspace trust before enabling the host.
