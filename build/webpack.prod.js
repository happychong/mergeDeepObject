
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    // 优化项配置
    optimization: {
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new CleanWebpackPlugin({
        //     // 在打包目录清空 默认就是全部清空，所以可以不设置此参数
        //     cleanOnceBeforeBuildPatterns: ['**/*']
        // }),
    ]
}