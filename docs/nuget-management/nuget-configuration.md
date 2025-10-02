---
sidebar_position: 8
---

# NuGet Configuration Management

Configure package sources and NuGet settings.

## Configuration Files

NuGet uses hierarchical configuration:

- Machine-level: `%ProgramFiles(x86)%\NuGet\Config`
- User-level: `%AppData%\NuGet\NuGet.Config`
- Solution-level: `nuget.config` in solution directory

## Managing Package Sources

### Adding a Source

1. Open NuGet Manager settings
2. Click "Add Source"
3. Enter name and URL
4. Save configuration

### Removing a Source

1. Open NuGet Manager settings
2. Select the source
3. Click "Remove"
4. Confirm removal

### Enabling/Disabling Sources

Toggle sources on/off without removing them:

1. Open NuGet Manager settings
2. Use the checkbox next to each source
3. Disabled sources won't be searched

## Common Package Sources

### nuget.org (Default)

```
https://api.nuget.org/v3/index.json
```

### Azure Artifacts

```
https://pkgs.dev.azure.com/{organization}/_packaging/{feed}/nuget/v3/index.json
```

### Local Folders

```
C:\LocalPackages
```

## Configuration Options

Key settings you can configure:

- Default push source
- Package sources
- Credentials
- Proxy settings
- Cache locations

## nuget.config Example

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <packageSources>
    <add key="nuget.org" value="https://api.nuget.org/v3/index.json" />
    <add key="MyPrivateFeed" value="https://my-feed.com/nuget" />
  </packageSources>
  <packageSourceCredentials>
    <MyPrivateFeed>
      <add key="Username" value="user" />
      <add key="ClearTextPassword" value="password" />
    </MyPrivateFeed>
  </packageSourceCredentials>
</configuration>
```

## Best Practices

- Keep nuget.config in source control
- Don't commit credentials
- Use credential injection for security
- Document custom feeds for team members

## Troubleshooting

### Configuration Not Loading

If configuration isn't applied:

1. Check file location
2. Verify XML syntax
3. Restart VS Code
4. Check for conflicts between config levels
