'use strict'

const express = require('express')
const next = require('next')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.PORT = process.env.PORT || 3000

//const dev = process.env.NODE_ENV !== 'production'

const app = next({
    dir: '.',    
    dev:(process.env.NODE_ENV === 'development') 
})
const handle = app.getRequestHandler()
let server

app.prepare()
.then(() => {
  server = express()

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.use(function(req,res,next){
      if(req.headers['x-forwarded-proto'] === 'https'){
          res.redirect('http://'+req.hostname+req.url);
      } else{
          next();
      }
  })

  server.listen(process.env.PORT, (err) => {
    if(err){
        throw err
    }
    console.log('> Ready on http://localhost:' + process.env.PORT + '[' + process.env.NODE_ENV + ']')
  })
  
}).catch(err=>{
    console.log('An error occurred, unable to start the server')
    console.log(err)
})