module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation)/)',
  ],
  moduleNameMapper: {
    '^@react-native-picker/picker$': '<rootDir>/__mocks__/PickerMock.js',
    '^@react-native-async-storage/async-storage$':
      '<rootDir>/__mocks__/AsyncStorageMock.js',
  },
};
