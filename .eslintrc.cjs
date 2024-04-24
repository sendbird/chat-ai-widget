module.exports = {
  root: true, // This fixes issue when running lint fix command: https://stackoverflow.com/questions/55060228/eslint-couldnt-find-the-plugin-eslint-plugin-typescript-eslint
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
     // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "prettier/prettier": ["error", { "singleQuote": true }],
    "import/order": [
      "error",
      {
        "groups": [
          ["builtin"],
          ["external"],
          "internal",
          ["parent", "sibling", "index"]
        ],
        "newlines-between": "always",
        "alphabetize": {"order": "asc", "caseInsensitive": true}
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".d.ts"
        ]
      }
    }
  },
}
