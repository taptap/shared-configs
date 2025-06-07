/** @type {import("prettier").Config} */
module.exports = {
	// Line length
	printWidth: 100,

	// Indentation
	tabWidth: 2,
	useTabs: false,

	// Semicolons
	semi: true,

	// Quotes
	singleQuote: true,
	quoteProps: "as-needed",
	jsxSingleQuote: false,

	// Trailing commas
	trailingComma: "all",

	// Brackets
	bracketSpacing: true,
	bracketSameLine: false,

	// Arrow functions
	arrowParens: "always",

	// Format
	proseWrap: "preserve",
	htmlWhitespaceSensitivity: "css",
	endOfLine: "lf",
	embeddedLanguageFormatting: "auto",
	singleAttributePerLine: false,

	// Overrides for specific file types
	overrides: [
		{
			files: "*.md",
			options: {
				proseWrap: "always",
			},
		},
		{
			files: ["*.json", "*.json5", "*.jsonc"],
			options: {
				singleQuote: false,
			},
		},
		{
			files: ["*.yml", "*.yaml"],
			options: {
				singleQuote: false,
			},
		},
	],
};
