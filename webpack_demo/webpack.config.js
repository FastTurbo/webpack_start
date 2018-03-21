const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    app:path.join(__dirname,'app'),
    build:path.join(__dirname,'build')
}


const cssPlugin = new ExtractTextWebpackPlugin({
        filename:'[name].css',
        ignoreOrder:true
    })
module.exports = {
    entry:{
        app:PATHS.app
    },
    output:{
        path:PATHS.build,
        filename:'[name].js'
    },
    devServer:{
        host:process.env.HOST,
        port:9000,
        overlay:{
            errors:true,
            warnings:true
        }
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                exclude:/node_modules/,
                use:cssPlugin.extract({
                    use:{
                        loader:'css-loader',
                        options:{
                            modules:true
                        }
                    },
                    fallback:'style-loader'
                })
                /*[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            modules:true
                        }
                    }
                ],*/

            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Webpack demo'
        }),
        cssPlugin

    ]
}