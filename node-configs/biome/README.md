# Biome 配置

TapTap 项目的共享 Biome 配置。

## 用途

Biome 是一个快速的格式化器和 linter，用于 JavaScript、TypeScript、JSX 和 JSON 文件。它旨在替代 ESLint、Prettier 等多个工具。

## 使用方法

### 安装

```bash
bun add -D @taptap/node-configs
```

### 配置

在项目根目录的 `package.json` 中添加：

```json
{
  "biome": "@taptap/node-configs/biome"
}
```

### 运行

```bash
# 格式化
bunx biome format --write .

# 检查代码
bunx biome check .

# 自动修复
bunx biome check --write .
```

## 路线图

- ✅ 基础配置文件
- ✅ 格式化规则
- ✅ Linter 规则
- ⏳ 项目特定规则覆盖

## 下一步行动项

- 优化规则配置
- 添加更多自定义规则
- 性能基准测试
