module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["ethang"],
  rules: {
    'functional/immutable-data': 'warn',
    'no-undef': 'warn',
    'unicorn/no-new-array': 'warn',
    'unicorn/prefer-at': 'off',
  },
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
