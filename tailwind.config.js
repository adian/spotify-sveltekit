/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			white: '#fff',
			black: '#000'
		},
		extend: {
			backgroundColor: {
				primary: '#121212',
				highlight: '#1a1a1a',
	
				red: 'red',
				yellow: 'yellow',
				blue: 'blue'
			},
			textColor: {
				primary: '#fff',
				subdued: '#6a6a6a'
			}
		}
	},
	plugins: []
};
