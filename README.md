# C# Solution Explorer Extension

A comprehensive VS Code extension that provides Solution Explorer functionality for .NET projects with file template support and code analysis features.

## Features

### NuGet Management

![NuGet Manager](https://raw.githubusercontent.com/jakubkozera/vsc-csharp-dev-tools/refs/heads/main/static/img/nuget-manager.png)

### Advanced Search

![Advanced Search](https://raw.githubusercontent.com/jakubkozera/vsc-csharp-dev-tools/refs/heads/main/static/img/advanced-search.png)

### Solution Explorer

![Solution Explorer](https://raw.githubusercontent.com/jakubkozera/vsc-csharp-dev-tools/refs/heads/main/static/img/solution-explorer.png)

- Browse .NET solutions (.sln files) with a familiar tree structure
- View projects, folders, and files in a hierarchical view
- Support for solution folders and nested projects
- Drag and drop functionality for moving files


### Code Analysis

![Editor Features](https://raw.githubusercontent.com/jakubkozera/vsc-csharp-dev-tools/refs/heads/main/static/img/editor-features.png)

#### Unused Symbol Highlighting

The extension automatically detects and highlights unused properties, methods, and fields in C# files by:

- **Instant Feedback** - Uses C# language server diagnostics for immediate response (same speed as IDE0051 warnings)
- **Visual Indication** - Unused symbols are greyed out with reduced opacity
- **Hover Information** - Hover over unused symbols to see detailed information about why they're marked as unused
- **Real-time Analysis** - Updates instantly as the C# analyzer detects changes
- **Configurable** - Customize the opacity level and toggle the feature on/off
- **Smart Detection** - Public methods are excluded from unused detection (they might be API endpoints or library methods)
- **Performance Optimized** - Primary analysis uses language server diagnostics, with fallback to reference checking

**Supported Symbol Types:**

- Properties (public and private)
- Methods (private only - public methods are excluded)
- Fields (public and private)
- Events (public and private)


### File Templates

![Quick Add](https://raw.githubusercontent.com/jakubkozera/vsc-csharp-dev-tools/refs/heads/main/static/img/quick-add.png)

Right-click on any project or folder in the Solution Explorer to access the "Add -> New Item" menu with the following templates:

#### C# Templates

- **Class** - Creates a new C# class file
- **Interface** - Creates a new C# interface with proper naming (IInterface)
- **Enum** - Creates a new enumeration
- **Record** - Creates a new C# record type

#### Web Development Templates

- **Controller** - Creates an ASP.NET Core API controller
- **Razor Page** - Creates a new Razor page (.cshtml) with its code-behind file (.cshtml.cs)
- **Razor Component** - Creates a new Blazor component (.razor)

### Testing Integration

The extension provides comprehensive test support through the VS Code Testing API:

- **Native Test Explorer** - Tests appear in VS Code's built-in Test Explorer
- **Automatic Discovery** - Automatically finds test projects and methods using MSTest, xUnit, and NUnit
- **Hierarchical Organization** - Tests organized by Project → Namespace → Class → Method
- **Run and Debug** - Run or debug individual tests, classes, or entire projects
- **Real-time Results** - See test results with detailed error messages and stack traces
- **File Navigation** - Click on any test to jump to its source code
- **Test Framework Support** - Supports MSTest, xUnit, NUnit, and ASP.NET Core testing

    ![Test Explorer](https://raw.githubusercontent.com/jakubkozera/vsc-csharp-dev-tools/refs/heads/main/static/img/test-explorer.png)

### Entity Framework Support

Enhanced Entity Framework Core development with integrated migration management:

#### Add Migration Dialog

- **Interactive Migration Creation** - User-friendly dialog for creating new migrations
- **Smart Project Selection** - Dropdowns with project icons and automatic test project filtering
- **Preference Memory** - Remembers your project selections per solution for faster workflow
- **Visual Project Indicators** - Real SVG icons showing project types (web, console, library, test, etc.)
- **DbContext Configuration** - Specify DbContext class name for multi-context scenarios
- **Custom Migration Folders** - Configure output folder for migration files
- **Command Preview** - See the generated `dotnet ef` command before execution
- **One-Click Execution** - Execute migrations directly from VS Code

**Features:**

- Right-click on solution or project → Entity Framework → Add Migration
- Automatic project discovery and validation with proper SVG project icons
- Smart defaults and preference persistence per workspace
- Visual project type identification using the same icons as Solution Explorer
- Terminal integration for command execution
- Support for complex multi-project solutions
- Test projects automatically excluded from selections

#### Configuration Templates

- **JSON File** - Creates a new JSON configuration file
- **XML File** - Creates a new XML file
- **Config File** - Creates an appsettings.json style configuration file

### Smart Features

- **Automatic Namespace Generation** - Templates automatically generate appropriate namespaces based on folder structure and project context
- **Icon Support** - All file types display with appropriate icons from the extensive icon library
- **File Name Validation** - Ensures valid file names and prevents conflicts


## Usage

![Project Creation](https://raw.githubusercontent.com/jakubkozera/vsc-csharp-dev-tools/refs/heads/main/static/img/project-creation.png)

1. Open a workspace containing a .NET solution (.sln file)
2. The Solution Explorer will automatically appear in the Explorer panel
3. Right-click on any project or folder to see the "Add" context menu
4. Select "New Item" to access file templates
5. Choose your desired template and enter a file name
6. The file will be created with appropriate content and opened in the editor

## Requirements

- Visual Studio Code 1.100.0 or higher
- A workspace containing .NET solution files (.sln)

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.


### Feature Previews

Below are visual previews of the main features:

![Solution Explorer](https://raw.githubusercontent.com/jakubkozera/vsc-csharp-dev-tools/refs/heads/main/static/img/solution-explorer.png)
![Advanced Search](https://raw.githubusercontent.com/jakubkozera/vsc-csharp-dev-tools/refs/heads/main/static/img/advanced-search.png)
![NuGet Manager](https://raw.githubusercontent.com/jakubkozera/vsc-csharp-dev-tools/refs/heads/main/static/img/nuget-manager.png)
![Editor Features](https://raw.githubusercontent.com/jakubkozera/vsc-csharp-dev-tools/refs/heads/main/static/img/editor-features.png)
![Test Explorer](https://raw.githubusercontent.com/jakubkozera/vsc-csharp-dev-tools/refs/heads/main/static/img/test-explorer.png)
![Quick Add](https://raw.githubusercontent.com/jakubkozera/vsc-csharp-dev-tools/refs/heads/main/static/img/quick-add.png)
![Project Creation](https://raw.githubusercontent.com/jakubkozera/vsc-csharp-dev-tools/refs/heads/main/static/img/project-creation.png)
For example:

## Configuration

The extension can be configured through VS Code settings:

### Code Analysis Settings

- `csharp-dev-tools.editor.highlightUnusedSymbols`: Enable/disable unused symbol highlighting (default: `true`)
- `csharp-dev-tools.editor.unusedSymbolOpacity`: Opacity level for unused symbols, from 0.1 (very faded) to 1.0 (normal) (default: `0.5`)

### Solution Explorer Settings

- `csharp-dev-tools.solutionViewer.trackActiveFile`: Automatically reveal and select the active file in the Solution Explorer (default: `true`)
- `csharp-dev-tools.solutionViewer.collapseOtherPaths`: When tracking active file, collapse all other expanded paths (default: `false`)

## Commands

The extension provides the following commands accessible via the Command Palette (Ctrl+Shift+P):

- `C# Solution Explorer: Toggle Unused Symbol Highlighting` - Toggle the unused symbol highlighting feature on/off
- `C# Solution Explorer: Open Extension Walkthroughs` (Alt+W) - Open the extension walkthroughs to learn about all features

## Known Issues

- Reference analysis may take a moment for large files
- Some symbols may not be detected correctly if the C# language server is not fully initialized

## Release Notes

### 0.0.1

Initial release featuring:

- Solution Explorer with drag & drop support
- Comprehensive file templates for C# development
- Unused symbol highlighting with configurable visual feedback

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

- [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

- Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
- Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
- Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

- [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
