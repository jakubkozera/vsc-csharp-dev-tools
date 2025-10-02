---
sidebar_position: 3
---

# Diagrams

Create and manage technical diagrams using the integrated Excalidraw whiteboard.

## Overview

C# Dev Tools includes Excalidraw integration for creating diagrams, flowcharts, and technical illustrations directly in VS Code.

## Diagram Types

### Global Diagrams

Stored in your user profile, available across all workspaces:

- Reusable diagrams
- Personal reference
- Cross-project documentation
- Architecture diagrams

### Workspace Diagrams

Stored per workspace:

- Project-specific diagrams
- Team collaboration
- Version controlled
- Context-specific

## Creating Diagrams

### New Global Diagram

1. Open Solution Explorer
2. Expand "Tools" → "Diagrams"
3. Click "Create Global Diagram"
4. Enter diagram name
5. Diagram opens in Excalidraw

### New Workspace Diagram

1. Open Solution Explorer
2. Expand "Tools" → "Diagrams"
3. Click "Create Workspace Diagram"
4. Enter diagram name
5. Diagram opens in editor

## Excalidraw Features

### Drawing Tools

- **Shapes**: Rectangle, circle, diamond, ellipse
- **Lines**: Straight, arrows, curves
- **Text**: Labels and annotations
- **Freehand**: Hand-drawn elements

### Styling

- Colors and fills
- Stroke styles
- Opacity
- Font sizes
- Line types

### Organization

- Grouping elements
- Layers
- Alignment tools
- Distribution
- Z-order management

## Managing Diagrams

### Opening Diagrams

1. Expand "Diagrams" in Tools section
2. View global and workspace diagrams
3. Click to open
4. Edits save automatically

### Renaming Diagrams

1. Right-click diagram in tree
2. Select "Rename"
3. Enter new name
4. File is renamed

### Deleting Diagrams

1. Right-click diagram in tree
2. Select "Delete"
3. Confirm deletion
4. File is removed

## Exporting Diagrams

Export diagrams in various formats:

- **PNG**: Raster image
- **SVG**: Vector graphics
- **JSON**: Excalidraw format

To export:

1. Open diagram
2. Use Excalidraw export menu
3. Choose format
4. Save file

## Version Control

### Workspace Diagrams

Workspace diagrams can be version controlled:

- Stored in `.vscode-csharp-dev-tools/diagrams`
- JSON format for diffing
- Commit with code changes
- Share with team

### Ignoring Diagrams

Add to `.gitignore` if needed:

```gitignore
.vscode-csharp-dev-tools/diagrams/
```

## Use Cases

### Architecture Documentation

- System architecture
- Component diagrams
- Deployment diagrams
- Network topology

### Flow Charts

- Process flows
- Decision trees
- Algorithm visualization
- Workflow documentation

### Class Diagrams

- Class relationships
- Inheritance hierarchies
- Interface contracts
- Design patterns

### Wireframes

- UI layouts
- Screen flows
- User journeys
- Mockups

## Collaboration

### Sharing Diagrams

Share diagrams with team:

1. Commit workspace diagrams to repo
2. Export as PNG/SVG for docs
3. Use global diagrams as templates
4. Share JSON files directly

### Team Standards

Establish conventions:

- Naming patterns
- Color schemes
- Symbol meanings
- Diagram types

## Tips and Tricks

### Keyboard Shortcuts

Excalidraw supports:

- `Ctrl+Z`: Undo
- `Ctrl+Y`: Redo
- `Ctrl+D`: Duplicate
- `Ctrl+G`: Group
- Arrow keys: Move elements

### Quick Workflows

- Double-click to add text
- Hold Shift for straight lines
- Alt+drag to duplicate
- Ctrl+drag for constrained movement

### Organization

- Use layers for complex diagrams
- Group related elements
- Name elements for clarity
- Use consistent colors

## Best Practices

- Keep diagrams focused and simple
- Use clear labels
- Maintain consistent style
- Version control workspace diagrams
- Export for documentation
- Update diagrams with code changes

## Troubleshooting

### Diagram Won't Open

If diagram doesn't open:

1. Check file exists
2. Verify file permissions
3. Try creating new diagram
4. Check VS Code output for errors

### Can't Save Diagram

If save fails:

1. Check disk space
2. Verify write permissions
3. Check file isn't locked
4. Try exporting instead

### Diagram Corrupted

If diagram appears corrupted:

1. Check JSON file syntax
2. Restore from version control
3. Create new diagram
4. Report issue if persistent
