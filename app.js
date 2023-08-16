require("dotenv").config();
const express = require("express");
const DBCONFIG = require("./Database/databaseConnection");
const BOOK_ROUTE = require("./Routes/bookHouseRoutes");
const app = express();
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send("Welcome To My Book House. Here You will get Collection of Indian Story Books and more Interesting books");
});
app.use("/api/bookhouse", BOOK_ROUTE);
const CONFIG = async() => {
    try {
        await DBCONFIG(process.env.MONGODB_URI);
        app.listen(PORT, () => {
            console.log(`Success : Active Port => ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
};

CONFIG();