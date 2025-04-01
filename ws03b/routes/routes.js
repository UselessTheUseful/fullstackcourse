const express = require('express');
const router = express.Router();

//E2 - E3 - E5

router.get('/', (req, res) => {
    const data = {
        message: "list of users",
        users: [
            {name: "John", age: 25},
            {name: "Jane", age: 22},
            {name: "Jim", age: 30}
        ]
        
    };

    res.render('pages/index', data);
});

//E4

router.get('/throwCoin', (req, res) => {
    let random = Math.floor(Math.random() * 2);
    let boolean = random == 0 ? true : false;

    res.render('pages/throwCoin', {boolean});
});

exports.router = router;