require("dotenv").config();
const mongoose = require("mongoose");
const DBCONFIG = require("./Database/databaseConnection");
const mySchema = require("./Models/bookModels");
const jsonfile = require("./indian_story_books.json");

const ImportJsonFile = async() => {
    try {
        await DBCONFIG(process.env.MONGODB_URI);
        await mySchema.deleteMany();
        await mySchema.create(jsonfile);
        console.log("Success : JSON File Imported To MongoDB.");
    } catch (error) {
        console.error(error);
    }
};
ImportJsonFile();