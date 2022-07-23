module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "inline-dotenv",
      [
        "tailwindcss-react-native/babel",
        {
          allowModuleTransform: ["moti"]
        }
      ]
    ],
  };
};
