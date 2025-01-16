export default [
  {
    files: ["src/**/*.ts"], 
    languageOptions: {
      parser: "@typescript-eslint/parser",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
    },
  },
];
