// commitlint.config.mjs
export default {
  /* 叠加 Conventional + Gitmoji 两套 preset ----------------------- */
  extends: [
    "@commitlint/config-conventional",
    "gitmoji", // 解析为 commitlint-config-gitmoji
  ],

  /* 指定 Gitmoji 自带的 parser，实现 emoji + type 双解析 ---------- */
  parserPreset: "@gitmoji/parser-opts",

  /* 规则区 ------------------------------------------------------- */
  rules: {
    /* ① Gitmoji：开头必须是官方 emoji ------------- */
    "start-with-gitmoji": [2, "always"], // 插件内置，出错信息里已列出

    /* ② Conventional：保留经典 type ------------- */
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
      ],
    ],
    "header-max-length": [2, "always", 96],
  },
};
