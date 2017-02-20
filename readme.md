
This is a React - Redux plus Next.js and AdminLTE-React Boilerplate App to make your life easier.

    Next.js version: 2.0.0-beta.31   https://github.com/zeit/next.js
    Redux version: 3.6.0


Progress & Problems

Follow the Next.js installation to set up the Project

1. install next.js follow the steps by zeit/Next.js https://github.com/zeit/next.js:

  1.1. npm install next react react-dom --save

  1.2. add script to the package.json :

            {
                "scripts": {
                    "dev": "next",
                    "build": "next build",
                    "start": "next start"
                }
            }

2. Added the user interface switch support 
3. Added the notification feature
4. Upgrade Next.js from ver.1.2.3 to ver.2.0.0-beta.31

Todos:

1. Todo: try to modify the web server setting to be able to upload to Heroku
    
    2.1. Add express support with sample provided by Next.js
    
        Problem:
            -- cannot change the default port under current Next.js version 1.2.3 , waiting for 2.0.0
            -- cannot change https to http ..

2. Todo: add testing feature 

    3.1. use Karma as test tool
    3.2. npm install karma karma-chrome-launcher karma-mocha karma-mocha-reporter karma-sourcemap-loader karma-webpack mocha expect --save
    3.3. add karma.conf.js

        Problem:
            -- cannot expose webpack.config.js , so cannot use karma for test.
            -- cannot add loader for different file types, cannot test


