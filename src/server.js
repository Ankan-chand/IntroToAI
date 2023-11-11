const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./db/connectDB");
const errorMiddlerware = require("./middlewares/errorMiddleware");

if(process.env.NODE_ENV !== "production"){
    dotenv.config({path: "config/config.env"});
}

//Connect database
connectDB();

//unknown routes
app.use((req, res) => {
    res.status(404).json({
        error: "Route not found"
    })
})

//Error handling middlware
app.use(errorMiddlerware);
 
app.listen(process.env.PORT || 3000, () => {
    console.log(`server is running on port ${process.env.PORT}`);
});