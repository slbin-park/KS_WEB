module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'next',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 0,
    "react/jsx-filename-extension":["warn",{"extensions":[".tsx"]} ],
    'react/function-component-definition': 'error',
    'import/extensions': [
       'error', 
       'ignorePackages', 
       { 
         js: 'never', 
         jsx: 'never', 
         ts: 'never', 
         tsx: 'never', 
         json: 'never', 
        }, 
      ],
  },
  settings: {
    "import/no-extraneous-dependencies": [
      "error", 
      {"devDependencies": 
      ["**/*.test.ts", "**/*.test.tsx"]
    }
  ],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
