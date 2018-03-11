const path = require('path');
const merge = require('webpack-merge');

module.exports = merge(require('./webpack'), {
    mode: 'development',
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: true,
        hot: true,
        contentBase: false, // since we use CopyWebpackPlugin.
        compress: true,
        host: 'localhost',
        port: '1234',
        publicPath: '/',
        watchOptions: {
            poll: true
        }
    }
});
