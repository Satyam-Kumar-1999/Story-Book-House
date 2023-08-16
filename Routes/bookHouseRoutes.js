const express = require("express");
const routers = express.Router();
const { getAllBooks } = require("../Controller/bookHouseController");
routers.route("/books").get(getAllBooks);
module.exports = routers;