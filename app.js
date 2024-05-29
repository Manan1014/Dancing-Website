const express = require("express");
const fs = require("fs");
const app = express();
const port = 80;
const path = require("path");
app.use('/static', express.static('static')) 
app.use(express.urlencoded())

app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('index.pug', params);
})
app.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('service.pug', params);
})


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});