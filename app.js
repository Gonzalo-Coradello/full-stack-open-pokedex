const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 8080

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('28') // change this string to ensure a new version deployed
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${process.env.PORT || 8080}`)
})
