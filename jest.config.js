export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.ts'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'html'],
    coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
    moduleFileExtensions: ['ts', 'js'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json',
        },
    },
};

