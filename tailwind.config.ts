import type { Config } from "tailwindcss";

export default {
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: "100ch",
					},
				},
			},
		},
	},

	plugins: [],
} satisfies Config;
