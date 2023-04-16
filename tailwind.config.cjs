/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/tw-elements/dist/js/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				'pp': {
					'001': {
						'light': '#0000FF',
						'classic': '#000080',
						'dark': '#000040',
						'text': '#ffffff',
						'lighter': '#4D4DFF',
						'darker': '#000033',
					},
					'002': {
						'light': '#FFE6F2',
						'classic': '#FFB3DE',
						'dark': '#FF7FC2',
						'text': '#000000',
						'lighter': '#FFE6FF',
						'darker': '#804D4D',
					},
					'003': {
						'light': '#D1FF80',
						'classic': '#A7FC00',
						'dark': '#6BB800',
						'text': '#000000',
						'lighter': '#E6FFE6',
						'darker': '#004D00',
					},
					'004': {
						'light': '#0040BF',
						'classic': '#0080FF',
						'dark': '#80BFFF',
						'text': '#ffffff',
						'lighter': '#66a3ff',
						'darker': '#0040ff',
					},
					'005': {
						'light': '#FF80AF',
						'classic': '#FF007F',
						'dark': '#BF005F',
						'text': '#ffffff',
						'lighter': '#ff4d94',
						'darker': '#cc0052',
					},
					'006': {
						'light': '#FF4040',
						'classic': '#E62020',
						'dark': '#A60000',
						'text': '#ffffff',
						'lighter': '#ff4d4d',
						'darker': '#b30000',
					},
					'007': {
						'light': '#FFF4FF',
						'classic': '#DCD0FF',
						'dark': '#A69EBF',
						'text': '#000000',
						'lighter': '#ffffff',
						'darker': '#b3aee6',
					},
					'008': {
						'light': '#C200FF',
						'classic': '#8D029B',
						'dark': '#5C006B',
						'text': '#ffffff',
						'lighter': '#c266c2',
						'darker': '#590059',
					},
					'009': {
						'light': '#7FBF73',
						'classic': '#1B7931',
						'dark': '#0F3D18',
						'text': '#ffffff',
						'lighter': '#66cc66',
						'darker': '#004d00',
					},
					'010': {
						'light': '#A53C3E',
						'classic': '#670E10',
						'dark': '#3F0709',
						'text': '#ffffff',
						'lighter': '#a6001a',
						'darker': '#330000',
					},
					'011': {
						'light': '#FFE2C2',
						'classic': '#FF9B49',
						'dark': '#BF6D2F',
						'text': '#000000',
						'lighter': '#ffd1b3',
						'darker': '#e67300',
					},
					'012': {
						'light': '#FFFFB2',
						'classic': '#FFFF66',
						'dark': '#BFBF33',
						'text': '#000000',
						'lighter': '#ffffff',
						'darker': '#e6e600',
					},
				}
			},
		},
	},
	plugins: [],
	darkMode: "class",
}
