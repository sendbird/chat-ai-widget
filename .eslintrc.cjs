module.exports = {
  root: true, // This fixes issue when running lint fix command: https://stackoverflow.com/questions/55060228/eslint-couldnt-find-the-plugin-eslint-plugin-typescript-eslint
  env: { browser: true, es2020: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  plugins: ['import', 'styled-components-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
    'import/order': [
      'error',
      {
        groups: [
          ['builtin'],
          ['external'],
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'styled-components-a11y/control-has-associated-label': [
      2,
      {
        'labelAttributes': ['label'],
        'depth': 3,
        'ignoreElements': [
          'input',
          'textarea',
        ],
        'includeRoles': ['button']
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript:{},
      node:{
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.d.ts',
        ],
      }
    },
  },
};
