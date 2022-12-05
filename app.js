const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000
const movieList = require('./movie_list.json')

//setting template engine(樣版引擎)
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// setting static files(載備靜態網頁Bootstrap、pooper等js、css檔)
app.use(express.static('public'))

// index page
app.get('/', (req, res) => {
  res.render('index', {movies: movieList.results})
})

// search page
app.get('/search', (req, res) => {
  const movies = movieList.results.filter(movie => {
    return movie.title.toLowerCase().includes(req.query.keyword.toLowerCase())
  })

  res.render('index', {movies:movies, keyword:req.query.keyword})
})

// show movie page
app.get('/movies/:movie_id', (req,res) => {
  const movie = movieList.results.filter(movie => movie.id === Number(req.params.movie_id))
  res.render('show', { movie:movie[0] })
})


app.listen(port, () => {
  console.log(`Express Server is worked on http://localhost/${port}`)
})
