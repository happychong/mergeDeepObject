// 基础设置
const path = require('path');
const merge = require('webpack-merge');

const dev = require('./webpack.dev');
const prod = require('./webpack.prod');
module.exports = (env) => {
    console.log(env);
    let isDev = env.development;
    const base= {
        entry: path.resolve(__dirname, '../src/index.js'),
        output: {
            filename: 'index.js',
            // 默认用var 模式： commonjs commonjs2 umd（amd+cmd+commonjs） this , 一般node用commonjs2
            libraryTarget: 'umd',
            path: path.resolve(__dirname, '../lib')
        },
        optimization: {
            usedExports: true
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader'
                }
            ]
        },
        plugins: []
    };

    if (isDev) {
        return merge(base, dev);
    } else {
        return merge(base, prod);
    }
}