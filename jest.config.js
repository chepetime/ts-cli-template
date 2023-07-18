export const preset = 'ts-jest';
export const testEnvironment = 'node';
export const testMatch = ['**/__tests__/**/*.spec.ts'];
export const collectCoverageFrom = [
  '<rootDir>/src/**/*.ts',
  '!<rootDir>/src/__tests__/**/*.ts',
  '!<rootDir>/src/types/**/*.ts',
  '!<rootDir>/src/index.ts',
];
export const collectCoverage = true;
export const globals = {
  'ts-jest': {
    diagnostics: false,
    isolatedModules: true,
  },
};
