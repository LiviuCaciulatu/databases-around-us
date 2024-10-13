const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const bookSchema = new Schema({
title: String,
author: String,
genre: String,
createdAt: Date,
updatedAt: Date
});

const Book = model('Book', bookSchema);


module.exports = Book;