const express = require('express')
const router = express.Router()

//Apply logger middleware to all requests
router.use(logger)

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send('Users list')
})

router.get('/new', (req, res)=>{
    console.log("Hello from new")
    res.render("users/new", {firstName: "Name"})
})

router.post('/', (req, res)=>{
    
    const isValid = false
    if (isValid) {
        users.push ({firstName : req.body.firstName})
        res.redirect(`/users/${users.length-1}`)
    }else{
        console.log("Error")
        res.render('users/new', { firstName: req.body.firstName})
    }
})

router
    .route("/:id")
    .get((req, res)=>{
        //req.params.id
        console.log(req.user)
        res.send(`Get the user with ID  ${req.params.id}`)
    })
    .put((req, res)=>{
        //req.params.id
        res.send(`Update user with ID  ${req.params.id}`)
    })
    .delete((req, res)=>{
        //req.params.id
        res.send(`Delete user with ID  ${req.params.id}`)
    })

const users = [{name: "john"}, {name:"jane"}]

router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
 })

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
   }

/*

router.get('/:id', (req, res)=>{
    //req.params.id
    res.send(`Get the user with ID  ${req.params.id}`)
})
router.put('/:id', (req, res)=>{
    //req.params.id
    res.send(`Update user with ID  ${req.params.id}`)
})
router.delete('/:id', (req, res)=>{
    //req.params.id
    res.send(`Delete user with ID  ${req.params.id}`)
})

*/
module.exports = router


//Note
//Dynamic route overrides other routes
//Put static routes above dynamic routes
//router.route can takes a path and all http requests by chaining all the requests
//router.param runs everytime it finds a parameter that matches the name you passed in
//param is a version of middleware