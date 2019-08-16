module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "parser": "babel-eslint",
  "rules": {
    "no-console": ["error", {
      "allow": ["warn", "error", "info"]
    }]
  }
};
