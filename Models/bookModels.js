const mongoose = require("mongoose");
const mySchema = new mongoose.Schema({
    "book_id": {
        type: Number,
        required: true
    },
    "title": {
        type: String,
        required: true
    },
    "author": {
        type: String,
        required: true
    },
    "genre": {
        type: String,
        required: true
    },
    "year": {
        type: Number,
        required: true
    },
    "language": {
        type: String,
        required: true
    },
    "setting": {
        type: String,
        required: true
    },
    "description": {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("StoryHouse", mySchema);