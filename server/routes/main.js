const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    //passing data in ejs
    const 
    locals = {
        title: "NodeJS Blog",
        description: "Simple Blog created with NodeJS, Express and MongoDB."
    };
    
    res.render('index', locals);
    //res.render('index', {local1, local2});
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;