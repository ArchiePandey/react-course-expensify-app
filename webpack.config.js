//entry -> output
const path = require('path');


module.exports = {
    entry : './src/app.js' ,
    output : { 
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true //this ensure client side routing(not server
                                // one which is by default) .....it basically tells
                                //dev server to server index.html file for all unknown 404 pages
    }
};