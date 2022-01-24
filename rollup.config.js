import analyze from 'rollup-plugin-analyzer'
import pkg from './package.json'

const input = 'src/index.js'

export default [
  {
    input,
    output: { file: pkg.main, format: 'cjs' },
    plugins: [analyze()],
  },
  {
    input,
    output: { file: pkg.module, format: 'esm' },
    plugins: [analyze()],
  },
]
