---
sidebar_position: 3
---

# Advanced Search

Advanced Search provides powerful type and symbol search capabilities across your entire codebase.

![Advanced Search](../../static/img/advanced-search.png)

## Overview

The Advanced Search feature lets you quickly find and navigate to:

- Classes, interfaces, structs, records, and enums
- Methods, properties, fields, and events
- Namespaces and other symbols

This feature is especially valuable in large codebases where traditional file search is too slow or imprecise.

## Opening Advanced Search

There are multiple ways to access Advanced Search:

- Press `Alt+P` (default keyboard shortcut)
- Use the Command Palette (`Ctrl+Shift+P`) and type "Advanced Search: Types & Symbols"
- Click the search icon in the Solution Explorer title bar

## Search Syntax

Advanced Search offers several search modes:

### Type Search

To search for types (classes, interfaces, etc.), simply type the name:

```csharp
Customer
```

This will find all types with "Customer" in their name.

### Member Search

To search for members within any type, use the @ syntax:

```csharp
@AddItem
```

This will find all members named "AddItem" across all types.

### Scoped Member Search

To find members within a specific type, combine both approaches:

```csharp
ShoppingCart@AddItem
```

This will find methods named "AddItem" within types named "ShoppingCart".

## Search Results

The search results display:

1. Matching symbol name
2. Symbol type (class, method, etc.)
3. Containing type (for members)
4. Namespace
5. File path

## Navigating to Results

To navigate to a search result:

1. Click on the result
2. The file will open with the cursor positioned at the symbol definition
3. For large files, the relevant section will be automatically expanded and scrolled into view

## Search Index

The search index is automatically built when:

- A solution is loaded
- Project files are modified
- The "Rebuild Search Index" command is executed

To manually rebuild the search index:

1. Open the Command Palette (`Ctrl+Shift+P`)
2. Type "C# Solution Explorer: Rebuild Search Index"
3. Press Enter to execute the command

## Performance Tips

For optimal performance:

1. Be specific in your searches to reduce result count
2. Use scoped searches when looking for common member names
3. Rebuild the search index if results seem outdated

## Customizing Advanced Search

You can customize the search behavior through keyboard shortcuts:

1. Open VS Code settings (`Ctrl+,`)
2. Search for "keyboard shortcuts"
3. Click on "Keyboard Shortcuts" or press `Ctrl+K Ctrl+S`
4. Search for "csharp-dev-tools.advancedSearch"
5. Modify the keyboard shortcut as desired
