module.exports ={
  testPathIgnorePatterns: ["/node_modules"],
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTestes.js"
  ],
  testEnvironment: 'jsdom'
}