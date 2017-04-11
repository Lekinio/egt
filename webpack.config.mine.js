const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('mine.css');

module.exports =  {

        entry: {
        },
        output: {
            path: path.join(__dirname, 'wwwroot', 'dist'),
            filename: '[name].js',
            library: '[name]_[hash]'
        },
          module:{
            rules:[
                { test:/\.css$/, 
                    use: extractCSS.extract({
                        fallback: 'style-loader',
                        loader:['css-loader'],
                        publicPath:'/dist'
                        })
                },
                { test:/\.(png|svg|jpg)$/i,
                use:'file-loader'
                }
            ]
        },
        plugins: [
        extractCSS,
    ]
};