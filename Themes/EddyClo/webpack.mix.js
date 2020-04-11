const mix = require('laravel-mix');
const WebpackShellPlugin = require('webpack-shell-plugin');
const themeInfo = require('./theme.json');

mix
    .react('resources/js/index.js', 'assets/js/');

/**
* Publishing the assets
*/
mix.webpackConfig({
    plugins: [
        new WebpackShellPlugin({ onBuildEnd: ['php ../../artisan stylist:publish ' + themeInfo.name] })
    ]
});