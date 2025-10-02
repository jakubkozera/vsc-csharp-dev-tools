---
sidebar_position: 3
---

# Installing Packages

Add NuGet packages to your .NET projects.

## Installation Methods

### From the NuGet Manager

1. Open the NuGet Package Manager
2. Switch to the **Browse** tab
3. Search for the package you want
4. Select the package from results
5. Choose the target version
6. Select which projects to install to
7. Click **Install**

### From Solution Explorer

1. Expand a project's Dependencies node
2. Right-click on the Packages node
3. Select "Add Package"
4. Search and select the package
5. Click Install

### From Command Palette

1. Press `Ctrl+Shift+P`
2. Type "NuGet: Add Package"
3. Select the command
4. Choose the project
5. Search for the package
6. Select version and install

## Selecting Target Projects

When installing from the solution level:

1. Check the projects that should receive the package
2. All selected projects will get the same version
3. Click Install to add to all selected projects

### Project Compatibility

The extension will:

- Show only compatible projects for the package
- Warn if target framework doesn't match
- Prevent installation to incompatible projects

## Installation Process

When you click Install:

1. The package is downloaded from the source
2. The project file (.csproj) is updated
3. Dependencies are resolved and downloaded
4. The package appears in the Dependencies node
5. References are added to the project

## Installing Specific Versions

To install a specific version:

1. Select the package
2. Click the version dropdown
3. Choose the desired version
4. Click Install

### When to Use Specific Versions

- **Latest stable**: Default choice for most scenarios
- **Specific version**: When you need compatibility with other packages
- **Pre-release**: To test new features (not recommended for production)

## Installing with Dependencies

Packages often require other packages (dependencies):

### Automatic Dependency Resolution

The NuGet manager automatically:

- Identifies required dependencies
- Downloads all dependencies
- Installs them in the correct order
- Resolves version conflicts

### Viewing Dependencies

Before installing, expand the Dependencies section to see:

- Required packages
- Minimum versions
- Framework requirements

## Post-Installation

After installation:

- The package is available for use in code
- Add `using` statements for the package namespaces
- IntelliSense will show types from the package
- Build the project to restore and verify

## Troubleshooting

### Installation Failed

If installation fails:

1. Check the Output panel for error details
2. Verify internet connectivity
3. Ensure sufficient disk space
4. Check for package source issues
5. Verify project file permissions

### Version Conflicts

If you encounter version conflicts:

1. Review the error message for conflicting packages
2. Update or downgrade conflicting packages
3. Use package consolidation features
4. Consider using binding redirects (for .NET Framework)

### Package Not Found During Restore

If the package isn't restored after installation:

1. Try manual package restore
2. Check nuget.config for source configuration
3. Verify package exists in the configured sources
4. Clear NuGet cache and retry
