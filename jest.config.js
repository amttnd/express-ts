/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  rootDir: process.cwd(),
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
};
