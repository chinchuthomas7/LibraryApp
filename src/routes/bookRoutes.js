const express = require('express');

const booksRouter = express.Router();

function router(nav)

{

var books = [
    {
        title: 'The Alchemist',
        author: 'Paulo Coehlo',
        genre: 'Drama',
        img: "paulo.jpg"
    },
    {
        title: 'The thousand splendid suns',
        author: 'Khaled Hosseini',
        genre: 'Novel',
        img: "khaled.jpg"
    },
    {
        title: 'To Kill a Mocking bird',
        author: 'Harper Lee',
        genre: 'Thriller',
        img: "kill.jpg"
    },
    {
        title: 'To Great Gatsby',
        author: 'F.Scott Fitzguard',
        genre: 'Fiction',
        img: "gatsby.jpg"
    }
]

booksRouter.get('/',function(req,res) 

{

    res.render("books",{nav,
        
    title:'BOOKS ',

    books

}); 

});

booksRouter.get('/:id',function(req,res)   

	{

	    const id = req.params.id

        res.render("book",{nav,
            
	    title:'BOOK PAGE',

	    book: books[id]

	}); 

    }); 

    return booksRouter;
}

module.exports = router; 