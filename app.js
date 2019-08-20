const express=require('express');
var bodyParser = require('body-parser');
const Mongoose = require("mongoose");
var request = require('request');

var app=express();

const PersonModel = Mongoose.model("person", {
    firstname: String,
    lastname: String
});


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//mongodb+srv://anishsnair:<password>@cluster0-rqfpy.mongodb.net/test?retryWrites=true&w=majority
// Mongoose.connect("mongodb://localhost/thepolyglotdeveloper");
Mongoose.connect("mongodb+srv://anishsnair:hello12345@cluster0-rqfpy.mongodb.net/test?retryWrites=true&w=majority");


app.get("/people", async (request, response) => {
    try {
        var result = await PersonModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});





app.get('/', (req,res)=>{

res.render('index',{title:'test Data',mylist:['Anish','Anoop']});
} );


app.post('/test',(req,res)=>{
    res.send('accepted');
})

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});
