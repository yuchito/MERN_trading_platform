const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();



// bosy parser middleware
app.use(express.json());

// DB config
const db = config.get('mongoURI');

// connect to mongo
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(() => console.log("MongoDB is connected.."))
.catch(err => console.log(err));

// use routes
// const users = require('./routes/api/users');
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));