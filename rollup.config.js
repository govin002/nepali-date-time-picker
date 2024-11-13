import vue from "rollup-plugin-vue";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    vue(), // To support Vue files
    babel({ babelHelpers: "bundled" }),
  ],
  external: ["react", "react-dom", "vue", "react-datepicker", "nepali-date"],
};
