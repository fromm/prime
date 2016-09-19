var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './public/entry.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public/'
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("prime.css")
    ]
};