const gulp = require("gulp");
const webpackStream = require('webpack-stream');
const path = require("path");
const multipipe = require("multipipe");
const notify = require("gulp-notify");
const isDevelopment = require("./../constants.js").isDevelopment;
const webpack = require("webpack");
const named = require('vinyl-named');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = function (options) {
	return function () {
		return multipipe(
			gulp.src(options.src),
			named(),
			webpackStream({
				mode: isDevelopment ? "development" : "production",
				output: {
					filename: "[name].js",
				},
				module: {
					rules: [
						{
							test: /\.(js)$/,
							exclude: /(node_modules)/,
							use: {
								loader: 'babel-loader',
								options: {
									presets: ['@babel/preset-env']
								}
							}
						},
						{
							test: /\.vue$/,
							loader: 'vue-loader'
						}
					]
				},
				resolve: {
					alias: {
						"@scripts": path.resolve(__dirname, "../../", "source/scripts/"),
						"@utils": path.resolve(__dirname, "../../", "source/scripts/utils"),
						"@form": path.resolve(__dirname, "../../", "source/scripts/form/"),
						"@popup": path.resolve(__dirname, "../../", "source/scripts/popup/")
					}
				},
				plugins: [
					new webpack.ProvidePlugin({
						$: "jquery",
						jQuery: "jquery"
					}),
					new VueLoaderPlugin()
				]
			}),
			gulp.dest(options.dest)
		).on("error", notify.onError());
	}
}