const express = require("express");
const articleRoutes = require("./routes/articleRoutes.js");

const app = express();
app.use(cors());


//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Adding prefix to routes
app.use("/api/v1", articleRoutes);




module.exports = app;  