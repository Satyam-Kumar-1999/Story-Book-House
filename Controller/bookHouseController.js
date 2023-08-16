const express = require("express");
const mySchema = require("../Models/bookModels");
const getAllBooks = async(req, res) => {
    const {
        book_id,
        title,
        author,
        genre,
        year,
        language,
        setting,
        sort,
        select
    } = req.query;
    const queryObject = {};
    if (book_id) {
        queryObject.book_id = book_id;
    }
    if (title) {
        queryObject.title = { $regex: title, $options: "i" };
    }
    if (author) {
        queryObject.author = { $regex: author, $options: "i" };
    }
    if (genre) {
        queryObject.genre = { $regex: genre, $options: "i" };
    }
    if (year) {
        queryObject.year = year;
    }
    if (language) {
        queryObject.language = { $regex: language, $options: "i" };
    }
    if (setting) {
        queryObject.setting = { $regex: setting, $options: "i" };
    }
    api = mySchema.find(queryObject);
    if (sort) {
        let sortData = sort.split(",").join(" ");
        api = api.sort(sortData);
    }
    if (select) {
        let selectData = select.split(",").join(" ");
        api = api.select(selectData);
    }
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 5;
    let skip = (page - 1) * limit;


    api = api.skip(skip).limit(limit);
    try {
        const Books = await api;

        res.status(200).json({
            Books,
            Page: page,
            "Contents Per Page": Books.length,
            "API Developer": "Satyam Kumar Jha"
        });
    } catch (error) {
        console.log(error);
    }
};
module.exports = { getAllBooks };