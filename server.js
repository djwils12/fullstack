const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Routes
const studentRoute = require('./routes/studentRoute');
app.use('/student', studentRoute);

const gradeRoute = require('./routes/gradeRoute');
app.use('/grade', gradeRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Connecting to the database
const mongoose = require('mongoose');

// Syncronous connection
// mongoose.connect('mongodb://localhost:27017/StudentDB', {useNewUrlParser: true}, (err) => {
//     if (!err) {console.log('MongoDB connection succeeded.')}
//     else {console.log('Error in DB connection: ' + err)}
// });

// Asyncronous connection
mongoose.connect('mongodb+srv://ift458user:ift458password@ift458cluster.ncxl2jv.mongodb.net/demo', {useNewUrlParser: true})
    .then(() => console.log('Connection successful'))
    .catch((err) => console.log(err));