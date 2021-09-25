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
			maxWidth: {
				wide: "1800px",
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
			boxShadow: {
				event: "9px 1px 38px 0px rgba(0, 0, 0, 0.25)",
				gallery: "0px 4px 4px rgba(0, 0, 0, 0.25)",
				mainPageCards: "7px 8px 45px -2px rgba(0, 0, 0, 0.25)",
			},
			spacing: {
				22: "5.5rem",
			},
			fontSize: {
				"6.25xl": "4rem",
			},
			borderRadius: {
				mainPage: "45px",
				gallery: "10px",
			},
			fontFamily: {
				roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
				"roboto-slab": ["Roboto Slab", ...defaultTheme.fontFamily.serif],
			},
		},
	},
	corePlugins: {
		animation: false,
	},
};
