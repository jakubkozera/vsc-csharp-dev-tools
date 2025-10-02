---
sidebar_position: 7
---

# Package Restore Operations

Restore missing NuGet packages for your projects.

## What is Package Restore?

Package restore downloads packages referenced in project files but not present locally.

## When to Restore

Restore packages when:

- Cloning a repository
- After cleaning the solution
- Package files are missing
- After changing branches

## Automatic Restore

The extension automatically restores packages:

- When opening a solution
- Before building
- When adding a project

## Manual Restore

### From Solution Explorer

1. Right-click on a project or solution
2. Select "Restore NuGet packages"
3. Wait for the restore to complete

### From Command Palette

1. Press `Ctrl+Shift+P`
2. Type "NuGet: Restore Packages"
3. Select the command

## Restore Process

During restore:

1. Project files are scanned for package references
2. Missing packages are identified
3. Packages are downloaded from sources
4. Packages are extracted to the local cache
5. Project references are resolved

## Restore Output

Monitor restore progress:

- Terminal panel shows download progress
- Output panel shows detailed logs
- Status bar shows current operation

## Troubleshooting

### Restore Failed

If restore fails:

1. Check internet connectivity
2. Verify package sources are accessible
3. Check for authentication issues
4. Clear NuGet cache and retry:
   ```bash
   dotnet nuget locals all --clear
   ```

### Slow Restore

If restore is slow:

1. Check network speed
2. Use a local package cache
3. Mirror packages locally
4. Configure parallel downloads
