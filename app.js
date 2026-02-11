const express = require('express')
const app = express()
const port = 3000

// importo il middelware 
const errorsHandler = require("./middlewares/errorsHandler")

// importiamo le rotte dei post
const postRoutes = require('./‎routes/post');

// middleware per leggere JSON (servirà dopo)
app.use(express.json());

// rotta base
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// colleghiamo le rotte dei post
app.use('/posts', postRoutes);

app.use(errorsHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});