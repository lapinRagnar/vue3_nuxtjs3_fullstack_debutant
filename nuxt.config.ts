// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],
  build:{
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      }
    }
  },

  css: [
    "~/assets/css/main.css"
  ],

  colorMode: {
    suffix: ''
  },

})
