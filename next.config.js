
const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');
const withurlLoader = require('url-loader');

module.exports = withPlugins(
	[withAntdLess],
	[withurlLoader,
		{ test: /\.(woff2|woff|ttf|eot|svg|png|jpe?g|gif|svg|ico)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/, use: 'url-loader?limit=100000' }
	])

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpg|gif)$/i,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 8192,
//             },
//           },
//         ],
//       },
//     ],
//   },
// };
// module.exports = withCSS(withSass({
//   webpack (config, options) {
//     config.module.rules.push({
//       test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//       use: {
//         loader: 'url-loader',
//         options: {
//           limit: 100000
//         }
//       }
//     })
//     return config
//   }
// }))

