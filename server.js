
const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 5000


app.use(express.urlencoded({ extended: true }))
app.use(express.static('./client/public'))

app.get("/api/restaurants", (req, res) => {
    res.sendFile(path.resolve('./api/restaurantsDirectory.json'))
})

app.get("/api/:id", (req, res) => {
    response.sendFile(path.resolve('./api/'+request.params.id+'.json'));
  });













app.get('*', (req, res) => {
    res.sendFile(path.resolve('./client/public/index.html'))
})


app.listen(port, () => {
    console.log('listening on port:', port)
})