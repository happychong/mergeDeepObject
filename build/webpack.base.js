// 基础设置
const path = require('path');
const merge = require('webpack-merge');

const dev = require('./webpack.dev');
const prod = require('./webpack.prod');
module.exports = (env) => {
    // env 是环境变量
    // "dev": "webpack --env.development --config ./build/webpack.base.js",
    console.log(env);
    // { development: true }
    
    let isDev = env.development;
    const base= {
        // js - react 入口文件
        // entry: path.resolve(__dirname, '../src/index.js'),
        // react - ts 入口文件
        // entry: path.resolve(__dirname, '../src/index-react.tsx'),
        // vue - ts 入口文件
        // entry: path.resolve(__dirname, '../src/index-vue.ts'),

        // entry 优化
        entry: path.resolve(__dirname, '../src/index.js'),
        output: {
            filename: 'index.js',
            // 默认用var 模式： commonjs commonjs2 umd（amd+cmd+commonjs） this , 一般node用commonjs2
            libraryTarget: 'umd',
            // 出口位置 要用绝对路径
            path: path.resolve(__dirname, '../dist')
        },
        // 优化项配置
        optimization: {
            // 开发模式下，使用了哪个模块，打包代码中提示一下
            usedExports: true
        },
        // externals - 外部变量
        // externals: {
        //     // 代码中，import $ 的时候，使用 $ 的时候，是外部变量，不需要被打包
        //     'jquery': '$'
        // },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader'
                    // use: {
                    //     loader: 'babel-loader',
                    //     options: {
                    //         // babel 配置 也可以设置在 .babelrc 中

                    //     }
                    // }
                }
            ]
        },
        plugins: [

        ] // filter 过滤掉false，解决 !isDev && new XXX()的插件
    };

    // 返回配置文件，没返回的话，采用默认配置
    if (isDev) {
        return merge(base, dev);
    } else {
        return merge(base, prod);
    }
}