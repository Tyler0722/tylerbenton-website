const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  webpack: (config, { dev }) => {
    config.resolve.alias.components = path.resolve(__dirname, "components");
    config.resolve.alias.sections = path.resolve(__dirname, "sections");
    
    config.optimization.minimize = true;
    config.optimization.minimizer.push(new TerserPlugin());
    return config;
  }
};
