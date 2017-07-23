const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

module.exports = {
    context: __dirname + "",
    entry: './main',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                // exclude: /node_modules/,
                // query: {
                //     presets: ['es2015', 'react', 'stage-0'],
                // }
            }
            // // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //     use: [
            //         "style-loader",
            //         {
            //             loader: "css-loader",
            //             options: {
            //                 modules: true
            //             }
            //         }
            //     ]
            // }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    //   plugins:[
    //     new webpack.optimize.UglifyJsPlugin({
    //      compress:{
    //        warnings:false,
    //        drop_console: true,
    //      }
    //      })
    //   ],
    watch: true
};