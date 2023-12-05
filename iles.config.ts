import { defineConfig } from 'iles'
// import prism from '@islands/prism'

export default defineConfig({
  svelte: true,
  modules: [
    // prism({
    //   showLineNumbers: false,
    // }),
  ],
  vite: {
    optimizeDeps: {
      include: ['svelte']
    }
  },
})
