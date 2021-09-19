const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			transitionTimingFunction: {
				DEFAULT: defaultTheme.transitionTimingFunction.out,
			},
			colors: {
				turquoise: {
					light: "#A5FFD6",
					dark: "#84DCC6",
				},
				pink: {
					light: "#FFA69E",
					dark: "#FF686B",
				},
				gray: {
					DEFAULT: "#222222",
				},
			},
		},
	},
	corePlugins: {
		animation: false,
	},
};
