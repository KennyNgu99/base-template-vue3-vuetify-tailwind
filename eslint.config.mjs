import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt()
  // ...Custom flat configs append after nuxt's configs
  .prepend
  // ...Prepend some flat configs in front
  ()
  // Override some rules in a specific config, based on their name
  .override("nuxt/typescript/setup", {
    rules: {
      "@typescript-eslint/ban-types": "off",
    },
  })
  .override("nuxt/vue/rules", {
    rules: {
      "vue/html-self-closing": "off",
    },
  })
  .override("nuxt/vue/single-root", {
    rules: {
      "vue/no-multiple-template-root": "off",
    },
  });
