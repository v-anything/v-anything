import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { dts } from 'rollup-plugin-dts'

const input = './src/index.ts'
const plugins = [
  resolve({
    browser: true,
  }),
  typescript({
    tsconfig: './tsconfig.json',
  }),
]

export default [
  {
    input,
    output: {
      name: 'v-anything',
      file: 'dist/index.js',
      format: 'es',
    },
    plugins,
  },
  {
    input,
    output: {
      name: 'vAnything',
      file: 'dist/index.iife.js',
      format: 'iife',
    },
    plugins,
  },
  {
    input: './dist/types/index.d.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
    plugins: [
      ...plugins,
      dts(),
    ],
  },
]
