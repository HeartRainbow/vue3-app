module.exports = {
  roots: [
    "<rootDir>/test"
  ],
  testMatch: [
    '**/test/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
    // '<rootDir>/**/__tests__/**/*.{vue,js,jsx,ts,tsx}',
    // '<rootDir>/src/**/*.{spec,test}.{vue,js,jsx,ts,tsx}',
  ],
  // testRegex: 'test/(.+)\\.(test|spec)\\.(jsx?|tsx?|vue?|js?|ts?)$',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(vue)$': '<rootDir>/node_modules/vue-jest', // 告诉Jest如何处理.vue文件
    '^.+\\.(ts)$': '<rootDir>/node_modules/ts-jest', // 告诉Jest用ts-jest处理ts文件
    '^.+\\.(js|jsx|mjs|cjs|tsx)$': '<rootDir>/node_modules/babel-jest', // 告诉Jest用babel-jest处理jsx/tsx文件 
    // ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss|less)$',
  ],
  moduleFileExtensions: [
    'vue',
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  resetMocks: true,
};