const express = require("express");
const cors = require('cors')
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors(corsOptions));

var corsOptions = { 
    origin: '*',
}



app.get('/tasks')

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = { app, server };
