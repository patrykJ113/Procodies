// nuxt.config.ts
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	components: true,
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: '~/tailwind.config.js',
		exposeConfig: {
			level: 2,
		},
		config: {},
		viewer: true,
	},
	image: {},
})
