
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    // 优化项配置
    optimization: {
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
}