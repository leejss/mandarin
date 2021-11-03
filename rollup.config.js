import { defineConfig } from "rollup";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import externals from "rollup-plugin-node-externals";
import nodeResolve from "@rollup/plugin-node-resolve";
import cjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";
import scss from "rollup-plugin-scss";

export default defineConfig({
  input: "./src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "esm",
    },
  ],
  plugins: [
    del({ targets: "dist/*" }),
    peerDepsExternal(),
    externals({ deps: true }),
    nodeResolve({
      extensions: [".js", ".ts", ".tsx"],
    }),
    cjs(),
    // typescript(),
    babel({
      babelHelpers: "runtime",
      exclude: "**/node_modules/**",
      extensions: [".ts", ".tsx"],
    }),
    url(),
    svgr(),
    scss(),
  ],
});
