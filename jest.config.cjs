module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "./src/main.tsx",
    "./src/app/components/LocatorProvider/LocatorProvider.tsx",
  ],
  collectCoverage: true,
  collectCoverageFrom: ["src/app/**/*.tsx", "!src/app/components/LocatorProvider/LocatorProvider.tsx"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/src/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest"],
  },
};
