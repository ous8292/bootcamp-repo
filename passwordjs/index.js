const { render } = require('ejs')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { deserializeUser } = require('passport')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const keys = require('./config/keys')


mongoose.connect(keys.mongoURI)
.then(() => console.log(`Connected to ${keys.db} database`))//tells us that we are connected to the particular db
.catch(err => console.log(`Issue connecting to ${keys.db} database`))

const User = require('./models/users')
//parses the sensitive information with post
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req,res) => {
    res.render('home.ejs')
})

app.get('/newsfeed', isLoggedIn, (req,res) => {
    res.render('newsfeed.ejs')
})

app.use(require('express-session')({
    secret: "blah blah blah", //
    resave: false,
    saveUninitialized: false
}))

app.get('/signup', (req,res)=>{
    res.render('signup.ejs')
})

app.post("/signup", function(req, res) {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("signup.ejs")
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/newsfeed");
            });
        }
    })
});


app.get('/login', (req,res)=>{
    res.render('login.ejs')
})

app.post('/login', passport.authenticate('local',
    {
        successRedirect: '/newsfeed',
        failureRedirect: '/login'
    }), function(req, res){
        // We don’t need anything in our callback function
        
});


app.get('/logout', (req,res) => {
    req.logout()
    res.redirect('/')
})
    //when we logout, passport destroys all user data in the session
    // then we redirect them to the home page
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

const isLoggedIn = (req,res, next) => {
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/login')
}
//is authenticated is a built in passport method
//it checks to see if a suser is logged in
//next tells

const PORT = process.env.PORT || 3004
app.listen(PORT, ()=> console.log(`you are on ${PORT}`))