module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  rules: {
    quotes: [2, 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/react-in-jsx-scope': 'off',
    semi: [2, 'never'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: true,
        endOfLine: 'auto',

        semi: false,
        tabWidth: 2,
        useTabs: false,
      },
    ],
  },
};
