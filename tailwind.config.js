/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'orionColor': '#103c6b',
        'orionGreen': '#65bc7b',
        'orionPurple': '#370665',
        'orionBlue': '#29beff',
      },
      textColor: {
        'orionColor': '#103c6b',
        'orionGreen': '#65bc7b',
        'orionPurple': '#370665',
        'orionBlue': '#29beff',
      },
      borderColor: {
        'orionColor': '#103c6b',
        'orionGreen': '#65bc7b',
        'orionPurple': '#370665',
        'orionBlue': '#29beff',
      },
    },
  },
  plugins: [],
}