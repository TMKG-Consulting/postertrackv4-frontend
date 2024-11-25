import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				appBlack: "#140100",
				primary: "#ED3237",
			},
			fontFamily: {
				catamaran: "var(--font-catamaran)",
			},
		},
	},
	plugins: [],
} satisfies Config;
