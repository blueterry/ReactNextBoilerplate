module.exports = function(config){
    config.set({
        browsers:['Chrome'],
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
        }
    })  
  }
