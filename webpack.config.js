var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new webpack.LoaderOptionsPlugin({
            test: /\.scss$/,
            options: {
                sassLoader: {
                    includePaths: [
                        path.resolve(__dirname, './node_modules/foundation-sites/scss')
                    ]
                }
            }
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        alias: {
            Main: path.resolve(__dirname, 'app/components/Main.jsx'),
            Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
            applicationStyles: path.resolve(__dirname, './app/styles/app.scss'),
            Countdown: path.resolve(__dirname, 'app/components/Countdown.jsx'),
            Timer: path.resolve(__dirname, 'app/components/Timer.jsx'),
            Clock: path.resolve(__dirname, 'app/components/Clock.jsx'),
            CountdownForm: path.resolve(__dirname, 'app/components/CountdownForm.jsx'),
            Controls: path.resolve(__dirname, 'app/components/Controls.jsx'),
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    // sassLoader: {
    //     includePaths: [
    //         path.resolve(__dirname, '.node_modules/foundation-sites/scss')
    //     ]
    // },
    devtool: 'cheap-module-eval-source-map'
}