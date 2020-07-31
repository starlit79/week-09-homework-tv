const showdata = require('./showdata')

const express = require('express')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.render('index', { showdata })
})
//in level 2 {showdata} was not written in line 12

app.get('/season/:number', (request, response) => {
    const season = showdata.seasons.find((season) => season.number === parseInt(request.params.number))
    
    return response.render('season', { season, title: showdata.title })
    //looked at level 2 for this part, and changing variable name from seasonNum to season to avoid confusion
    //destructuring title: showdata.title? need some explanation how this info is communicating with season.pug
    //'season' is pulling season.pub file?
    //what is render doing in this case?
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1589, () => {
  console.log('Listening on port 1589...')
})