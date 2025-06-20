import nextJest from 'next/jest'

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/app/(.*)$': '<rootDir>/src/app/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
}

export default createJestConfig(customJestConfig)
