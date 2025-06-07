# Shared Configs

This monorepo contains shared configuration files for TapTap development team.

## Usage

### For JavaScript/TypeScript (Node.js / Deno / Bun) project

```bash
# for node
npm add -D @taptap/node-configs
# or, for deno
deno add -D @taptap/node-configs
# or, for bun
bun add -D @taptap/node-configs
```

`package.json` example:

```json
{
  "autocorrect": "@taptap/node-configs/autocorrect",
  "biome": "@taptap/node-configs/biome",
  "markdownlint-cli2": "@taptap/node-configs/markdownlint-cli2",
  "prettier": "@taptap/node-configs/prettier",
  "devDependencies": {
    "@taptap/node-configs": "^1.2.0",
    "autocorrect": "^2.8.0",
    "biome": "^2.0.0-beta.6",
    "markdownlint-cli2": "^0.15.0",
    "prettier": "^3.2.0"
  }
}
```

### For Python project

```bash
uv pip install -U taptap-python-configs
```

### For Rust project

```bash
cargo add --dev taptap-rust-configs
```

## Directory Structure

```text
.
├─ node-configs/
├─ python-configs/
├─ rust-configs/
├─ package.json
└─ .github/
    └─ workflows/
        ├─ publish-node.yml
        ├─ publish-python.yml
        └─ publish-rust.yml
```

## License

This project is licensed under the MIT License.
