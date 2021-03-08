const webpack = require("webpack");
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    node: {
        global: true,
        __filename: true,
        __dirname: true,
    },
    mode: "development",
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
            'process.browser': JSON.stringify(true)
        }),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer']
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            "os": require.resolve("os-browserify/browser"),
            "url": require.resolve("url/"),
            "https": require.resolve("https-browserify"),
            "http": require.resolve("stream-http"),
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "buffer": require.resolve("buffer"),
            "process": require.resolve("process/browser"),
            "assert": require.resolve("assert/")
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};