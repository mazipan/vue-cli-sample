// read issue: https://github.com/vuejs/vue-cli/issues/1879#issuecomment-413869211
process.env.VUE_CLI_BABEL_TARGET_NODE = true
process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true

module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],

  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },

  transformIgnorePatterns: [
    // '/node_modules/',
    // read issue: https://github.com/vuejs/vue-cli/issues/1879#issuecomment-409872897
    'node_modules/(?!(babel-jest|jest-vue-preprocessor)/)'
  ],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
    // '^@/([A-z0-9/.]*)$': '<rootDir>/src/$1',
  },

  snapshotSerializers: [
    'jest-serializer-vue'
  ],

  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],

  testURL: 'http://localhost/',

  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
