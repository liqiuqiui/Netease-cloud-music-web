const path = require('path');
const resolve = dir => path.join(__dirname, dir);
process.env.GENERATE_SOURCEMAP = false
module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    },
  }
};
