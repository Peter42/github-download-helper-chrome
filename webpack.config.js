const webpack = require("webpack");
const path = require('path');
const jszip = require('jszip');

module.exports = {
    optimization: {
        splitChunks: {
            name: 'vendor',
            minChunks: Infinity
        }
    },
    entry: {
        options: path.join(__dirname, 'src/options.ts'),
        background: path.join(__dirname, 'src/background.ts'),
        vendor: ['jszip']
    },
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: []
};