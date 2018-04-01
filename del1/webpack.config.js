const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    entry: './src/del-1.js', 
    output: {
        path: path.join(__dirname, '/dist'), 
        filename: 'bundle.js'
    }, 
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            }
        ]
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/del-1.html'
        })
    ]
}
