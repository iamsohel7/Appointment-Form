const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

//App Cofig
const app = express();
const port = process.env.PORT || 5000;


//Middlewares

app.use(cors())
app.use(express.json());

//DB config
const connection_url = process.env.ATLAS_URI;

mongoose.connect(connection_url, { 
    useNewUrlParser: true, 

    useUnifiedTopology: true 
 }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const formRoute = require('./routes/form');

app.use('/form', formRoute);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});