---
sidebar_position: 4
---

# Text Tools

Comprehensive text manipulation utilities including encoders, decoders, and analysis tools.

## Overview

C# Dev Tools includes various text manipulation tools for common development tasks.

## Encoders/Decoders

### Base64 Tool

Encode and decode Base64 strings:

**Features:**
- Encode text to Base64
- Decode Base64 to text
- Handle binary data
- Copy results easily

**Usage:**
1. Open "Base64 Tool" from Tools
2. Paste text or Base64
3. Click Encode or Decode
4. Copy result

### URL Encoder

Encode and decode URLs:

**Features:**
- Encode special characters
- Decode percent-encoded URLs
- Component encoding
- Full URL encoding

### HTML Encoder

Encode and decode HTML entities:

**Features:**
- Encode special characters (`&`, `<`, `>`, `"`, `'`)
- Decode HTML entities
- Named and numeric entities
- Preserve formatting

## JSON Tools

### JSON Formatter

Format and validate JSON:

**Features:**
- Pretty print JSON
- Minify JSON
- Validate syntax
- Error highlighting

**Usage:**
1. Open "JSON Tool"
2. Paste JSON
3. Click Format or Minify
4. Copy formatted result

### JSON to C# Converter

Convert JSON to C# classes:

(See [File Templates - JSON to C#](../file-templates/json-to-csharp.md) for details)

## JWT Decoder

Decode and inspect JWT tokens:

**Features:**
- Decode header
- Decode payload
- View claims
- Check expiration
- Validate signature (if key provided)

**Usage:**
1. Open "JWT Tool"
2. Paste JWT token
3. View decoded sections
4. Inspect claims

## Text Analysis

### Regex Tester

Test and debug regular expressions:

**Features:**
- Live pattern matching
- Match highlighting
- Capture groups
- Multiple matches
- Pattern library

**Usage:**
1. Open "Regex Tester"
2. Enter pattern
3. Enter test text
4. View matches
5. Test and refine

### Text Comparer

Compare two text blocks:

**Features:**
- Side-by-side comparison
- Highlight differences
- Line-by-line diff
- Unified diff view
- Export diff

**Usage:**
1. Open "Text Comparer"
2. Paste original text
3. Paste modified text
4. View differences

## String Utilities

### Case Converter

Convert between text cases:

- **camelCase**
- **PascalCase**
- **snake_case**
- **kebab-case**
- **UPPER CASE**
- **lower case**

### Hash Generator

Generate hashes from text:

**Supported algorithms:**
- MD5
- SHA-1
- SHA-256
- SHA-512

**Usage:**
1. Open "Hash Generator"
2. Enter text
3. Select algorithm
4. Copy hash

## Advanced Tools

### Markdown Preview

Preview markdown formatting:

- Live preview
- GitHub-flavored markdown
- Syntax highlighting
- Export to HTML

### XML Formatter

Format and validate XML:

- Pretty print
- Minify
- Validate syntax
- XPath testing

## Accessing Tools

All text tools available in:

1. Solution Explorer → Tools
2. Command Palette → "Text Tools"
3. Right-click editor → "Text Tools"

## Common Features

### Copy to Clipboard

All tools support:

- One-click copy
- Keyboard shortcuts
- Batch operations
- Format preservation

### History

Tools maintain history:

- Recent inputs
- Frequently used
- Quick recall
- Clear history

## Use Cases

### API Development

- Encode/decode API payloads
- Test JWT tokens
- Format JSON responses
- Generate request hashes

### Data Processing

- Convert text formats
- Parse encoded data
- Compare outputs
- Validate structures

### Security

- Decode tokens
- Verify hashes
- Check encodings
- Analyze payloads

### Debugging

- Format JSON logs
- Decode error messages
- Compare expected/actual
- Parse encoded data

## Best Practices

- Validate before encoding
- Test regex patterns thoroughly
- Use appropriate hash algorithms
- Keep JWT tokens secure
- Verify decoded data
- Compare formatted output

## Tips

### Productivity

- Use keyboard shortcuts
- Save common patterns
- Bookmark frequently used tools
- Chain tool operations

### Accuracy

- Double-check encodings
- Validate JSON before formatting
- Test regex with edge cases
- Verify hash algorithms

## Troubleshooting

### Tool Not Working

If tool doesn't work:

1. Check input format
2. Verify data validity
3. Try different encoding
4. Check for special characters

### Invalid Output

If output is wrong:

1. Verify input is correct
2. Check encoding/decoding direction
3. Look for escaped characters
4. Try alternative method

### Performance Issues

If tool is slow:

1. Reduce input size
2. Simplify regex patterns
3. Clear history
4. Restart tool
