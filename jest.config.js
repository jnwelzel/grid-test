module.exports = {
  setupFiles: ['<rootDir>/tests/setup.js'],
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(scss)$': 'identity-obj-proxy',
  },
};
