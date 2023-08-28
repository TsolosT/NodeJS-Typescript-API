module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', // Map src directory as @ in your code
    },
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    globals: {
        'ts-jest': {
            diagnostics: false,
        },
    },
    testMatch: [
        '**/__tests__/**/*.test.(ts|js)',
    ],
};
