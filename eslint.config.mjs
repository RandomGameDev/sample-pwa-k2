import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import cypressPlugin from "eslint-plugin-cypress/flat";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  reactRefresh.configs.vite,
  ...tseslint.configs.recommended,
  cypressPlugin.configs.recommended,
  prettierPlugin,
  prettierConfig,
  {
    ignores: [
      "**/babel-plugin-macros.config.js",
      "**/lint-staged.config.mjs",
      "**/postcss.config.mjs",
      "**/prettier.config.mjs",
      "**/stylelint.config.mjs",
      "**/tailwind.config.cjs",
      "**/vite.config.ts",
      "**/eslint.config.mjs",
      "**/dist",
      "**/*.css",
      "**/*.svg",
    ],
  },
  {
    plugins: {
      "react-hook": reactHooksPlugin.configs.recommended,
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    rules: {
      "import/no-unresolved": "off",
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    ...reactPlugin.configs.flat.recommended,
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "prettier/prettier": "error",
      "no-mixed-spaces-and-tabs": "off",
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  }
);
