# Prettier 配置

TapTap 项目的共享 Prettier 配置。

## 用途

Prettier 是一个固执己见的代码格式化工具，支持多种语言，通过解析代码并重新打印来确保一致的代码风格。

## 使用方法

### 安装

```bash
bun add -D @taptap/node-configs
```

### 配置

在项目根目录的 `package.json` 中添加：

```json
{
  "prettier": "@taptap/node-configs/prettier"
}
```

### 运行

```bash
# 检查格式
bunx prettier --check .

# 格式化所有文件
bunx prettier --write .

# 格式化特定文件类型
bunx prettier --write "**/*.{js,jsx,ts,tsx,json,md}"
```

## 路线图

- ✅ 基础配置文件
- ✅ 文件类型特定覆盖
- ⏳ 插件支持（如 prettier-plugin-tailwindcss）
- ⏳ 与其他工具的集成配置

## 下一步行动项

- 添加常用 Prettier 插件配置
- 提供 .prettierignore 模板
- 创建与 ESLint 的集成示例
