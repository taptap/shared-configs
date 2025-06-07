# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monorepo containing shared configuration files for the TapTap development team, organized by programming language/runtime:

- `node-configs/` - JavaScript/TypeScript configurations (published as `@taptap/node-configs` on npm/jsr)
- `python-configs/` - Python configurations (published as `taptap-python-configs` on PyPI)
- `rust-configs/` - Rust configurations (published as `taptap-rust-configs` on crates.io)

## Development Commands

### Testing Configurations

To test the Node.js configurations locally:

```bash
# Link the package locally
cd node-configs
npm link

# In a test project
npm link @taptap/node-configs
```

### Validating Configuration Files

```bash
# Validate JSON syntax
node -e "require('./node-configs/autocorrect/autocorrect.json')"
node -e "require('./node-configs/biome/biome.json')"

# Test prettier config
node -e "console.log(require('./node-configs/prettier/index.cjs'))"
```

## Architecture

### Module Structure

Each configuration in `node-configs/` is a dual-format module:

- `index.js` - ESM export
- `index.cjs` - CommonJS export
- `[tool-name].json` or `[tool-name].jsonc` - Raw configuration file

The main `node-configs/package.json` uses the `exports` field to expose subpath imports:

- `@taptap/node-configs/autocorrect`
- `@taptap/node-configs/biome`
- `@taptap/node-configs/markdownlint-cli2`
- `@taptap/node-configs/prettier`

### Configuration Philosophy

All configurations are optimized for:

1. Chinese technical documentation (proper spacing, punctuation rules)
2. Modern JavaScript/TypeScript development practices
3. Cross-platform consistency (LF line endings, consistent formatting)

## README Documentation Standards

### Configuration Library README Requirements

Each configuration library's `README.md` file (e.g., `autocorrect`, `biome`, `markdownlint-cli2`, `prettier`) should follow these standards:

1. **Library Introduction**

   - Brief description of what the tool is
   - Link to the tool's official GitHub repository

2. **Configuration Differences**

   - Clearly list differences between our configuration and defaults
   - Explain the purpose and value of each difference
   - Explain why these adjustments were made

### What NOT to Include

- ❌ Installation instructions
- ❌ Usage methods
- ❌ Run commands
- ❌ Configuration examples
- ❌ Roadmap
- ❌ Next action items

### Example Structure

```markdown
# [Tool Name] Configuration

[Tool Name](GitHub link) is [brief description of the tool's purpose].

## Differences from Default Configuration

### [Configuration Category 1]

- **[Specific setting]**: [Our value] (default: [default value]), [reason for this choice]
- **[Specific setting]**: [Explanation of the change and its impact]

### [Configuration Category 2]

[Continue listing other configuration differences...]

These configurations [summarize the overall value of the configuration].
```

### Rationale

- Usage instructions are already in the main README, avoiding duplicate maintenance
- Users need to understand what optimizations we made, not how to use the tools
- Concise documentation is easier to maintain and read
- Highlights actual value of configurations rather than generic tutorials
