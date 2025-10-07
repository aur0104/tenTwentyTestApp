module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"], // Adjust this to your project's source root
        alias: {
          "@components": "./src/components",
          "@utils": "./src/utils",
          "@screens": "./src/screens",
          "@assets": "./src/assets",
          "@config": "./src/config",
          // Add more aliases as needed
        },
      },
    ],
  ],
};
