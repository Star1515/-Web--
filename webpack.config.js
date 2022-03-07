const {resolve, dirname} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: resolve(__dirname, 'src', 'index.js'),
    output:{
        path: resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].js'
    },

module: {
    rules: [
        {
            test:/\.s[ac]ss$/i,
            use: [
                'style-loader',
                'scc-loader',
                'sass-loader'
            ]
        },
        {
            test:/\.(png|gpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader'
                }
            ]
        }
    ]
},
plugins: [
    new HtmlWebpackPlugin({
           template: resolve(__dirname, 'src', 'index.html')
        })   
]
};