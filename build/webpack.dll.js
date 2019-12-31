let path = require('path');
// const DLLPlugin = require('webpack').DllPlugin;
// console.log(DLLPlugin);

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        // 打包后，接受自执行函数的名字
        library: 'mergeDeepObject',
        // 默认用var 模式： commonjs commonjs2 umd（amd+cmd+commonjs） this , 一般node用commonjs2
        libraryTarget: 'umd',
        // 打包后的名字
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        // 生成manifest.json（名字可任意）配置文件
        // new DLLPlugin({
        //     name: 'react',
        //     // manifest.json 中，会把我们打包的react.dll.js中用到的所有模块都列出
        //     path: path.resolve(__dirname, '../dll/manifest.json')
        //     // 打包的时候 会配置cleanwebpackgplgin,所以不放在dist里，否则每次打包都被删除了
        // })
    ]
}