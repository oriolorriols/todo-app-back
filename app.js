const express = require("express");
const cors = require('cors')
const port = 3000;
// const allData = require('./data/toDoItemLists.json')

const app = express();
app.use(express.json());

app.use(cors(corsOptions));
var corsOptions = { 
    origin: '*',
}

require('dotenv').config()

const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASSWORD + "@"+process.env.DB_SERVER + "/" + process.env.DB_NAME + "?retryWrites=true&w=majority";

async function main() {
  await mongoose.connect(mongoDB);
  console.log("connected to db")
}
main().catch(err => console.log(err));


const { taskRouter } = require("./routes/tasksRoutes");
const { columnRouter } = require("./routes/columnsRoutes");
const { columnOrderRouter } = require("./routes/columnOrderRoutes");


app.use('/tasks', taskRouter)
app.use('/column', columnRouter)
app.use('/ordercolumns', columnOrderRouter)










const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = { app, server };
