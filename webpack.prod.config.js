'use strict';
var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'bootstrap.aot': './app/bootstrap.aot.ts',
        'polyfill': './app/polyfill.ts'
    },

    context: path.join(process.cwd(), 'src'),

    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /\.css$/,
                include: path.resolve(process.cwd(), 'src', 'app'),
                loaders: ['to-string-loader', 'css-loader']
            },
            {
                test: /\.css$/,
                exclude: path.resolve(process.cwd(), 'src', 'app'),
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader'
                })
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new webpack.ProgressPlugin(),
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.join(process.cwd(), 'src')
        ),
        new CopyWebpackPlugin([
            {from: 'index.html'}
        ]),
        new ExtractTextPlugin('style.bundle.css'),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: true
        })
    ],

    resolve: {
        modules: [
            'node_modules',
            path.resolve(process.cwd(), 'src')
        ],
        extensions: ['.ts', '.js']
    },

    stats: 'errors-only',

    devtool: 'source-map'
};
