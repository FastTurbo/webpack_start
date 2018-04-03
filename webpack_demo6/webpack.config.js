const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry:{
        index:'./src/index.js',
        main:'./src/main.js',
        bar:'./src/bar.js'
    },
    devtool:'cheap-module-eval-source-map',
    devServer:{
        port:9000,
        contentBase:path.resolve(__dirname,'dist')
    },
    resolve:{
        alias:{
            header$:path.resolve(__dirname,'src/components/header.js'),
            _:'lodash'
        },
        extensions:['.js','.css'],
        modules:[path.resolve(__dirname,'src'),'node_modules']
    },
    output:{
        filename:'[name].[chunkhash].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'A good page from html webpack plugin'
        }),
        new CleanWebpackPlugin(['dist'],{
            root:__dirname,
            verbose:true,
            dry:false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            chunks:['index','main']
        }),
        new webpack.ProvidePlugin({
            _:'lodash'
        }),
        new UglifyJsPlugin()
    ]
}