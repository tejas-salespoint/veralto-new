/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'bg_img': "url('/src/assets/bg_img.png')",
      'bg_chatbot': "url('https://daiindustry.blob.core.windows.net/daistrapi/bg_hachchatbot.png')",
      'bg_hachchatbot': "url('/src/assets/bg_hachchatbot.png')",
      'bg_topbar': "url('/src/assets/bg_topbar.png')",
      'bg_sidebar': "url('/src/assets/bg_sidebar.png')",
    },
    fontFamily: {
      magistral: ['Magistral', 'sans-serif'],
      magistralBold: ['MagistralB', 'sans-serif']
    }
  },

  plugins: [],
}