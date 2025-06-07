# markdownlint-cli2 配置

TapTap 项目的共享 markdownlint-cli2 配置。

## 用途

[markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) 是一个用于检查 Markdown 文件格式和风格的工具，帮助保持文档的一致性和可读性。

## 使用方法

### 安装

```bash
bun add -D @taptap/node-configs
```

### 配置

在项目根目录的 `package.json` 中添加：

```json
{
  "markdownlint-cli2": "@taptap/node-configs/markdownlint-cli2"
}
```

### 运行

```bash
# 检查所有 Markdown 文件
bunx markdownlint "**/*.md"

# 自动修复
bunx markdownlint --fix "**/*.md"

# 忽略 node_modules
bunx markdownlint "**/*.md" --ignore node_modules
```

## 路线图

- ✅ 基础配置文件
- ✅ 符合中文文案排版指北的规则
- ⏳ 自定义规则
- ⏳ VS Code 集成配置

## 下一步行动项

- 创建自定义规则
- 添加 CI/CD 集成示例
- 提供 VS Code 配置模板
