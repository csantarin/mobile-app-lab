module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver', {
        root: ['./src'],
        alias: {
          '~components': './src/components',
          '~modules': './src/modules',
        },
        extensions: [
          '.android.js',
          '.android.ts',
          '.android.tsx',
          '.ios.js',
          '.ios.ts',
          '.ios.tsx',
          '.js',
          '.json',
          '.ts',
          '.tsx',
        ],
      },
    ],
    'jest-hoist',
  ],
};
