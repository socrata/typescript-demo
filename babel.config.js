require("core-js/stable");
require("regenerator-runtime/runtime");

module.exports = function(api) {
  api.cache(true);
  return {
    sourceMaps: true,
    sourceType: "unambiguous",
    presets: [
      [
        require("@babel/preset-env").default,
        {
          forceAllTransforms: true,
          useBuiltIns: "usage",
          corejs: 3,
          modules: false
        }
      ],
      require("@babel/preset-react").default
    ].filter(Boolean),
    plugins: [
      require("@babel/plugin-proposal-class-properties").default,
      [
        require("@babel/plugin-transform-runtime").default,
        {
          helpers: false,
          regenerator: true,
          corejs: false
        }
      ],
      [
        require("@babel/plugin-transform-regenerator").default,
        {
          async: false
        }
      ]
    ].filter(Boolean)
  };
};
