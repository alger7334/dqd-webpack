const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// console.log(path.resolve())
// console.log(path.join(__dirname,'./dist'))
// 使用node 的路径模块打印直接使用当前路径

const config = {
    mode:'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devServer: {
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'template.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}



module.exports = config