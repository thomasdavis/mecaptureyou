const webpack = require('webpack');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.SERVER_URL': JSON.stringify(process.env.SERVER_URL),
      })
    );
    return config;
  },
};
