module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    semi: 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    'arrow-parens': ['warn', 'always'],
    'arrow-body-style': ['error', 'as-needed'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'no-param-reassign': ['error', { 'props': false }],
    'no-underscore-dangle': 0,
    'no-restricted-syntax': 0
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
