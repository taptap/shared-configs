# AutoCorrect 配置

TapTap 项目的共享 AutoCorrect 配置。

## 用途

AutoCorrect 是一个基于 Rust 编写的工具，用于「自动纠正」或「提醒检查」文案中的中英文、数字、标点符号等问题。

## 使用方法

### 安装

```bash
bun add -D @taptap/node-configs
```

### 配置

在项目根目录的 `package.json` 中添加：

```json
{
  "autocorrect": "@taptap/node-configs/autocorrect"
}
```

### 运行

```bash
# 检查
bunx autocorrect --lint

# 自动修复
bunx autocorrect --fix
```

## 路线图

- ✅ 基础配置文件
- ✅ 自定义词汇表
- ✅ 项目特定规则

## 下一步行动项

- 添加更多 TapTap 专有词汇
- 配置文件类型映射
- 集成到 CI/CD 流程
