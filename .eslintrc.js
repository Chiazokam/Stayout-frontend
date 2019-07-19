module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
      "max-len": [1, 120, 2, { "ignoreComments": true }],
      "jsx-quotes": ["error", "prefer-single"],
      "react/prop-types": 0,
      "no-unused-vars": 0,
      "comma-dangle": 0,
      "jsx-a11y/no-noninteractive-element-to-interactive-role": 1,
      "jsx-a11y/anchor-is-valid": [
          "error",
          {
              "components": [
                  "Link"
              ],
              "specialLink": [
                  "to"
              ],
              "aspects": [
                  "noHref",
                  "invalidHref",
                  "preferButton"
              ]
          }
      ],
      "react/jsx-filename-extension": [
          1,
          {
              "extensions": [
                  ".js",
                  ".jsx"
              ]
          }
      ],
      "react/prefer-stateless-function": [
          0
      ],
      "no-useless-constructor": 1,
      "curly": [
          "error",
          "multi-line"
      ],
      "react/no-danger": 0,
      "jsx-a11y/interactive-supports-focus": 0
  },
};
