module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["ethang"],
  rules: {
    'no-undef': 'warn',
    'unicorn/prefer-at': 'off',
  },
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
