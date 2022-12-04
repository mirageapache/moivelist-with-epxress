const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
  res.send('this websit is for movie list')
})

app.listen(port, () => {
  console.log(`Express Server is worked on http://localhost/${port}`)
})
