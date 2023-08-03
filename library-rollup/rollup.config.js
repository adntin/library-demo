// https://github.com/rollup/rollup-starter-lib/blob/master/rollup.config.js
// https://github.com/rollup/rollup-starter-lib/blob/typescript/rollup.config.js

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
// import pkg from './package.json';
import { readFileSync } from "fs";
const pkg = JSON.parse(readFileSync("package.json", { encoding: "utf8" }));

// `import pkg from './package.json';` 语句报错
// [!] TypeError: Module "file:///Users/devin/Desktop/my/library-demo/library-rollup/package.json" needs an import assertion of type "json"
// TypeError [ERR_IMPORT_ASSERTION_TYPE_MISSING]: Module "file:///Users/devin/Desktop/my/library-demo/library-rollup/package.json" needs an import assertion of type "json"
//     at new NodeError (node:internal/errors:387:5)
//     at validateAssertions (node:internal/modules/esm/assert:82:15)
//     at defaultLoad (node:internal/modules/esm/load:84:3)
//     at nextLoad (node:internal/modules/esm/loader:163:28)
//     at ESMLoader.load (node:internal/modules/esm/loader:601:26)
//     at ESMLoader.moduleProvider (node:internal/modules/esm/loader:457:22)
//     at new ModuleJob (node:internal/modules/esm/module_job:63:26)
//     at ESMLoader.#createModuleJob (node:internal/modules/esm/loader:476:17)
//     at ESMLoader.getModuleJob (node:internal/modules/esm/loader:434:34)
//     at async ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:78:21)

export default [
  // browser-friendly UMD build
  {
    input: "src/index.ts",
    output: {
      name: "libraryRollup",
      file: pkg.browser,
      format: "umd",
      sourcemap: true,
    },
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      typescript({ tsconfig: "./tsconfig.json" }), // so Rollup can convert TypeScript to JavaScript
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: "src/index.ts",
    // external: ['ms'], // 剔除第三方库
    plugins: [
      typescript({ tsconfig: "./tsconfig.json" }), // so Rollup can convert TypeScript to JavaScript
    ],
    output: [
      { file: pkg.main, format: "cjs", sourcemap: true },
      { file: pkg.module, format: "es", sourcemap: true },
    ],
  },
];
