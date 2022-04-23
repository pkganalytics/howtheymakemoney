
const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
const withurlLoader = require('url-loader');

module.exports = withPlugins(
	[withAntdLess],
	[withurlLoader,
		{ test: /\.(woff2|woff|ttf|eot|svg|png|jpe?g|gif|svg|ico)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/, use: 'url-loader?limit=100000' }

	]);
