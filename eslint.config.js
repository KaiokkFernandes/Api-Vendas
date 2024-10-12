// eslint.config.js
const { Linter } = require('eslint');

module.exports = /** @type {Linter.FlatConfig[]} */ ([
  {
    ignores: ['node_modules', 'dist'],
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      parser: require('@typescript-eslint/parser')
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin')
    },
    rules: {
      // Suas regras de ESLint
    }
  }
]);
