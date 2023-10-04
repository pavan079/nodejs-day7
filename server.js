const express = require('express')
const bodyParser = require('body-parser')
const productRoutes = require('./routes/product_routes')
const db = require('./db/config')
const path = require('path')
const app = express()
const port =4003;

app.set('view engine','ejs');
// __dirname is the current working directory root path exposed by node js platform
// customized folder names for views can be created with below syntax
//app.set('views',path.join(__dirname).'/customFolderName')

// setting up two static content serving folders
app.use('/public',express.static(path.join(__dirname,'public')))
app.use('/dist',express.static(path.join(__dirname,'dist')))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use('/products',productRoutes)

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.listen(port,()=>{
    console.log(`server started listening via port${port}`);
})