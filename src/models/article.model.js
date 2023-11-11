const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publishedAt: {
        type: Date,
        default: new Date().toLocaleDateString()
    }
});

module.exports = mongoose.model("Article", articleSchema);