module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        printWidth: 60,
      },
    ],
  },
};
