const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//const extractCSS = new ExtractTextPlugin('[name].css');

module.exports = {
    entry: {
        app: path.resolve('src/index.js')
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    postcss: [
                        require('postcss-cssnext')({
                            browsers: 'last 2 Chrome versions'
                        })
                    ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Wonderkinds Contacts',
            inject: true,
            template: path.resolve('src/index.ejs'),
            minify: {
                collapseWhitespace: true
            }
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    minSize: 0 // This is example is too small to create commons chunks
                },
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10,
                    enforce: true
                }
            }
        }
    }
};
