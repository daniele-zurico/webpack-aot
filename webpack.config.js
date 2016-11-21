'use strict';
var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
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
                use: ['awesome-typescript-loader', 'angular2-load-children-loader']
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
            }
            ,
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new ForkCheckerPlugin(),
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
    }
    ,

    stats: 'errors-only',

    devtool: 'source-map'
}


// const webpack = require("webpack");
// const path = require("path");
// const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var CopyWebpackPlugin = require('copy-webpack-plugin');
// module.exports = {
//     resolve: {
//         extensions: [".js", ".ts"],
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.ts$/,
//                 loader: ["awesome-typescript-loader", "angular2-load-children-loader"],
//             },
//                         {
//                 test: /\.html$/,
//                 use: 'raw-loader'
//             },
//             {
//                 test: /\.css$/,
//                 include: path.resolve(process.cwd(), 'src', 'app'),
//                 loaders: ['to-string-loader', 'css-loader']
//             },
//             {
//                 test: /\.css$/,
//                 exclude: path.resolve(process.cwd(), 'src', 'app'),
//                 loader: ExtractTextPlugin.extract({
//                     fallbackLoader: 'style-loader',
//                     loader: 'css-loader'
//                 })
//             }
//         ]
//     },
//     entry: {
//         'bootstrap.aot': './src/app/bootstrap.aot',
//         'polyfill': './src/app/polyfill'
//     },
//     output: {
//         path: path.resolve(__dirname, "dist"),
//         publicPath: "http://localhost:3000/dist/",
//         filename: "[name].js",
//         chunkFilename: "[name].chunk.js",
//     },
//     plugins: [
//         new webpack.ProgressPlugin(),
//         new ExtractTextPlugin('style.bundle.css'),
//         new CopyWebpackPlugin([
//             {from: './src/index.html'}
//         ]),
//         new ForkCheckerPlugin(),
//         new webpack.LoaderOptionsPlugin({
//             minimize: true,
//             debug: false
//         }),
//         new webpack.optimize.UglifyJsPlugin({
//             compress: {
//                 warnings: false
//             },
//             output: {
//                 comments: false
//             },
//             sourceMap: true
//         })
//     ],
//     devtool: "sourcemap"
//
// };
