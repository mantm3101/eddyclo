const mix = require('laravel-mix');
const WebpackShellPlugin = require('webpack-shell-plugin');
const themeInfo = require('./theme.json');

mix
    .react('resources/js/index.js', 'assets/js/');

mix.copyDirectory('resources/images', 'assets/images');

mix.copyDirectory('resources/lib', 'assets/lib');

mix.less('resources/less/main.less', 'assets/css/main.css');



/**
* Publishing the assets
*/
mix.webpackConfig({
    plugins: [
        new WebpackShellPlugin({ onBuildEnd: ['php ../../artisan asgard:publish:theme ' + themeInfo.name] })
    ]
});