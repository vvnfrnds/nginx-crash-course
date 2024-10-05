const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`Request served by ${process.env.APP_NAME}`);
});

app.listen(port, () => {
    console.log(`${process.env.APP_NAME} is listening on port ${port}`);
});
