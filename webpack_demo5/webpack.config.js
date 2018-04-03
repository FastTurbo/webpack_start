const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:{
        index:'./src/index.js',
        vendor:[
            'lodash'
        ]
    },
    output:{
        filename:'[name].[chunkhash].js',
        path:path.resolve(__dirname,'dist')
    },

    plugins:[
        new CleanWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            title:'Code splitting'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'manifest'
        })
    ]
}