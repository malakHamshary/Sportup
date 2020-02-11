const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



//config express to parse body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


//connect to database
const dbURL = "mongodb+srv://admin:admin96@cluster0-yh0yt.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(
    dbURL,
    {useNewUrlParser: true, useUnifiedTopology: true}
).then(
    (response)=>{
        console.log('db is connected')
    }
).catch(
    (e)=>{
        console.log('error is', e);
    }
)




app.listen(
    3010,
    ()=> {
        console.log("You are connected");
    }
)