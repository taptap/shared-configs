const { readFileSync } = require("node:fs");
const { join } = require("node:path");

// Read JSONC file (JSON with comments)
const configContent = readFileSync(
	join(__dirname, "index.json"),
	"utf-8",
);

// Simple JSONC parser - remove comments
const jsonString = configContent
	.split("\n")
	.map((line) => {
		// Remove single-line comments
		const commentIndex = line.indexOf("//");
		if (commentIndex !== -1) {
			return line.substring(0, commentIndex);
		}
		return line;
	})
	.join("\n")
	.replace(/\/\*[\s\S]*?\*\//g, ""); // Remove multi-line comments

const config = JSON.parse(jsonString);

module.exports = config;
