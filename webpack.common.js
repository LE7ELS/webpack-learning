const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // 也可以使用js的内置模块path来处理绝对路径
    entry: {
        index: __dirname + "/src/index.js", // 入口文件
        two: __dirname + "/src/two.js", // 入口文件
    },
    output: {
        path: __dirname + "/dist", // 打包后的文件存放的地方
        filename: "[name].js", // 打包后输出文件的文件名
    },
    module: {
        rules: [
            {
                test: /\.css$/, // 匹配以.css结尾的文件
                use: [
                    // 采用对象的形式配置loader
                    {
                        loader: MiniCssExtractPlugin.loader, // 使用mini-css-extract-plugin插件提取css
                    },
                    // {
                    //     loader: "style-loader", // 此loader与mini-css-extract-plugin插件冲突，可注释（https://stackoverflow.com/questions/63539242/module-build-failed-from-node-modules-mini-css-extract-plugin-dist-loader-js）
                    // },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader", // 使用postcss-loader。其配置也单独抽离到postcss.config.js文件中
                    },
                ],
            },
            {
                // css预处理器的loader的使用
                test: /\.(scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // "style-loader",
                    "css-loader",
                    "sass-loader",
                ], // 需要用到的loader，注意顺序。调用loader是从右往左编译的
            },
            {
                // jsx的支持
                test: /(\.jsx|\.js)$/,
                use: {
                    // use有多项配置可以写成对象的形式而不用数组
                    loader: "babel-loader",
                    // options: {
                    //     // 单独抽离到 .babelrc 文件中配置
                    //     presets: ["env", "react"],
                    // },
                },

                exclude: /node_modules/,
            },
            // 使用url-loader处理图片（url-loader依赖于file-loader）
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 1000, // 限制只有小于1kb的图片才转为base64。例子中的图为300k左右，故会被优化成base64的形式以减少请求
                            outputPath: "img", // 设置打包后图片存放的文件夹名称
                        },
                    },
                ],
            },
        ],
    },
    // 使用插件
    plugins: [
        new webpack.BannerPlugin("版权所有，盗版必究"), // webpack自带的版权插件
        new HtmlWebpackPlugin({
            // new一个这个插件的实例，并传入相关的参数
            template: __dirname + "/src/index.template.html",
        }),
        new webpack.HotModuleReplacementPlugin(), // 热更新插件
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }), // 将css分离到/dist文件夹下独立为css文件
    ],
};
