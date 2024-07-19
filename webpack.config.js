const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getClientEnvironment = require('./env');
const paths = require('./paths');

// Webpack uses `publicPath` to determine where the app is being served from.
// It requires a trailing slash, or the file assets will get an incorrect path.
const publicPath = paths.servedPath;
// Some apps do not use client-side routing with pushState.
// For these, "homepage" can be set to "." to enable relative asset paths.
const shouldUseRelativeAssetPaths = publicPath === './';
// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_URL%/xyz looks better than %PUBLIC_URL%xyz.
const publicUrl = publicPath.slice(0, -1);
// Get environment variables to inject into our app.
const env = getClientEnvironment(publicUrl);

// Assert this just to be safe.
// Development builds of React are slow and not intended for production.
if (env.stringified['process.env'].NODE_ENV === '"production"') {
  throw new Error('Production builds must have NODE_ENV=production.');
}

// Note: defined here because it will be used more than once.
const cssFilename = 'static/css/[name].[contenthash:8].css';

// ExtractTextPlugin expects the build output to be flat.
// (See https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/27)
// However, our output is structured with css, js and media folders.
// To have this structure working with relative paths, we have to use custom options.
const extractTextPluginOptions = shouldUseRelativeAssetPaths
  ? { publicPath: Array(cssFilename.split('/').length).join('../') }
  : {};

// This is the production and development configuration.
// It is focused on developer experience, fast rebuilds, and a minimal bundle.
module.exports = {
  mode: 'development',
  // Webpack 4 uses `optimization.splitChunks` instead of `CommonsChunkPlugin`.
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  // You may want 'eval' instead if you prefer to see the compiled output in DevTools.
  // See the discussion in https://github.com/facebook/create-react-app/issues/343
  devtool: 'cheap-module-source-map',
  entry: [
    // Include an alternative client for WebpackDevServer. A client's role is to connect to WebpackDevServer by a socket and get notified about changes.
    require.resolve('react-dev-utils/webpackHotDevClient'),
    // Finally, this is your app's code:
    paths.appIndexJs,
    // We include the app code last so that if there is a runtime error during initialization, it doesn't blow up the WebpackDevServer client, and vice versa.
  ],
  output: {
    // The build folder.
    path: paths.appBuild,
    pathinfo: true,
    // There will be one main bundle, and one file per asynchronous chunk.
    // We don't currently advertise code splitting but Webpack supports it.
    filename: 'static/js/bundle.js',
    // There are also additional JS chunk files if you use code splitting.
    chunkFilename: 'static/js/[name].chunk.js',
    // This is the URL that app is served from. We use "/" in development.
    publicPath: publicPath,
    // Point sourcemap entries to original disk location (format as URL on Windows).
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  resolve: {
    // This allows you to set a fallback for where Webpack should look for modules.
    // We placed these paths second because we want `node_modules` to "win" if there are any conflicts.
    // This matches Node resolution mechanism.
    // https://github.com/facebook/create-react-app/issues/253
    modules: ['node_modules', paths.appNodeModules].concat(
      // It is guaranteed to exist because we tweak it in `env.js`
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    // These are the reasonable defaults supported by the React ecosystem.
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      // Support React Native Web
      'react-native': 'react-native-web',
    },
    plugins: [
      // Prevents users from importing files from outside of src/ (or node_modules/). This often causes confusion because we only process files within src/ with babel.
      new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: require.resolve('react-dev-utils/eslintFormatter'),
              eslintPath: require.resolve('eslint'),
              // @remove-on-eject-begin
              baseConfig: {
                extends: [require.resolve('eslint-config-react-app')],
              },
              ignore: false,
              useEslintrc: false,
              // @remove-on-eject-end
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: paths.appSrc,
      },
      // Process application JS with Babel.
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: require.resolve('babel-loader'),
        options: {
          customize: require.resolve(
            'babel-preset-react-app/webpack-overrides'
          ),
          plugins: [
            [
              require.resolve('babel-plugin-named-asset-import'),
              {
                loaderMap: {
                  svg: {
                    ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                  },
                },
              },
            ],
          ],
          // This is a feature of `babel-loader` for Webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/ directory for faster rebuilds.
          cacheDirectory: true,
        },
      },
      // Process any CSS.
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // "file" loader makes sure assets end up in the `build` folder.
      // When you `import` an asset, you get its filename.
      // This loader doesn't use a "test" so it will catch all modules that fall through the other loaders.
      {
        // Exclude `js` files to keep "css" loader working as it injects its runtime that would otherwise fail.
        // Also exclude `html` and `json` extensions so they get processed by Webpack's internal loaders.
        exclude: [/\.(js|jsx)$/, /\.html$/, /\.json$/, /\.svg$/],
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      // "url" loader works like "file" loader except that it embeds assets smaller than specified limit in bytes as data URLs to avoid requests.
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      // Process SVG files with SVGR and File loader
      {
        test: /\.svg$/,
        use: [
          {
            loader: require.resolve('@svgr/webpack'),
            options: {
              throwIfNamespace: false,
              svgoConfig: {
                plugins: [
                  {
                    removeViewBox: false,
                  },
                ],
              },
            },
          },
          {
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    // Makes some environment variables available in index.html.
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
    // Makes some environment variables available to the JS code, for example:
    new webpack.DefinePlugin(env.stringified),
  ],
  // Some libraries import Node modules but don't use them in the browser. Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  // Turn off performance hints during development because we don't do any splitting or minification in interest of speed. These warnings become cumbersome.
  performance: {
    hints: false,
  },
};


