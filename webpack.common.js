const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    context: __dirname,
    // mode: 'development',
    // devtool: 'inline-source-map',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, './dist/prd/'),
        filename: 'index.js'
    },
    module: {
        rules: [{
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test:/\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader?url=false',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?url=false'
                ]
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'vue-template',
            template: './index.ejs',
            filename: 'index.html',
        }),
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: [
            '.ts', '.js', '.css', '.html'
        ],
        modules: [
            path.resolve(__dirname, './node_modules'),
        ]
    }
};
module.exports = config;
