import preprocess from 'svelte-preprocess'

const config = {
  preprocess: [
    preprocess({
      postcss: true,
      css: {
        module: true
      }
    })
  ]
}

export default config
