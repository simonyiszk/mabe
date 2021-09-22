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
			boxShadow: {
				'figma': '0px 4px 4px rgba(0, 0, 0, 0.25)',
			}
		},

		margin: (theme, { negative }) => ({
			auto: "auto",
			...negative(theme("spacing")),
		}),
	},
	corePlugins: {
		animation: false,
	},
};
