/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundOpacity: {
        '10': '0.1',
        '15': '0.15',
        '20': '0.2',
        '95': '0.95',
       }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#018837",
          primaryContent: "#ffffff",
          secondary: "#FEA621",
          accent: "#ffffff",
          neutral: "#3d4451",
          "base-100": "#ffffff", 
          "base-200": "#000000",
        },
      }
    ],
    fontFamily: {
      'sans': 'Montserrat',
      'serif': 'Playfair Display',
      // 'mono': ['ui-monospace', 'SFMono-Regular', ...],
      // 'display': ['Oswald', ...],
      // 'body': ['"Open Sans"', ...],
    },
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
};
