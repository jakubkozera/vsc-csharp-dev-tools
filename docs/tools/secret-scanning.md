---
sidebar_position: 5
---

# Secret Scanning

Comprehensive security tool for detecting exposed secrets, credentials, and sensitive information in your codebase.

![Secret Scanning Interface](../../docs/features/img/secret-scanning.png)

## Overview

C# Dev Tools includes a powerful secret scanning feature that helps protect your applications by detecting potentially exposed secrets, API keys, passwords, and other sensitive information in your codebase. The tool uses [TruffleHog](https://github.com/trufflesecurity/trufflehog), an industry-standard secret detection engine, to perform comprehensive scans.

## What Gets Scanned

The secret scanner analyzes various types of content in your workspace:

### File Types
- Source code files (C#, JavaScript, Python, etc.)
- Configuration files (appsettings.json, web.config, etc.)
- Environment files (.env, .env.local)
- Documentation files (README.md, docs)
- Script files (PowerShell, Bash, Batch)

### Secret Types Detected
- **API Keys**: AWS, Azure, Google Cloud, GitHub tokens
- **Database Credentials**: Connection strings, passwords
- **Authentication Tokens**: JWT tokens, OAuth secrets
- **Encryption Keys**: Private keys, certificates
- **Third-party Services**: Slack tokens, Discord webhooks
- **Custom Patterns**: User-defined secret patterns

## How Secret Scanning Works

### Detection Process

1. **File Discovery**: The scanner recursively searches your workspace for supported file types
2. **Content Analysis**: Each file is analyzed using advanced pattern matching and entropy analysis
3. **TruffleHog Integration**: Leverages TruffleHog's detection rules and algorithms
4. **Verification**: Attempts to verify found secrets when possible
5. **Reporting**: Generates a comprehensive report with findings

### TruffleHog Integration

The extension integrates with [TruffleHog](https://github.com/trufflesecurity/trufflehog), a powerful open-source secret scanner:

- **High Accuracy**: Uses machine learning and entropy analysis to reduce false positives
- **Extensive Database**: Detects over 700+ secret types from various services
- **Active Verification**: Attempts to verify secrets with their respective services
- **Regular Updates**: Pattern database is continuously updated with new secret types
- **Git History Scanning**: Can scan through commit history (when configured)

### Scanning Modes

**Filesystem Scan**
- Scans current workspace files
- Fast and lightweight
- Ideal for quick security checks

**Git History Scan** 
- Scans through commit history
- Detects secrets in previous commits
- Comprehensive but slower
- Useful for thorough audits

## Using Secret Scanning

### Starting a Scan

1. Open Solution Explorer
2. Navigate to Tools section
3. Click on "Secret Scanning"
4. Choose scan type (Filesystem or Git History)
5. Wait for scan completion

### Scan Results

The scan results provide detailed information:

**Active Secrets**
- Number of verified active secrets
- High-priority items requiring immediate attention

**All Findings**
- Total number of potential secrets detected
- Includes both verified and unverified findings

**File Coverage**
- Number of files scanned
- Scan duration and performance metrics

**Ignored Secrets**
- Previously reviewed and ignored findings
- Helps track acknowledged false positives

### Managing Findings

**Review Process**
1. Examine each finding carefully
2. Verify if it's a real secret or false positive
3. Take appropriate action (rotate, remove, or ignore)
4. Mark findings as reviewed

**Actions Available**
- **View Details**: See file location and context
- **Open File**: Navigate directly to the finding
- **Ignore**: Mark as false positive
- **Copy**: Copy finding details for documentation

## Security Best Practices

### Immediate Actions

When secrets are found:

1. **Rotate Compromised Secrets**: Change API keys, passwords immediately
2. **Remove from Code**: Delete secrets from source code
3. **Use Secure Storage**: Implement proper secret management
4. **Review Git History**: Check if secrets exist in previous commits

### Prevention Strategies

**Environment Variables**
```csharp
// Instead of hardcoded secrets
var apiKey = "sk-1234567890abcdef"; // ❌ Don't do this

// Use environment variables
var apiKey = Environment.GetEnvironmentVariable("API_KEY"); // ✅ Better
```

**Configuration Files**
```json
// appsettings.json - Use user secrets in development
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=localhost;..."
  }
}
```

**User Secrets** (Development)
```bash
dotnet user-secrets set "ConnectionStrings:DefaultConnection" "your-connection-string"
```

**Azure Key Vault** (Production)
```csharp
// Use Azure Key Vault for production secrets
var client = new SecretClient(new Uri(keyVaultUrl), new DefaultAzureCredential());
var secret = await client.GetSecretAsync("database-connection");
```

### Secure Development Workflow

1. **Pre-commit Scanning**: Run scans before committing code
2. **CI/CD Integration**: Include secret scanning in build pipelines
3. **Regular Audits**: Schedule periodic comprehensive scans
4. **Team Training**: Educate team on secure coding practices
5. **Secret Management**: Implement proper secret storage solutions

## Resources

- [TruffleHog GitHub Repository](https://github.com/trufflesecurity/trufflehog)
- [TruffleHog Documentation](https://trufflesecurity.com/trufflehog)
- [OWASP Secret Management Guide](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
- [Azure Key Vault Documentation](https://docs.microsoft.com/en-us/azure/key-vault/)
- [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/)

The secret scanning tool is an essential component of a secure development workflow. Regular use helps maintain the security posture of your applications and prevents accidental exposure of sensitive information.