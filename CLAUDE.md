# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an HTML showcase platform for client review and demonstration. It automatically discovers HTML files in nested directory structures and presents them through a web-based file browser with collapsible folder hierarchies.

## Architecture

### Core Components

**index.html**: The main showcase interface featuring:
- Automated HTML file discovery and presentation
- Nested folder tree browser with 5-level depth limit
- Dual structure support (legacy flat + modern nested)
- File preview functionality with direct/preview links
- Responsive design with mobile support

**generate-files.js**: File discovery and structure generation script that:
- Recursively scans directories for HTML files (excludes index.html)
- Creates both flat and nested data structures for backward compatibility
- Generates `files.json` with file metadata and folder hierarchies
- Implements 5-level depth protection against infinite nesting

**files.json**: Auto-generated file registry containing:
- `files[]`: Flat array of all discovered HTML file paths
- `structure{}`: Legacy flat folder organization  
- `nestedStructure{}`: Hierarchical folder tree with `_files` arrays at each level

### Data Structure Flow

1. HTML files are organized in nested directories (e.g., `Rule Benders/Business Owner/Web Lesson/`)
2. `generate-files.js` creates dual structures: flat for compatibility, nested for tree navigation
3. `index.html` detects structure type and renders appropriate interface
4. Nested structure uses `_files` key to store file arrays at each folder level

## Common Commands

```bash
# Generate/update file discovery
npm run build

# Development (same as build)
npm run dev

# Manual file discovery
node generate-files.js
```

## Development Notes

### File Discovery Logic
- Automatically excludes: `node_modules`, `.git`, `.vercel`, `dist`, `build`, `index.html`
- Processes only `.html` files
- Maintains relative paths from project root

### Nested Structure Format
```javascript
{
  "FolderName": {
    "_files": ["file1.html", "file2.html"],
    "SubFolder": {
      "_files": ["nested.html"]
    }
  }
}
```

### Adding New Content
1. Place HTML files in organized folder structure
2. Run `npm run build` to update file registry
3. Commit changes - Vercel auto-deploys with updated file discovery

The system prioritizes nested navigation when available, falling back to legacy flat structure for compatibility.