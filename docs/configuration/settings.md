---
sidebar_position: 1
---

# Extension Settings

Configure C# Dev Tools to match your development preferences.

## Accessing Settings

There are several ways to access C# Dev Tools settings:

1. **VS Code Settings**: Press `Ctrl+,` (or `Cmd+,` on macOS) and search for "csharp-dev-tools"
2. **Command Palette**: Press `Ctrl+Shift+P` and type "Settings: Open Settings (UI)"
3. **Solution Explorer**: Click the gear icon in the Solution Explorer title bar

## Solution Explorer Settings

### General Settings

| Setting | Description | Default |
|---------|-------------|---------|
| `csharp-dev-tools.solutionViewer.trackActiveFile` | Automatically reveal and select the active file in the Solution Explorer | `true` |
| `csharp-dev-tools.solutionViewer.collapseOtherPaths` | When tracking active file, collapse all other expanded paths | `false` |

## Editor Settings

### Unused Symbol Highlighting

| Setting | Description | Default |
|---------|-------------|---------|
| `csharp-dev-tools.editor.highlightUnusedSymbols` | Enable or disable unused symbol highlighting | `true` |
| `csharp-dev-tools.editor.unusedSymbolOpacity` | Opacity level for unused symbols (0.1 = very faded, 1.0 = normal) | `0.5` |

### Inlay Hints Settings

| Setting | Description | Default |
|---------|-------------|---------|
| `csharp-dev-tools.inlayHints.enableTypeHints` | Show inlay type hints for C# var declarations | `true` |
| `csharp-dev-tools.inlayHints.enableParameterHints` | Show inlay parameter name hints for C# method calls | `false` |

## Debug Settings

| Setting | Description | Default |
|---------|-------------|---------|
| `csharp-dev-tools.debug.launchConsole` | Controls where console applications are launched when debugging | `integratedTerminal` |

Options for `launchConsole`:

- `integratedTerminal`: Launch in VS Code's integrated terminal
- `internalConsole`: Launch in VS Code's Debug Console
- `externalTerminal`: Launch in an external terminal window

## Color Customization

You can customize the colors used by C# Dev Tools:

```json
{
  "workbench.colorCustomizations": {
    "csharpStuff.inlayHints.typeColor": "#4FC1FF"
  }
}
```

Available color settings:

| Setting | Description | Default (Dark Theme) |
|---------|-------------|-------------|
| `csharpStuff.inlayHints.typeColor` | Color for type names in inlay hints | `#4FC1FF` |

## Configuration Through JSON

For advanced configuration, you can directly edit the VS Code `settings.json` file:

1. Open the Command Palette (`Ctrl+Shift+P`)
2. Type "Preferences: Open Settings (JSON)"
3. Add or modify the C# Dev Tools settings:

```json
{
  "csharp-dev-tools.solutionViewer.trackActiveFile": true,
  "csharp-dev-tools.solutionViewer.collapseOtherPaths": false,
  "csharp-dev-tools.editor.highlightUnusedSymbols": true,
  "csharp-dev-tools.editor.unusedSymbolOpacity": 0.5,
  "csharp-dev-tools.inlayHints.enableTypeHints": true,
  "csharp-dev-tools.inlayHints.enableParameterHints": false,
  "csharp-dev-tools.debug.launchConsole": "integratedTerminal"
}
```

## Workspace-Specific Settings

You can configure C# Dev Tools differently for each workspace:

1. Open the Command Palette (`Ctrl+Shift+P`)
2. Type "Preferences: Open Workspace Settings"
3. Search for "csharp-dev-tools" and adjust settings as needed
4. These settings will only apply to the current workspace

## Settings Inheritance

Settings are applied in this order:

1. Default settings
2. User settings (global)
3. Workspace settings
4. Folder settings

Later settings override earlier ones.
