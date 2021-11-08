// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  setuoFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
};
