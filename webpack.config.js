const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,         
                exclude: /node_modules/,        
                use: {          
                    loader: 'babel-loader'        
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html'})],
    devServer:{
        contentBase: './dist'
    }
   };