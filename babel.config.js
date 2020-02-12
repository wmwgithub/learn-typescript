module.exports = {
  "presets": ["@babel/preset-env"],
  "plugins": [
    ["@babel/plugin-transform-runtime", {
      "corejs": 2,
    }],
    "@babel/transform-arrow-functions",
    "@babel/plugin-proposal-class-properties"
  ]
}
