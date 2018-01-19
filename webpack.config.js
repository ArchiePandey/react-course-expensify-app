//entry -> output
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry : './src/app.js' ,
    output : { 
        path: path.join(__dirname,'public','dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: CSSExtract.extract({
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, 
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            })
        }]
    },
    plugins: [
        CSSExtract
    ],
    devtool: isProduction ? 'source-map' :'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true, //this ensure client side routing(not server
                                // one which is by default) .....it basically tells
                                //dev server to server index.html file for all unknown 404 pages
    publicPath:'/dist/'
                            }
}
};