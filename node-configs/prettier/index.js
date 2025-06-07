/** @type {import("prettier").Config} */
const config = {
	// Line length
	printWidth: 96,
	// Overrides for specific file types
	overrides: [
		{
			files: "*.py",
			options: {
				tabWidth: 4,
			},
		},
	],
};

export default config;
