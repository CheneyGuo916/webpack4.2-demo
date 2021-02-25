const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.[htm/html]/,
                use: ['html-withimg-loader', 'raw-loader']
            },
            {
                test: /\.[png|svg|jpg|gif|webp]$/,
                use: ['file-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'helloooo',
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
}