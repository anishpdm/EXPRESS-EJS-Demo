const express=require('express');

var app=express();


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get('/', (req,res)=>{

res.render('index',{title:'test Data',mylist:['Anish','Anoop']});
} );


app.post('/test',(req,res)=>{
    res.send('accepted');
})

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});
