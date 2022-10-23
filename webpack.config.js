const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    mode: 'development',

    entry:{
        main: path.resolve(__dirname, './src/assets/js/index.js')
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: './assets/js/[contenthash].js'
    },

    devServer:{
        port: 3000
    },

    module:{
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options:{
                    name: './assets/images/[contenthash].[ext]',
                    content: ''
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },

    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/brands.html',
            filename: './pages/brands.html'
        }),
        new MiniCssExtractPlugin({
            filename: './assets/css/[contenthash].css'
        })
    ]
}