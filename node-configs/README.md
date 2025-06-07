# Node.js 项目配置

TapTap JavaScript/TypeScript 项目的共享配置文件集合。

## 用途

提供一套标准化的开发工具配置，包括：
- AutoCorrect - 中英文文案格式化
- Biome - 代码格式化和 linting
- markdownlint-cli2 - Markdown 文件检查
- Prettier - 代码格式化

## 使用方法

### 安装

```bash
# npm
npm add -D @taptap/node-configs

# deno
deno add -D @taptap/node-configs

# bun
bun add -D @taptap/node-configs
```

### 配置示例

在项目的 `package.json` 中：

```json
{
  "autocorrect": "@taptap/node-configs/autocorrect",
  "biome": "@taptap/node-configs/biome",
  "markdownlint-cli2": "@taptap/node-configs/markdownlint-cli2",
  "prettier": "@taptap/node-configs/prettier",
  "devDependencies": {
    "@taptap/node-configs": "^1.0.0",
    "autocorrect": "^2.8.0",
    "biome": "^2.0.0-beta.6",
    "markdownlint-cli2": "^0.15.0",
    "prettier": "^3.2.0"
  }
}
```

## 包含的配置

- `/autocorrect` - AutoCorrect 中英文排版配置
- `/biome` - Biome 格式化和 linting 配置
- `/markdownlint-cli2` - Markdown 格式检查配置
- `/prettier` - Prettier 代码格式化配置

## 路线图

- ✅ 基础配置文件
- ✅ npm/jsr 发布支持
- ⏳ TypeScript 配置
- ⏳ ESLint 配置

## 下一步行动项

- 添加 TypeScript 共享配置
- 添加 ESLint 共享配置
- 创建配置迁移工具