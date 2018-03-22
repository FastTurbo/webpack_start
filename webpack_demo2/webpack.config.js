const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry:{
        main:'./src/main.js',
        web:'./src/web.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
       // publicPath:'static',
        //指定的一个路径，在html中的src会添加这个publidPath前缀路径
        filename:'[name].[chunkhash].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                /*resource:{
                    test:/\.js$/,
                },*/
                test:/\.js$/,
                include:path.resolve(__dirname,'src'),
                exclude:path.resolve(__dirname,'node_modules'),
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['es2015']
                        }
                    }
                ]
            }
        ]
    },
    resolve:{
        extensions:['.js','.css'],
        alias:{
            js:path.resolve(__dirname,'src/static/js')
        }
    },
    plugins:[
        //new webpack.optimize.UglifyJsPlugin({}),
        new HtmlWebpackPlugin({

            title:'my webpack',
            template:'index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
}

module.exports = config;