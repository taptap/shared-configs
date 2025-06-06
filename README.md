# Shared Configs

This monorepo contains shared configuration files for TapTap development team.

## Usage

### For Node.js project

```bash
bun add -D @taptap/shared-configs/autocorrect
bun add -D @taptap/shared-configs/biome
bun add -D @taptap/shared-configs/markdownlint
bun add -D @taptap/shared-configs/prettier
```

`package.json` example:

```json
{
  "autocorrect": "@taptap/shared-configs/autocorrect",
  "biome": "@taptap/shared-configs/biome",
  "markdownlint": "@taptap/shared-configs/markdownlint",
  "prettier": "@taptap/shared-configs/prettier"
}
```

### For Python project

```bash
uv pip install -U @taptap/shared-configs/ruff
```

## Directory Structure

```text
.
├─ biome/
├─ markdownlint/
├─ prettier/
├─ ruff/
├─ rustfmt/
├─ package.json
├─ Cargo.toml
└─ .github/
    └─ workflows/
        ├─ publish-node.yml
        ├─ publish-python.yml
        └─ publish-rust.yml
```

## License

This project is licensed under the MIT License.
