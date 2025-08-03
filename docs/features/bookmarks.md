---
sidebar_position: 8
---

# Bookmarks

The Bookmarks feature provides a comprehensive system for marking and navigating to important locations in your code across your entire workspace.

## Overview

<div style={{ display: "flex", alignItems: "flex-start", gap: "32px" }}>
  <div style={{ flex: 1 }}>
    <p>
      The Bookmark system enhances your coding workflow by allowing you to:
    </p>
    <ul>
      <li>Mark important code locations with visual indicators</li>
      <li>Navigate between bookmarks globally across all files</li>
      <li>Organize bookmarks in a dedicated tree view</li>
      <li>Add labels to bookmarks for better organization</li>
      <li>Integrate with debugging breakpoints for unified navigation</li>
      <li>Use keyboard shortcuts for efficient bookmark management</li>
    </ul>
  </div>

</div>
  <img
    src={require("./img/bookmarks.png").default}
    alt="Bookmarks Feature"
    style={{  maxWidth: "80%" }}
  />
## Getting Started

### Accessing Bookmarks

Bookmarks are available in the **Tools** section of the Solution Explorer:

1. Open the Solution Explorer from the Activity Bar
2. Expand the **Tools** section
3. The **Bookmarks** subsection shows all your workspace bookmarks

### Creating Your First Bookmark

There are several ways to create a bookmark:

**Using Keyboard Shortcut:**
1. Position your cursor on the line you want to bookmark
2. Press `Alt+Shift+Down` to toggle a bookmark

**Using Gutter Right-Click:**
1. Right-click on the line number in the editor gutter
2. Select **Toggle Bookmark** or **Add Labeled Bookmark**

**Using Command Palette:**
1. Press `Ctrl+Shift+P` to open the Command Palette
2. Type "Toggle Bookmark" and select the command

## Navigation

### Global Navigation

Unlike many bookmark systems that only navigate within the current file, C# Dev Tools provides **global navigation** across your entire workspace:

- **Next Bookmark**: `Alt+Shift+Right` - Jump to the next bookmark in any file
- **Previous Bookmark**: `Alt+Shift+Left` - Jump to the previous bookmark in any file

Navigation wraps around, so after the last bookmark, it will jump to the first bookmark in your workspace.

### Unified Bookmark and Breakpoint Navigation

Press `Alt+Shift+Up` to open a unified quick-pick interface that shows:

- All workspace bookmarks with their labels and file locations
- All active debugging breakpoints
- Visual separator between bookmarks and breakpoints

This allows you to quickly jump between both code bookmarks and debugging breakpoints from a single interface.

### Tree View Navigation

In the Solution Explorer's Tools > Bookmarks section:

1. **File Level**: See all files that contain bookmarks
2. **Bookmark Level**: Expand files to see individual bookmarks with their labels and line numbers
3. **Click to Navigate**: Click any bookmark to jump directly to that location

## Visual Indicators

### Gutter Icons

Bookmarked lines display a bookmark icon in the editor gutter, making them easily visible while coding.

## Bookmark Management

### Adding Labels

When creating a bookmark via right-click gutter menu:

1. Right-click on a line number in the gutter
2. Select **Add Labeled Bookmark**
3. Enter a descriptive label for the bookmark
4. The label will appear in the tree view and quick-pick interface

### Removing Bookmarks

**Individual Bookmarks:**
- Use `Alt+Shift+Down` on a bookmarked line to toggle it off
- Right-click the gutter and select **Remove Bookmark**
- Click the X button next to a bookmark in the tree view (appears on hover)

**File-Level Clearing:**
- In the tree view, hover over a file with bookmarks
- Click the X button to clear all bookmarks in that file

**Clear All Bookmarks:**
- Click the **Clear All** button in the Bookmarks tree view header
- Or use the command palette: "Clear All Bookmarks"

### Inline Actions

The bookmark tree view provides hover-activated inline actions:

- **X Button on Files**: Clear all bookmarks in the selected file
- **X Button on Bookmarks**: Remove individual bookmarks
- **Clear All Button**: Remove all bookmarks from the workspace

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Alt+Shift+Down` | Toggle bookmark at current line |
| `Alt+Shift+Right` | Go to next bookmark (globally) |
| `Alt+Shift+Left` | Go to previous bookmark (globally) |
| `Alt+Shift+Up` | Show bookmark and breakpoint quick-pick |

## Context Menus

### Gutter Context Menu

Right-click on any line number in the editor gutter to access:

- **Toggle Bookmark**: Add or remove a bookmark on that line
- **Add Labeled Bookmark**: Create a bookmark with a custom label
- **Remove Bookmark**: Remove an existing bookmark (when present)

### Tree View Context Menu

Right-click on items in the bookmark tree view:

**File Items:**
- **Clear File Bookmarks**: Remove all bookmarks from the selected file

**Bookmark Items:**
- **Go to Bookmark**: Navigate to the bookmark location
- **Remove Bookmark**: Delete the selected bookmark

## Integration Features

### Auto-Refresh

The bookmark tree view automatically updates when:
- New bookmarks are added
- Existing bookmarks are removed
- Files are renamed or moved
- The workspace is refreshed

### Multi-File Support

Bookmarks work seamlessly across:
- Multiple files in the same project
- Files in different projects within the solution
- Files outside of projects but within the workspace

### Smart Sorting

Bookmarks are displayed in a logical order:
- **Tree View**: Grouped by file, then by line number
- **Quick-Pick**: Sorted by file path, then by line number
- **Global Navigation**: Sequential order across all files

## Tips and Best Practices

### Effective Labeling

Use descriptive labels for your bookmarks:
- `TODO: Refactor this method`
- `Bug: Fix null reference here`
- `Review: Performance bottleneck`
- `Entry point for feature X`

### Workflow Integration

Combine bookmarks with other features:
- Mark important code sections while debugging
- Bookmark areas that need refactoring
- Mark entry points for complex features
- Use with breakpoints for comprehensive code navigation

### Keyboard-Driven Workflow

For maximum efficiency:
1. Use `Alt+Shift+Down` to quickly mark locations while coding
2. Use `Alt+Shift+Right/Left` for fast navigation during code reviews
3. Use `Alt+Shift+Up` when you need to choose between multiple bookmarks or breakpoints

### Project Organization

Organize bookmarks by purpose:
- Keep temporary bookmarks for current work sessions
- Use labeled bookmarks for permanent reference points
- Clear old bookmarks regularly to maintain a clean workspace

The bookmark system is designed to enhance your coding productivity by providing quick access to important code locations while maintaining a clean and organized development environment.
