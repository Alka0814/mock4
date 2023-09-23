const express = require('express');

const { connection } = require('./config/db');
var cors = require('cors');
const { BookRoute } = require('./routes/book.route');
require('dotenv').config()
const app = express();
app.use(express.json())
app.use(cors())
app.use("/book", BookRoute)

app.listen(4500, async () => {

    try {
        await connection
        console.log("server listening on port 4500");
    } catch (error) {
        console.log("DB is Disconnected");
    }
})