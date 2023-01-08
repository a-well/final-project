module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    semi: 0,
    quotes: [1, 'single'],
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'no-unused-vars': 0,
    'react/no-unescaped-entities': 0,
    'react/function-component-definition': 0,
    'no-console': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['src', 'node_modules'],
      },
    },
  },
};
