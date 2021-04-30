import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import css from "rollup-plugin-import-css";

import pkg from "./package.json";

export default {
  external: ["styled-components", "react-select"],
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    css(),
    external(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: ["**/__tests__/**", "**/*.stories.tsx"],
      include: [
        // Project files
        "./**/*.ts+(|x)",
      ],
      clean: true,
    }),
    commonjs({
      include: ["node_modules/**"],
      namedExports: {
        "node_modules/react/react.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement",
        ],
        "node_modules/react-dom/index.js": ["render"],
      },
    }),
  ],
};
