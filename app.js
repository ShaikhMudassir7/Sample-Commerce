var express = require("express");
const http = require("http");
const dotenv = require("dotenv");
dotenv.config();
const session = require('express-session');
var mongoose = require("mongoose");

const port = process.env.PORT;
const app = express();

const adminRoute = require("./api/routes/admin")
const orderRoute = require("./api/routes/orders")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

mongoose.connect(
    "mongodb+srv://entwicklera:entw2020@cluster0.ns4yy5i.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/font', express.static(__dirname + 'public/font'))
app.use('/vendor', express.static(__dirname + 'public/vendor'))
app.use('/components', express.static(__dirname + 'public/components'))
app.use('/uploads', express.static(__dirname + 'public/uploads'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.use('/admin', adminRoute)
app.use('/orders', orderRoute)

const server = http.createServer(app);
server.listen(port, () => {
    console.log("Listening on port " + port);
});