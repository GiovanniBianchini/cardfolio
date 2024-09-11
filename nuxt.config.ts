// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config"
export default defineNuxtConfig({
  app: {
      head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          title: 'Cardfolio',
          meta: [
              { name: 'description', content: 'My personal digital business card' }
          ],
          link: [
              //Favicon
              { rel: 'icon', type: 'image/x-icon', href: '/images/logo/favicon.png' },
              //Google Font
              { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
              { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
              { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap' },
              //UiKit CSS
              { rel: 'stylesheet', type: "text/css", href: 'https://cdn.jsdelivr.net/npm/uikit@3.15.19/dist/css/uikit.min.css'},
              //Bootstrap CSS
              { rel: 'stylesheet', type: "text/css", href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'},
          ],
          script: [
              //UiKit JS
              { src: 'https://cdn.jsdelivr.net/npm/uikit@3.15.16/dist/js/uikit.min.js', async: true, tagPosition: 'bodyClose' },
          ],
      },
  },

  //setting runtime variable
  runtimeConfig: {
      public: {
         
      }
  },

  //loading main project css
  css: [
      '@/assets/css/main.css'
  ],

  ssr: true,
  compatibilityDate: '2024-09-11',
})