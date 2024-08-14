// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

const customJestConfig = {

    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jest-environment-jsdom',
    testMatch: ['<rootDir>/__tests__/**/*.test.js', '<rootDir>/__tests__/**/*.test.jsx', '<rootDir>/__tests__/**/*.test.ts', '<rootDir>/__tests__/**/*.test.tsx'],
    moduleNameMapper: {
        '^@/components/(.*)$': '<rootDir>/components/$1',
        '^@/pages/(.*)$': '<rootDir>/pages/$1',
        // Add more aliases as needed
    },
}

module.exports = createJestConfig(customJestConfig)