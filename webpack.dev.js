const { merge } = require("webpack-merge");
const common = require("./webpack.common.js"); // 引入公共的webpack配置

module.exports = merge(common, {
    devServer: {
        contentBase: "./dist", // 本地服务器所加载的文件的目录
        // port: "8081", // 服务的端口号
        inline: true, // 文件修改后实时刷新
        historyApiFallback: true, // 不跳转
        hot: true,
    },
});
