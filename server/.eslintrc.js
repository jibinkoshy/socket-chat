module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es2021: true,
    },
    extends: ['airbnb-base'],
    parserOptions: {
      ecmaVersion: 12,
    },
    rules: {
      'linebreak-style': 'off',
      'comma-dangle': 'off',
    },
  };