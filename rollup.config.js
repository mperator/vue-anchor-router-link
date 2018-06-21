import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import {uglify} from 'rollup-plugin-uglify'

export default {
  input: 'src/main.js',
  external: [
    'vue'
  ],
  output: {
    name: 'HelloWorld',
    file: 'dist/hello-world.js',
    format: 'umd',
    globals: {
      vue: 'Vue'
    }
  },
  plugins: [
    vue({
      compileTemplate: true,
      css: true
    }),
    buble(),
    uglify()
  ]
}
