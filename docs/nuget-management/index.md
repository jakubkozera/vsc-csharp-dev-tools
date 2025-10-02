---
sidebar_position: 1
---

# NuGet Package Management

Manage your NuGet packages directly from the VS Code environment with comprehensive package management features.

![NuGet Management](../../static/img/nuget-manager.png)

## Overview

The NuGet Management feature provides a complete package management experience:

- **[Browsing NuGet Packages](./browsing-packages.md)** - Search and discover packages
- **[Installing Packages](./installing-packages.md)** - Add packages to your projects
- **[Updating Packages](./updating-packages.md)** - Keep packages up to date
- **[Removing Packages](./removing-packages.md)** - Clean up unused packages
- **[Credential Injection](./credential-injection.md)** - Secure access to private feeds
- **[Package Restore](./package-restore.md)** - Restore missing packages
- **[NuGet Configuration](./nuget-configuration.md)** - Manage package sources and settings

## Accessing the NuGet Manager

There are several ways to access the NuGet Package Manager:

1. **Solution Explorer**: Right-click on a project or solution and select "Manage NuGet Packages"
2. **Command Palette**: Press `Ctrl+Shift+P` and type "NuGet Manager: Open Package Manager"
3. **Dependencies Node**: Right-click on the "Dependencies" or "Packages" node in the Solution Explorer

## Quick Operations

### Quick Package Install

From the Solution Explorer:

1. Expand a project's "Dependencies" node
2. Right-click on "Packages"
3. Select "Add Package"
4. Search and install packages quickly

### Quick Package Update

1. Expand a project's "Packages" node
2. Right-click on a package
3. Select "Update Package"
4. Choose the version to update to

### Quick Package Removal

1. Expand a project's "Packages" node
2. Right-click on a package
3. Select "Remove this package"
4. Confirm the removal

## Package Management in Solution Explorer

The Solution Explorer provides a hierarchical view of your packages:

- Each project has a "Dependencies" node with a "Packages" sub-node
- Expand the "Packages" node to see all installed NuGet packages
- Package versions are displayed next to each package name
- Right-click on any package to view, update, or remove it

## Key Features

### Multi-Project Management

- Install packages to multiple projects simultaneously
- Update packages across all projects in a solution
- View package usage across your entire solution

### Version Control

- View available package versions
- Update to specific versions
- Downgrade packages when needed
- Lock package versions

### Private Feed Support

- Configure private NuGet feeds
- Use credential injection for authenticated feeds
- Support for Azure Artifacts and other private repositories

## Troubleshooting

If you encounter issues with NuGet packages:

1. Try restoring packages manually
2. Check the Output panel (`Ctrl+Shift+U`) for NuGet errors
3. Verify your package sources are accessible
4. Check for any package conflicts in the Error List
5. Make sure your projects target compatible frameworks for the packages
