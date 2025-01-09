const express = require('express')
const app = express();

const cookieParser = require('cookie-parser')

app.use(cookieParser('thisismysecret'))

app.get('/greet', (req, res) => {
    const {name = 'no-name'} = req.cookies
    res.send(`Hey there ${name}`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'stevie')
    res.cookie('animal', 'goldie')
    res.send('sent you a cookie')
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', {signed: true})
    res.send('signed your cookie')
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies)
    res.send(req.signedCookies)
})

app.listen(3000, () => {
    console.log('SERVING')
})