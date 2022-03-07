const express = require('express')
const app = express()

const logger = require('morgan')
app.use(logger('dev'))


app.get('/', (req,res) => {
    res.send('root page')
})

app.get('/messages', (req,res) => {
    res.render('messages.ejs', {messages})
})




let messages = [
    {name: "Jim", message: "Hi, how are you?"},
    {name: "Jane", message: "How about pasta for dinner?"},
    {name: "Gary", message: "I like my pasta with butter"}
]



const PORT = process.env.PORT || 3004
app.listen(PORT, () => console.log(`App is on port ${PORT}`))

