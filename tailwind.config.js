/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {
			fontFamily: {
				Poppins: "Poppins",
			},

			colors: {
				PrimaryColor: "#82F84B",
				SecondaryColor: "#1241EA",
			},
		},
	},
	plugins: [require("@tailwindcss/aspect-ratio")],
};
