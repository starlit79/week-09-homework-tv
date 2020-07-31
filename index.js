const showdata = require('./showdata')

const express = require('express')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.render('index', { showdata })
})

app.get('/seasons/:number', (request, response) => {
    const seasonNum = showdata.seasons.find((seasonNum) => seasonNum.number === parseInt(request.params.number))
    
    return response.render('season', { seasonNum })
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1589, () => {
  console.log('Listening on port 1589...')
})