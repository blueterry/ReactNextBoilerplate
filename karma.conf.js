
module.exports = function(config){
    config.set({
        browsers:['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files:['tests/**/*.test.jsx'],
        preprocessors:{
            'tests/**/*.test.jsx': ['webpack', 'sourcemap']
        },
        reporters:['mocha'],
        client:{
            mocha:{
                timeout: '10000'
            }
        },
        webpackServer:{
            noInfo: true
        }

    })
}