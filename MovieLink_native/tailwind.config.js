/** @type {import('tailwindcss').Config} */
module.exports = {
    content:[
    "./app/screens/**/*.{js,ts,jsx,tsx}",
    "./app/pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}"
    ],
    colors: {
        indigo: '#5c6ac4',
        blue: '#007ace',
        red: '#de3618',
        white: "#FFF",  
        black: "#19232E", 
        green: "#62DFB7",
        purple: "#B9AEE0"
      },
    theme:{
      fontFamily: {
        sans: ['"PT Sans"', 'sans-serif']
      },
      colors: {
        purple: '#B9AEE0',
        black: "#19232E",
        white: "#FFF",
        green: "#62DFB7",
        indigo: '#5c6ac4',
        blue: '#007ace',
        red: '#de3618'
    },
  }
}
