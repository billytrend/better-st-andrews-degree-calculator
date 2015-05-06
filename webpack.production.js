var webpack = require('webpack');

module.exports = {
    entry: [
        './js/index.jsx'
    ],
    output: {
        path: __dirname + '/',
        filename: 'bundlegit .js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            { test: /\.jpg$/, loader: 'file-loader' },
            { test: /\.svg$/, loader: 'file-loader' },
            { test: /\.gif/, loader: 'file-loader' },
            { test: /\.mp3$/, loader: 'file-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader'},
            { test: /\.html/, loader: 'file?name=[name].[ext]' },
            { test: /\.jsx$/, loaders: ['jsx?harmony'], exclude: /node_modules/ },
        ]
    }
};
