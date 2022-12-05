const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

//setting template engine(樣版引擎)
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// setting static files(載備靜態網頁Bootstrap、pooper等js、css檔)
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Express Server is worked on http://localhost/${port}`)
})
