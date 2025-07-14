---
sidebar_position: 4
---

# NuGet Management

Manage your NuGet packages directly from the VS Code environment.

![NuGet Management](./img/nuget-manager.png)

## Overview

The NuGet Management feature allows you to:

- Browse and search for NuGet packages
- Install packages to your projects
- Update existing packages
- Remove unwanted packages
- Manage package versions across your solution

## Accessing the NuGet Manager

There are several ways to access the NuGet Package Manager:

1. **Solution Explorer**: Right-click on a project or solution and select "Manage NuGet Packages"
2. **Command Palette**: Press `Ctrl+Shift+P` and type "NuGet Manager: Open Package Manager"
3. **Dependencies Node**: Right-click on the "Dependencies" or "Packages" node in the Solution Explorer

## Package Installation

To install a new NuGet package:

1. Open the NuGet Package Manager
2. Switch to the "Browse" tab
3. Search for a package by name
4. Select the package from the search results
5. Choose a version from the dropdown menu
6. Select which projects should receive the package
7. Click "Install" to add the package

## Managing Existing Packages

### Viewing Installed Packages

1. Open the NuGet Package Manager
2. Switch to the "Installed" tab
3. View all installed packages across your solution or in specific projects

### Updating Packages

1. Open the NuGet Package Manager
2. Switch to the "Updates" tab to see available updates
3. Select the packages you wish to update
4. Choose the version to update to
5. Click "Update" to apply the changes

### Removing Packages

There are two ways to remove packages:

**Via the NuGet Manager:**

1. Open the NuGet Package Manager
2. Switch to the "Installed" tab
3. Select the package you wish to remove
4. Click "Uninstall" to remove the package

**Via the Solution Explorer:**

1. Expand a project's "Dependencies" or "Packages" node
2. Right-click on the package you want to remove
3. Select "Remove this package" from the context menu

## Package Sources

The NuGet Manager uses the same package sources as configured in your NuGet settings:

1. Default sources like nuget.org
2. Custom sources from your nuget.config file

To manage package sources:

1. Open the NuGet Manager
2. Click the settings icon in the top-right corner
3. Select "Configure Package Sources"
4. Add, edit, or remove package sources as needed

## Restoring Packages

To restore packages for a project or solution:

1. Right-click on a project or solution in the Solution Explorer
2. Select "Restore NuGet packages"

## Package Management in Solution Explorer

The Solution Explorer provides a hierarchical view of your packages:

1. Each project has a "Dependencies" node with a "Packages" sub-node
2. Expand the "Packages" node to see all installed NuGet packages
3. Right-click on any package to:
   - View package information
   - Update the package
   - Remove the package

## Using Package Versions in Multiple Projects

To ensure consistent package versions across projects:

1. Open the NuGet Manager at the solution level
2. When installing or updating packages, select multiple projects
3. The same version will be applied to all selected projects

## Troubleshooting

If you encounter issues with NuGet packages:

1. Try restoring packages manually
2. Check the Output panel (`Ctrl+Shift+U`) for NuGet errors
3. Verify your package sources are accessible
4. Check for any package conflicts in the Error List
5. Make sure your projects target compatible frameworks for the packages
