
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

5. Add server.js to the root folder for user be able to customize web server using express 

Todos:

1. Todo: try to modify the web server setting to be able to upload to Heroku
    
    rev. 1. Add express support with sample provided by Next.js
    
        Problem:
            -- cannot change the default port under current Next.js version 1.2.3 , waiting for 2.0.0 [!Solved!]
            -- cannot change https to http .. [!Solved! see below : rev 2]

    rev. 2. Add express support, now can upload to heroku and be able to customize              port & https->http, however still cannot run on heroku.
    
        Problem:
            -- Because next.js pre-compile files to /.next folder are using absolute path for reference which are not able to re-compile on heroku server.

2. Todo: add testing feature 

    rev 1. use Karma as test tool
    rev 2. npm install karma karma-chrome-launcher karma-mocha karma-mocha-reporter karma-sourcemap-loader karma-webpack mocha expect --save
    rev 3. add karma.conf.js

        Problem:
            -- cannot expose webpack.config.js , so cannot use karma for test.[!Solved! upgrade to next.js 2.0.0-beta]
            -- cannot add loader for different file types, cannot test [!Solved! upgrade to next.js 2.0.0-beta]

    rev 4. add webpack section in the karma.conf.js, 
        
        Problem:
            -- tried to npm webpack to --save-dev but not work , could be confilited with existing version in next.js, just use existing webpack ver 1.4

    rev 5. add more npm packages for testing: babel, jQuery, phantomjs etc. see package.json devDependencies for detail 
        Problem:
            -- still trying to find way to be able to test components and pages 



