module.exports = {
  env: {
    commonjs: true,
    // es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: '2021',
  },
  rules: {
  },
  "plugins": ["jest"]
};
