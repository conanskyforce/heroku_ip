const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/api/whoami',(req,res) =>{
  	// console.log(req);
  	const host = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null);
  	const lang = req.headers['accept-language'].split(",")[0];
  	const software = req.headers['user-agent'].split(" (")[1].split(") ")[0];
  	var resp = {
  		"ipaddress":host,
  		"language":lang,
  		"software":software
  	}
  	res.send(JSON.stringify(resp));
  } )
  .get('/', (req, res) => res.send('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
