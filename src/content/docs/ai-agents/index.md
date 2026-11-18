---
title: AI Agents and MCP
description: Connect C# Dev Tools to Claude Code, Codex, Cursor and other MCP clients.
sidebar:
  order: 1
---

C# Dev Tools can expose its .NET-aware agent tools to AI clients through the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/). This lets agents such as Claude Code, Codex, Cursor, OpenCode, Gemini CLI and Claude Desktop work through the VS Code window and loaded .NET solution that you are already using.

GitHub Copilot uses these tools directly and does **not** need MCP configuration.

:::note
The MCP server is disabled by default. It is available only in a trusted workspace and runs independently for each VS Code window.
:::

## Why use C# Dev Tools with an agent?

Instead of relying only on text search and shell commands, the agent can use the extension's existing services and configuration, including:

- the selected build configuration and target framework;
- Test Explorer, `.runsettings` and configured test runners;
- NuGet credentials and the active language-server workspace;
- Roslyn diagnostics and semantic symbol usages;
- the VS Code debugger and dependency-injected debug runners;
- your cleanup profiles, `.editorconfig`, editor settings and EF Core migration preferences.

See [Available agent tools](/vsc-csharp-dev-tools/ai-agents/available-tools/) for the complete list.

## Connect an agent

1. Open the project in VS Code and trust the workspace.
2. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`).
3. Run **C# Dev Tools: Connect an AI Agent (MCP)…**.
4. Select the agent and choose whether to configure **This project** or **All projects**.

This command enables `csharp-dev-tools.mcp.enabled`, installs the stable `csdt-mcp` launcher and writes the configuration without removing other MCP servers:

| Agent | Project configuration |
|---|---|
| Claude Code | `.mcp.json` |
| Codex | `.codex/config.toml` |
| Cursor | `.cursor/mcp.json`, or automatic Cursor API registration |
| Other MCP clients | Copies a generic stdio configuration to the clipboard |

Restart an already-running agent session after changing its MCP configuration.

## Manual configuration

When the server is running, the launcher is stored at:

- macOS and Linux: `~/.csharp-dev-tools/bin/csdt-mcp`
- Windows: `%USERPROFILE%\.csharp-dev-tools\bin\csdt-mcp.cmd`

For agents that start in the project folder, a minimal configuration is:

```json
{
  "mcpServers": {
    "csharp-dev-tools": {
      "command": "/home/user/.csharp-dev-tools/bin/csdt-mcp",
      "args": []
    }
  }
}
```

Use the Windows launcher path when configuring a Windows client. If the agent starts outside the project folder, add an explicit workspace:

```json
{
  "mcpServers": {
    "csharp-dev-tools": {
      "command": "/home/user/.csharp-dev-tools/bin/csdt-mcp",
      "args": ["--workspace", "/path/to/project"]
    }
  }
}
```

You can also configure the supported CLIs from a terminal:

```bash
claude mcp add --scope user csharp-dev-tools -- ~/.csharp-dev-tools/bin/csdt-mcp
codex mcp add csharp-dev-tools -- ~/.csharp-dev-tools/bin/csdt-mcp
```

Run `csdt-mcp --list` to see the VS Code windows that the launcher can join. The bridge selects the window whose workspace contains the agent's working folder; `--workspace <folder>` overrides that folder when necessary.

## How connections work

The agent starts `csdt-mcp` over standard input/output. The launcher locates the C# Dev Tools MCP host in the matching VS Code window and forwards MCP tool calls to that window. Tool calls therefore use the projects, services, credentials and debugger that are active there.

If the window reloads, the bridge attempts to reconnect once. The launcher and tool manifest are kept outside the extension installation, so an extension update does not require clients to change their configuration.

For clients that can connect only over HTTP, enable the optional local HTTP endpoint as described in [Security and approvals](/vsc-csharp-dev-tools/ai-agents/security/). The standard `csdt-mcp` launcher is preferred for clients that support commands.

## Status and management

Click the **MCP** item in the VS Code status bar to:

- view connected agents;
- connect another agent;
- disconnect all agents;
- copy the optional HTTP endpoint and token;
- reset **Always Allow in This Workspace**;
- open MCP settings;
- turn off the MCP server.

## Requirements and limitations

- The workspace must be trusted.
- Keep the relevant VS Code window open. The current version does not start VS Code or run a headless IDE for the agent.
- The agent must be able to run the installed `csdt-mcp` launcher, or connect to the optional local HTTP endpoint.
- Restricted Mode blocks the MCP server.
