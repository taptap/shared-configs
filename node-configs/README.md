# @taptap/node-configs

TapTap JavaScript/TypeScript 项目的共享配置文件集合。

## 安装

```bash
npx jsr add -D @taptap/node-configs
# or bun
bunx jsr add -d @taptap/node-configs
# or deno
deno add -D jsr:@taptap/node-configs
# or yarn 4.9+
yarn add -D jsr:@taptap/node-configs
# or pnpm 10.9+
pnpm add -D jsr:@taptap/node-configs
```

## 使用方法

### AutoCorrect

在项目根目录创建 `.autocorrectrc` 文件：

```json
{
  "extends": "@taptap/node-configs/autocorrect"
}
```

运行检查：

```bash
npm run autocorrect --lint
# 或自动修复
autocorrect --fix
```

### Biome

在项目根目录创建 `biome.json` 文件：

```json
{
  "$schema": "https://biomejs.dev/schemas/2.2.6/schema.json",
  "extends": ["@taptap/node-configs/biome"]
}
```

运行检查：

```bash
npm run biome check
# 或自动修复
npm run biome check --write
```

### markdownlint-cli2

在项目根目录创建 `.markdownlint-cli2.json` 文件：

```json
{
  "extends": "@taptap/node-configs/markdownlint-cli2"
}
```

运行检查：

```bash
npm run markdownlint-cli2 "**/*.md"
# 或自动修复
npm run markdownlint-cli2 "**/*.md" --fix
```

### Prettier

在项目根目录创建 `.prettierrc` 文件：

```json
"@taptap/node-configs/prettier"
```

运行格式化：

```bash
npm run prettier --write .
```

## 配置详情

### AutoCorrect 配置

[AutoCorrect](https://github.com/huacnlee/autocorrect) 是一个基于 Rust 编写的工具，用于「自动纠正」或「提醒检查」文案中的中英文、数字、标点符号等问题。

#### 与默认 autocorrect-node 配置的区别

##### 规则调整

- **启用所有中英文排版规则**：确保中英文之间、中文与数字之间有正确的空格
- **关闭 `space-dash`**：允许中文破折号（——）的使用，不强制在破折号前后加空格
- **启用代码块检查**：`codeblock: 1` 允许检查 Markdown 代码块中的注释

##### 拼写检查词汇表

添加了常用技术术语的正确拼写：

- `App Store`
- `Node.js`
- 以及其他常见技术术语如 DNS、GitHub、HTTP、SSL 等

这些配置确保了中文技术文档的排版规范性和术语一致性。

### Biome 配置

[Biome](https://biomejs.dev/) 是一个快速的格式化器和 linter，用于 JavaScript、TypeScript、JSX 和 JSON 文件。它旨在替代 ESLint、Prettier 等多个工具。

#### 与默认 biome 配置的区别

##### 格式化设置

- **缩进**：使用 2 个空格而非默认的制表符
- **行宽**：设置为 96 字符（默认 80），适应现代显示器宽度

##### 版本控制集成

- **启用 Git 集成**：自动读取 `.gitignore` 文件
- **智能忽略**：避免处理版本控制忽略的文件

这些配置优化了开发体验，减少了不必要的格式化冲突，并提高了工具性能。

### markdownlint-cli2 配置

[markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) 是一个用于检查 Markdown 文件格式和风格的工具，帮助保持文档的一致性和可读性。

#### 与默认配置的区别

##### 禁用的规则

- **`line-length`**：不限制行长度，适应中文长文档和表格
- **`no-duplicate-heading`**：允许重复的标题内容，便于多个相同名称的章节
- **`no-empty-links`**：允许空链接，方便文档模板和占位符

##### 其他设置

- **`fix: true`**：启用自动修复功能
- **`gitignore: true`**：自动读取 `.gitignore` 文件，忽略版本控制排除的文件
- **`ignores: ["node_modules"]`**：忽略 node_modules 目录

这些调整使配置更适合中文技术文档的编写习惯，同时保持基本的格式规范。

### Prettier 配置

[Prettier](https://prettier.io/) 是一个固执己见的代码格式化工具，支持多种语言，通过解析代码并重新打印来确保一致的代码风格。

#### 与默认 prettier 配置的区别

- **行宽**：96 字符（默认 80），适应现代显示器

#### 文件类型覆盖

- **Python 文件**：使用 4 个空格缩进，符合 PEP 8 规范

这些配置平衡了代码可读性和现代开发实践，特别适合多语言混合项目。

## 许可证

MIT
