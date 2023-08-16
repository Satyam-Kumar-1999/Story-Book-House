require("dotenv").config();
const mongoose = require("mongoose");

const DBCONFIG = (uri) => {
    console.log("Under Database Connection.");
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};
module.exports = DBCONFIG;