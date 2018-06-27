const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
    entry: {
        bundle: './src/js/app.js'
    },
    output: {
        path: path.join(__dirname, 'wordpress/assets/js'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/,
                test: /\.js[x]?$/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}, {
    entry: {
        style: './src/sass/main.js'
    },
    output: {
        path: path.join(__dirname, 'wordpress/assets/css'),
        filename: '[name].css'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
}];