module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"], // Remplacement ici
  };
};
