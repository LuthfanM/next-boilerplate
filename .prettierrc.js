/** @type {import("prettier").Config} */

module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "always",
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  endOfLine: "lf",
  importOrder: [
    "^(react|next|next/(.*))$",
    "<THIRD_PARTY_MODULES>",
    "^~/(hooks|libs|constants)/(.*)$",
    "^~/(services|utils)/(.*)$",
    "^~/(validations)/(.*)$",
    "^~/(components|layouts)/(.*)$",
    "^[./]",
    "^~/(assets)/(.*)$",
    "^~/types/(.*)$",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderTypeImportsToBottom: true,
};
