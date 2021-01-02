require('./modals/user');
require('./modals/track');
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const bodyParser = require('body-parser');
const requiredAuth = require('./middleware/requiredAuth')


const app = express();

const mongoUri = 'mongodb+srv://admin:adminpassword@cluster0.7wfc3.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log("DB connected")
})

mongoose.connection.on('error', () => {
    console.error("error connecting to mongo")
})

app.use(bodyParser.json())
app.use(authRoutes);
app.use(trackRoutes);

app.get("/",requiredAuth, (req, res) => {
    res.send(`your eamil ${req.user.email}`)
})

app.listen(3000, () => {
    console.log("App started")
})