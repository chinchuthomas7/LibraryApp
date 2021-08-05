const express = require('express');

const authorRouter = express.Router();

function router(nav)

{

var authors = [
    {
        name: 'Khaled Hosseini',
        books: 'The kite Runners, The Thousand Splendid Suns',
        genre: 'Tragedy,Drama',
        img: "hosse.jpg"
    },
    {
        name: 'Paulo Coehlo',
        books: 'The Alchemist,The Pilgrimage,The Winner Stands Alone',
        genre: 'Drama',
        img: "coe.jpg"
    },
    {
        name: 'Harper Lee',
        books: 'The Deception point, To kill a mocking bird',
        genre: ' thriller',
        img: "lee.jpg"
    },
    {
        name: 'F.Scott Fitzgerald',
        books: 'The Great Gtasby,The Curious Case of Benjamin Button',
        genre: ' thriller',
        img: "scott.jpg"
    }
]

authorRouter.get('/',function(req,res) 

{

    res.render("authors",{nav,
        
    title:'AUTHORS',

    authors

}); 

});

authorRouter.get('/:id',function(req,res)   

	{

	    const id = req.params.id

        res.render("author",{nav,

	    title:'AUTHOR PAGE',

	    author: authors[id]

	}); 

    }); 

    return authorRouter;
}

module.exports = router; 