const path = require('path')
module.exports = {
  webpack: (config) => {
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};