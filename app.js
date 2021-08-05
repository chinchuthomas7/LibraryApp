const express = require('express');
const app = new express(); 
const port = process.env.PORT || 5000;

const nav = 

[

    {link:'/books',name:'Books'},
    
    {link:'/authors',name:'Authors'},

    {link:'/signup',name:'Sign Up'},

    {link:'/login',name:'Login'},

    {link:'/addbook',name:'Add Book'},

    {link:'/addauthor',name:'Add Author'}


];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const addbookRouter = require('./src/routes/addbookRoutes')(nav);
const addauthorRouter = require('./src/routes/addauthorRoutes')(nav);



app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+ '/src/views')
app.use('/books',booksRouter);
app.use('/authors',authorRouter); 
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);


var articles = [
    {
        title: 'Reading Makes You More Empathetic. Reading is a way to escape your own life, and can take you to faraway lands, other times, and put you in other peoples shoes.',
      
        
    },
    {
        title: 'The more you read, the more words you gain exposure to, and they’ll inevitably make their way into your everyday vocabulary.',
       
        
    },
    {
        title: 'No matter how much stress you have at work, in your personal relationships, or countless other issues faced in daily life, it all just slips away when you lose yourself in a great story.',
        
      
       
    }
    
]

app.get('/',function(req,res) 

{

    res.render("index",{

    nav,

    title:'Library App',

    articles

}); 

});


app.listen(port, ()=>{console.log("server ready at" + port)});