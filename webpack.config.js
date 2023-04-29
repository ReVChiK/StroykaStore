const {resolve} = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const json5 = require('json5');

module.exports = {

    mode: 'development',

    entry:{
        main: resolve(__dirname, './src/assets/js/index.js')
    },
    output:{
        path: resolve(__dirname, 'dist'),
        filename: './assets/js/[contenthash].js'
    },

    optimization:{
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks:{
            cacheGroups:{
                vendor:{
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
        
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
                test: /\.pdf$/i,
                loader: 'file-loader',
                options:{
                    name: './assets/docs/[name].[ext]',
                    content: ''
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse
                }
            }
        ]
    },

    plugins:[
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

        new HtmlWebpackPlugin({
            template: './src/catalog/catalog.html',
            filename: './catalog/catalog.html'
        }),

        new HtmlWebpackPlugin({
            template: './src/catalog/categories/categories.html',
            filename: './catalog/categories/categories.html'
        }),

        new HtmlWebpackPlugin({
            template: './src/catalog/categories/product/product.html',
            filename: './catalog/categories/product/product.html'
        }),

        new HtmlWebpackPlugin({
            template: './src/pages/brands.html',
            filename: './pages/brands.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/delivery.html',
            filename: './pages/delivery.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/refund.html',
            filename: './pages/refund.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/documentation.html',
            filename: './pages/documentation.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/contacts.html',
            filename: './pages/contacts.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/profile.html',
            filename: './pages/profile.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/order.html',
            filename: './pages/order.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/basket.html',
            filename: './pages/basket.html'
        }),
        new MiniCssExtractPlugin({
            filename: './assets/css/[contenthash].css'
        })
    ]
}