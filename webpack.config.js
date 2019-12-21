const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './app/app.module.js',
    },
    devtool:  'source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            { test: /\.html$/, use: 'raw-loader' },
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] }
        ]
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            'window.jQuery': 'jquery',
        }),
        new HtmlWebpackPlugin({
            template: "./app/index.html",
        }),
        new CopyPlugin([
            { from: 'node_modules/bootstrap/dist', to: 'lib/bootstrap/dist' },
            { from: 'app/phones', to: 'phones' },
            { from: 'app/img', to: 'img' },
        ]),
    ],
};
