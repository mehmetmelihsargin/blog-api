const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
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
});
const PORT = process.env.PORT || 3010
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
