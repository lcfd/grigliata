module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  ecmaFeatures: {
    jsx: true
  },
  rules: {
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/prop-types': false
  },
  settings: {
    react: {
      version: 'detect' // Automatically detect the version of React to use
    }
  }
};
