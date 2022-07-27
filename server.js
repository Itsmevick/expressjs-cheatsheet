const express = require('express')
const app = express()

app.set('view engine', 'ejs')
//app.use(logger)
app.use(express.static("public"))
app.use(express.urlencoded({extended: true})) //The true flag helps to remove warnings
app.use(express.json())


/*
app.get('/', logger, (req, res) => {
    console.log("Here")
    res.render('index', {textss: 'World'})
})
*/
const userRouter = require('./routes/users')
app.use('/users', userRouter)

// function logger(req, res, next){
//     console.log(req.originalUrl)
//     next()
// }

app.listen(3000)

//Main HTTP requests get, put, post, delete, patch
//rendering json for apis
//rendering html for full stack applications
//rendering downloads
//Using routers
//Middlewares can be applied to a particular request only
//Multiple middlewares can be applied to a single rquests
//Using middlewares to pass data from forms and json
//Using the middleware urlencoded allows to use url from forms