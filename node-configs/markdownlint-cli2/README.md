# markdownlint-cli2 配置

[markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) 是一个用于检查 Markdown 文件格式和风格的工具，帮助保持文档的一致性和可读性。

## 与默认配置的区别

### 启用的规则

- **MD007**：无序列表缩进设置为 2 个空格
- **MD010**：禁止使用制表符，强制使用空格
- **MD029**：有序列表编号风格设置为 `one_or_ordered`，允许灵活编号
- **MD033**：允许使用部分 HTML 标签（`details`、`summary`、`sub`、`sup`、`kbd`、`br`）

### 禁用的规则

- **MD013**：不限制行长度，适应中文长文档
- **MD024**：允许重复的标题内容
- **MD037**：允许强调标记内有空格
- **MD042**：允许空链接

这些调整使配置更适合中文技术文档的编写习惯，同时保持基本的格式规范。
