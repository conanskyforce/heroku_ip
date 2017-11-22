const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/api/whoami',(req,res) =>{
  	res.send('idiot')
  } )
  .get('/', (req, res) => res.send('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
