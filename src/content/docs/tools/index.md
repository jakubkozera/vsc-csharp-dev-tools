---
title: Tools
sidebar:
  order: 1
---

Additional productivity tools and utilities for enhanced development workflow, all available in the **Tools** view of the C# Dev Tools sidebar.

## Overview

The Tools view groups everything into the following sections:

- **Bookmarks** – Mark and navigate code locations ([details](./bookmarks/))
- **TODOs** – Aggregated `TODO`/`HACK`/`FIXME`/`NOTE` comments across the workspace
- **Text** – Regex tester, text comparer, text analyzer, string escaper
- **Encoders / Decoders** – JWT, HTML, URL, Base64
- **Generators** – UUID, CRON expression, hash, Lorem Ipsum
- **Icons** – Browse Tabler / built-in icons
- **User Interface** – Color tools and UI design helpers ([details](./ui-tools/))
- **Diagrams** – Excalidraw integration ([details](./diagrams/))
- **Security** – Secret scanning ([details](./secret-scanning/))
- **Database** – Microsoft SQL Server manager
- **Notebooks** – C# script notebooks (`.csnb`)
- **Runners** – Quick run/debug entry points for DI-based projects, without starting the whole application ([details](./runners/))
- **Azure** – Service Bus Studio and Application Insights Explorer integrations

## Bookmarks

Mark important code locations for quick navigation:

- Visual indicators for bookmarked lines
- Global navigation between bookmarks
- Optional labels per bookmark
- Dedicated tree view with file grouping
- Keyboard shortcuts for toggle / navigate

## TODOs

Aggregates `TODO`, `HACK`, `FIXME` and `NOTE` comments from indexed C# files:

- Grouped by file
- Click to jump to the comment line
- Live count shown next to the section header
- Updates as you edit files

## Text Tools

Utilities for text manipulation:

- **Regex Tester** – test regex patterns with live highlighting
- **Text Comparer** – diff two pieces of text
- **Text Analyzer & Utilities** – word/character counts, case conversion, sort/dedup, etc.
- **String Escaper** – escape/unescape for C#, JSON, XML, etc.

## Encoders / Decoders

- **JWT** – decode tokens (header, payload, signature) and validate
- **HTML** – encode/decode HTML entities
- **URL** – percent-encode/decode URLs
- **Base64** – encode/decode strings and files

## Generators

- **UUID Generator** – generate v1/v4 UUIDs
- **CRON Generator** – build cron expressions with a visual editor
- **Hash Generator** – MD5, SHA1, SHA256, SHA512, etc.
- **Lorem Ipsum Generator** – placeholder text

## Icons

Browse and copy SVG / Tabler icons used by the extension and your code.

## User Interface Tools

Design and preview UI elements:

- Color converter (HEX/RGB/HSL/…)
- Color mixer
- Color palette generator
- Gradient maker
- Contrast checker (WCAG)
- Cubic Bezier editor

## Diagrams

Create and manage technical diagrams using a fully embedded Excalidraw editor:

- Global diagrams (per user)
- **Workspace diagrams** stored in `.vscodecsdt/Diagrams` so they can be checked into source control and shared with the team
- Whiteboard-style drawing
- Export to PNG / SVG
- Backward compatible with diagrams from previous global locations

## Security

[Secret Scanning](./secret-scanning/) powered by TruffleHog:

- Filesystem and Git history scanning
- 700+ secret detectors
- Active secret verification
- Comprehensive security reporting

## Database

A built-in **Microsoft SQL Server Manager** webview:

- Connect to local or remote SQL Server instances
- Browse databases, tables and views
- Run ad-hoc queries with a results grid

## Notebooks

C# notebook (`.csnb`) experience powered by an in-process Roslyn host:

- Execute C# code cells with persistent state
- `#!nuget` magic command to add NuGet packages on the fly
- `#!dbcontext` magic command to scaffold an EF Core `DbContext` (SQL Server, SQLite, PostgreSQL, MySQL)
- Inline rich object inspection

## Runners

Quick run / debug entry points for runnable projects in the solution. Useful when you want to start a specific app without opening the Run/Debug view.

## Azure

Integrations with curated Azure tooling extensions:

- **Service Bus Studio** – installs and opens the Azure Service Bus Explorer extension; smart suggestions when Azure Service Bus packages are detected in the solution
- **Application Insights** – installs and opens the Azure Application Insights Explorer extension to browse Application Insights / Log Analytics data directly in VS Code

## Accessing Tools

1. Open the **C# Dev Tools** activity bar view
2. Expand the **Tools** view
3. Expand the section you need
4. Click the entry – the tool opens in a webview, panel, or external view

## Common Features

- **Webview-based** – rich, interactive UIs with live preview and copy-to-clipboard
- **Standalone** – most tools work without an open solution
- **Theming** – follows the active VS Code theme
- **Telemetry-tracked** – usage is captured anonymously to prioritise future work

## Benefits

- Reduce context switching to the browser or external apps
- Keep an all-in-one development environment
- Consistent UI across all utilities
- Lightweight and on-demand activation
