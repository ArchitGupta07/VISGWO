console.log("I am in an express project")

const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require("dotenv").config();
// const path = require('path');
const app = express()



const port = process.env.PORT || 3000;


app.use(express.json());

app.use(errorHandler);


app.use("/api/contacts", require("./routes/contactRoutes"));


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })
