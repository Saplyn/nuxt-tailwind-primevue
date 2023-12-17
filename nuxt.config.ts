// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-primevue",
  ],
  primevue: {
    options: {
      unstyled: false,
    },
    importPT: { as: 'Tailwind', from: 'primevue/passthrough/tailwind' },
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
  },
  css: ['primevue/resources/themes/lara-dark-green/theme.css']
})
