// const webpack = require("webpack")
const dotenv = require("dotenv-webpack")
const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const miniCssExtractPlugin = require("mini-css-extract-plugin")
const copyPlugin = require("copy-webpack-plugin")
const ESLintPlugin = require("eslint-webpack-plugin")

module.exports = {
	entry: [
		"@babel/polyfill",
		path.resolve(__dirname, "./src/index.js")
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/, /\.html$/],
				use: {
					loader: "babel-loader",
				}
			},
			{
				test: /\.(sass|less|css)$/,
				use: [
					{
						loader: miniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
					},
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|)$/i,
				type: "asset/resource",
			},
		],
	},


	plugins: [
		new dotenv(),
		// new webpack.HotModuleReplacementPlugin(),//fail
		new ESLintPlugin(),
		new htmlWebpackPlugin(
			{template: "./src/public/index.html"}
		),
		new miniCssExtractPlugin(
			{filename: "style.css",}
		),
		new copyPlugin({
			patterns: [
				{//don't copy *html to avoid index.html rewriting
					globOptions: {
						// gitignore: true,
						dot: true,
						ignore: "**/*.html",
					},
					from: path.resolve(__dirname, "./src/public/"),
					to: path.resolve(__dirname, "./build/")
				},
			],
		}),
	],

	output: {
		path: path.resolve(__dirname, "./build"),
		filename: "index.js",
		publicPath: "/"
	},

	devServer: {
		port: 7700,
		open: false,
		contentBase: path.resolve(__dirname, "./build"),
		hot: true,//FAIL
		overlay: true,
		historyApiFallback: true,
	},
};
