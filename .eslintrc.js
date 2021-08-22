const OFF = 'off';

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'import/no-unresolved': [OFF, { caseSensitive: false }],
    'import/extensions': OFF,
    'no-use-before-define': OFF,
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-shadow': OFF,
    'react/prop-types': OFF,
  },
};
