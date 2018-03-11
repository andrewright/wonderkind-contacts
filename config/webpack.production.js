const path = require('path');
const merge = require('webpack-merge');

module.exports = merge(require('./webpack'), {
    mode: 'production',
    output: {
        path: path.resolve('build'),
        filename: '[name].[chunkhash:5].js'
    }
});
