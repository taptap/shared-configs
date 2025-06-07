# AutoCorrect 配置

[AutoCorrect](https://github.com/huacnlee/autocorrect) 是一个基于 Rust 编写的工具，用于「自动纠正」或「提醒检查」文案中的中英文、数字、标点符号等问题。

## 与默认配置的区别

### 规则调整

- **启用所有中英文排版规则**：确保中英文之间、中文与数字之间有正确的空格
- **关闭 `space-dash`**：允许中文破折号（——）的使用，不强制在破折号前后加空格
- **启用代码块检查**：`codeblock: 1` 允许检查 Markdown 代码块中的注释

### 拼写检查词汇表

添加了常用技术术语的正确拼写：

- `App Store`
- `Node.js`
- 以及其他常见技术术语如 DNS、GitHub、HTTP、SSL 等

这些配置确保了中文技术文档的排版规范性和术语一致性。
