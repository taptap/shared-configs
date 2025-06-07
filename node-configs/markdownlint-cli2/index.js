import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

export default config;
