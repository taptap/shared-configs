/** @type {import("prettier").Config} */
module.exports = {
	// Line length
	printWidth: 100,

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
