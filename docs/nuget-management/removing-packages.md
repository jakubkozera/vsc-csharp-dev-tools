---
sidebar_position: 5
---

# Removing Packages

Clean up unused or unwanted NuGet packages from your projects.

## Removal Methods

### From NuGet Manager

1. Open the NuGet Package Manager
2. Switch to the **Installed** tab
3. Select the package to remove
4. Select the projects to remove from
5. Click **Uninstall**

### From Solution Explorer

1. Expand project > Dependencies > Packages
2. Right-click the package to remove
3. Select "Remove this package"
4. Confirm the removal

## What Gets Removed

When you remove a package:

- Package reference is removed from the project file
- Package files are removed from the local cache
- The package no longer appears in Dependencies
- Using statements may show errors if not removed

## Removing Dependencies

### Unused Dependencies

If a package was only needed by the removed package:

- You may need to manually remove it
- Check for unused dependencies
- Remove them to keep the project clean

### Shared Dependencies

If other packages still need a dependency:

- The dependency will remain installed
- Do not remove shared dependencies

## Cleanup After Removal

After removing packages:

1. Remove unused `using` statements
2. Remove code that depended on the package
3. Build the project to check for errors
4. Update documentation if needed

## Troubleshooting

### Cannot Remove Package

If removal fails:

1. Check if other packages depend on it
2. Remove dependent packages first
3. Check for file locks
4. Try closing and reopening VS Code

### Errors After Removal

If you see errors after removal:

1. Remove related code and using statements
2. Find alternative packages if needed
3. Update project references
4. Rebuild the solution
