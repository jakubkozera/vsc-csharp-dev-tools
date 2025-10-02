---
sidebar_position: 4
---

# Updating Packages

Keep your NuGet packages up to date with the latest features and security fixes.

## Checking for Updates

### Updates Tab

1. Open the NuGet Package Manager
2. Switch to the **Updates** tab
3. All packages with available updates are listed

### Update Indicators

Packages with updates show:

- Current version
- Latest available version
- Update type (major, minor, patch)

## Updating Single Packages

### From NuGet Manager

1. Go to the Updates tab
2. Select a package to update
3. Choose the target version
4. Select projects to update
5. Click **Update**

### From Solution Explorer

1. Expand project > Dependencies > Packages
2. Right-click on a package
3. Select "Update Package"
4. Choose the new version
5. Click Update

## Updating Multiple Packages

To update several packages at once:

1. In the Updates tab, check multiple packages
2. Select the same version for each (if applicable)
3. Click **Update All Selected**

## Update Strategies

### Patch Updates (Recommended)

Update to the latest patch version (e.g., 1.2.3 → 1.2.4):

- Usually safe
- Contains bug fixes
- No breaking changes

### Minor Updates

Update to the latest minor version (e.g., 1.2.0 → 1.3.0):

- New features added
- Should be backwards compatible
- Test thoroughly

### Major Updates

Update to a new major version (e.g., 1.x → 2.x):

- May contain breaking changes
- Review release notes
- Test extensively
- Update code as needed

## Updating Across Solutions

To maintain consistent versions:

1. Update packages solution-wide
2. Select all projects
3. Apply the same version

## Troubleshooting

### Update Fails

If an update fails:

1. Check for breaking changes in release notes
2. Update dependencies first
3. Verify target framework compatibility
4. Check for conflicts with other packages

### Rollback

To rollback an update:

1. Open the Installed tab
2. Select the package
3. Click the version dropdown
4. Choose the previous version
5. Click Install to downgrade
