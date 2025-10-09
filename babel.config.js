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
          "@api": "./src/api",
          // Add more aliases as needed
        },
      },
    ],
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
