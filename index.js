var express = require('express')
var router = require('./router.js')
var routerProduct = require('./routerProduct.js')
var routerOrder = require('./routerOrder.js')
var routerSms = require('./routerSms.js')
var routerS3 = require('./routerS3.js')
var routerCS3 = require('./routerCS3')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express();
var server = require('http').Server(app)
var io = require('socket.io')(server)



mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/madb', { useNewUrlParser: true, useUnifiedTopology: true })
var db = mongoose.connection
db.on('error', console.error.bind(console, "error:"))
db.once('open', () => {
console.log('connected to mongodb')
 })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    next()
})

app.use('/v1/users', router)
app.use('/v1/products', routerProduct)
app.use('/v1/orders', routerOrder)
app.use('/v1/sendSms', routerSms)
app.use('/v1/routerS3', routerS3 )
app.use('/v1/routerCS3', routerCS3)


app.get('/', function(req, res) {
    res.json({status:'ok'});
});


app.io = io;

var port = 80801
var hostname ='localhost'
server.listen(port, function(){
	console.log("Server is running"); 
});


module.exports = app;