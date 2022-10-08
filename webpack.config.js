const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: 'development',

    entry:{
        main: path.resolve(__dirname, './src/assets/js/index.js')
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[contenthash].js'
    },

    devServer:{
        static:{
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 8000
    },

    module:{
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use:[
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options:{
                    name: '[path][name].[ext]',
                    content: ''
                }
            }
        ]
    },

    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}