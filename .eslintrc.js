module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    node: true,
    mocha: true,
    es6: true
  },
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'prettier/prettier': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
}
