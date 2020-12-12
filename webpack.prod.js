const { merge } = require("webpack-merge");
const common = require("./webpack.common.js"); // 引入公共的webpack配置
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 新版的引用方式已改成此方式
const PurifycssWebpack = require("purifycss-webpack"); // 使用purifycss-webpack插件减少css冗余
const glob = require("glob"); // 引入glob模块，用于扫描全部html文件中所引用的css

// 将webpack公共配置合并到当前文件
module.exports = merge(common, {
    devtool: "source-map", // 会生成对于调试的为保证的.map文件，但同时也会减慢打包的速度
    // 使用插件
    plugins: [
        new CleanWebpackPlugin({
            template: __dirname + "/dist", // 所要清理的文件夹名称
        }),
        // 需要在package.json配置browserslist才能生效
        new PurifycssWebpack({
            paths: glob.sync(__dirname + "/src/*html"), // 同步扫描所有html文件中所引用的css
        }),
    ],
});
