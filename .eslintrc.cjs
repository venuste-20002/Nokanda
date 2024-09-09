module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  extends: ["eslint:recommended", "plugin:svelte/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    extraFileExtensions: [".svelte"],
    requireConfigFile: false,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
    },
  ],
  plugins: ["svelte"],
  ignorePatterns: ["node_modules"],
};
