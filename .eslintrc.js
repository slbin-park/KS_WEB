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
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
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
    "react/function-component-definition": [
      2,
      {
        namedComponents: "function-declaration",
      },
    ],
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
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
      "camelcase": ["error", {"properties": "never"}],
  },
  settings: {
    // "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
  //   "import/no-extraneous-dependencies": [
  //     "error", 
  //     {"devDependencies": 
  //     ["**/*.test.ts", "**/*.test.tsx"]
  //   }
  // ],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        // moduleDirectory: ['src/', 'node_modules'],
      },
    },
  },
};
