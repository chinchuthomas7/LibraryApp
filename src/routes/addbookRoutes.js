const express = require('express');

const addbookRouter = express.Router();

function router(nav)

{

    addbookRouter.get('/',function(req,res) 

{

    res.render("addbook",{nav,

    title:'ADD  BOOK ',

    head:'Add  A New Book ',

    button:'ADD BOOK'

}); 

});


    return addbookRouter;
}

module.exports = router; 