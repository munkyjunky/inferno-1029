var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	entry: path.join(__dirname, 'src', 'index.js'),

	module: {
		loaders: [
			{test: /\.js(x)?$/, loader: 'babel', exclude: /(node_modules|bower_components|res\/swf)/},
		]
	},

	resolve: {
		extensions: ['', '.js', '.jsx', '.json', '.sass', '.scss'],

		alias: {
			'react': 'inferno-compat',
			'react-dom': 'inferno-compat'
		}
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.ejs'),
			inject: 'body'
		}),
	]
};
