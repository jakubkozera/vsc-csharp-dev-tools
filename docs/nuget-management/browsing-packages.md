---
sidebar_position: 2
---

# Browsing NuGet Packages

Search and discover packages from nuget.org and private feeds.

## Opening the Browse Tab

1. Open the NuGet Package Manager
2. Click the **Browse** tab at the top
3. The browse interface will display popular and recently updated packages

## Searching for Packages

### Basic Search

1. Enter a package name or keyword in the search box
2. Press Enter or click the search icon
3. Results will appear below the search box

### Search Tips

- **Exact names**: Search for `Newtonsoft.Json` to find a specific package
- **Keywords**: Search for `logging` to find all logging-related packages
- **Partial names**: Type part of a name like `entity` to find Entity Framework packages

## Viewing Package Details

Click on any package in the search results to view:

- **Description**: What the package does
- **Version**: Available versions
- **Downloads**: Total download count
- **Authors**: Package creators
- **License**: License information
- **Project URL**: Link to project website
- **Dependencies**: Required packages

## Package Versions

### Viewing Available Versions

1. Select a package from the search results
2. Click the version dropdown
3. All available versions are listed (newest first)

### Version Types

- **Stable versions**: Production-ready releases (e.g., 1.0.0)
- **Pre-release versions**: Beta/alpha releases (e.g., 1.0.0-beta)
- **Legacy versions**: Older releases

### Include Pre-release

Toggle "Include prerelease" to show or hide pre-release versions.

## Package Information

### Understanding Package Metadata

**Download Count**: Indicates popularity and community trust

**Last Updated**: Shows how actively maintained the package is

**Compatible Frameworks**: Lists which .NET versions are supported

**Dependencies**: Shows required packages that will be installed

## Package Sources

### Configuring Sources

The browser searches configured package sources:

1. nuget.org (default)
2. Custom private feeds
3. Local package folders

To manage sources, see [NuGet Configuration](./nuget-configuration.md).

## Troubleshooting

### No Search Results

If you get no results:

1. Check your internet connection
2. Verify package source is accessible
3. Try searching with different keywords
4. Check if the source URL is correct

### Package Not Found

If a specific package doesn't appear:

1. Verify the package exists on nuget.org
2. Check if you're using the correct source
3. Ensure pre-release is enabled if needed
4. Verify the package supports your target framework
