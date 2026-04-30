import nextJest from 'next/jest'


const createJestConfig = nextJest({
    dir : './', // here i'm defining the root of the proyect
})

const customJestConfig = {
    setupFilesAfterEnv : ["<rootDir>/jest.setup.ts"],
    testEnvironment : "jest-environment-jsdom",
    moduleNameMapper : {
         "^@/(.*)$": "<rootDir>/src/$1"
    }
}


export default createJestConfig(customJestConfig)