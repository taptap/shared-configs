const { readFileSync } = require("node:fs");
const { join } = require("node:path");

const config = JSON.parse(
	readFileSync(join(__dirname, "index.json"), "utf-8"),
);

module.exports = config;
