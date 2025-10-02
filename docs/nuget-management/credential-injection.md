---
sidebar_position: 6
---

# Credential Injection for Private Feeds

Securely access private NuGet feeds with automatic credential injection.

## Overview

Credential injection allows you to access authenticated NuGet feeds without storing passwords in configuration files.

## Supported Platforms

- Azure Artifacts
- Private NuGet servers
- Authenticated package sources
- Corporate NuGet feeds

## Configuration

### Setting Up Credentials

1. Open the NuGet Manager
2. Click the settings icon
3. Select "Configure Credentials"
4. Add your feed URL and credentials

### Credential Storage

Credentials are stored securely:

- Encrypted in VS Code's secret storage
- Never stored in plain text
- Per-user configuration
- Not committed to source control

## Using Azure Artifacts

For Azure DevOps feeds:

1. Get your Personal Access Token (PAT)
2. Configure it in the NuGet Manager
3. The extension will inject credentials automatically

## Authentication Flow

When accessing a private feed:

1. Extension detects authenticated feed
2. Retrieves stored credentials
3. Injects them into the NuGet request
4. Package operation proceeds normally

## Troubleshooting

### Authentication Failed

If authentication fails:

1. Verify credentials are correct
2. Check PAT hasn't expired
3. Ensure proper feed permissions
4. Reconfigure credentials

### Feed Not Accessible

If you can't access the feed:

1. Verify feed URL is correct
2. Check network connectivity
3. Ensure you have access rights
4. Test credentials in a browser
