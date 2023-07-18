const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const { getDevPost } = require('@arifszn/blog-js');

app.use(express.static('static'));

app.get('/', (req, res) => {
    getDevPost({
        user: 'arifszn',
    }).then((data) => {
        res.send(data);
    }).catch((error) => {
        console.log(error);
        res.status(500).send('Internal Server Error');
    });
    res.send(data);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
