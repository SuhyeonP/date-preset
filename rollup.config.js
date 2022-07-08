import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import prettier from 'rollup-plugin-prettier';
import alias from '@rollup/plugin-alias';
import dts from 'rollup-plugin-dts';

import path from 'path';

const extensions = ['.js', '.ts'];

export default [
  // js 번들링
  {
    // 번들링 기준 파일
    input: 'src/index.ts',
    // 번들링 결과 파일과 형식(esm -> es modules, cjs -> commonjs)
    output: [{ file: 'dist/index.js', format: 'esm' }],

    plugins: [
      // typescript에서 alias를 사용했다면 번들링 시 명시해줘야 함
      alias({
        entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      }),
      commonjs(),
      typescript({
        clean: true,
        sourceMap: false,
      }),
      resolve({ extensions }),
      // 번들링 파일 크기를 최소화하고 난독화하기 위해 사용
      uglify(),
    ],
  },
  // 타입 정의 파일 번들링
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'cjs' }],

    plugins: [
      dts(),
      alias({
        entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      }),
      // 타입 정의 파일은 가독성을 위해 prettier 적용
      prettier({
        tabWidth: 2,
      }),
    ],
  },
];
