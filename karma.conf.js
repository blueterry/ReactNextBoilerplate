const webpack = require('webpack')

module.exports = function(config){
    config.set({
        browsers:['PhantomJS'],
        singleRun: true,
        frameworks:['mocha'],
        files:[ 'node_modules/jquery/dist/jquery.min.js',
                
        'tests/**/*.test.js'],
        preprocessors: {
            'tests/**/*.test.js' : ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        client: {
            mocha: {
                timeout: '10000'
            }
        },
        webpack:{
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    { test: /\.(jpe?g|png|gif|svg)$/, loader: 'url', query: {limit: 10240} },
                    { test: /\.json$/, loader: 'json-loader' },
                    { test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap' },
                    { test: /\.js?$/, loader: 'babel',
                        query: {
                            presets: ['react', 'latest', 'stage-0']
                        },                        
                        exclude: /node_modules/
                    }
                ]
            },
            resolve: {
                root: __dirname,
                modulesDirectories: [
                    'pages',
                    'components',
                    'node_modules'
                ],
                extensions: ['', '.json', '.js']
            },
            externals:{
                jquery: 'jQuery'
            },
            plugins: [
                new webpack.NoErrorsPlugin({
                        '$':        'jquery',
                        'jQuery':   'jquery'
                }),
            ]
        },
        webpackServer: {
            noInfo: true
        }
    })  
  }
