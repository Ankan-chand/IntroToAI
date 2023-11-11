const Articles = require("../models/article.model");
const asyncHandler = require("../utils/asyncHandler");
const ErrorHandler = require("../utils/ErrorHandler");
const nodeCache = require("node-cache");

const cache = new nodeCache({
    stdTTL: 60*5
});

//create new article
exports.addArticle = asyncHandler(async (req, res, next) => {
    const {title, content, author} = req.body;

    if(!title || !content || !author){
        return next(new ErrorHandler("Please provide all the details", 400));
    }

    await Articles.create({
        title: title,
        content: content,
        author: author,
    });

    cache.flushAll();

    res.status(201).json({
        success: true,
        message: "Article added successfully",
    });
    
});


//update article
exports.updateArticle = asyncHandler(async(req, res, next) => {
    const articleId = req.params.articleId;
    const {title, content} = req.body;
    
    if(!articleId){
        return next(new ErrorHandler("Article id not found!!", 400));
    }

    const article = await Articles.findById(articleId);

    if(!article || article.length === 0){
        return next(new ErrorHandler("Nothing matched!!", 404));
    }

    if(title){
        article.title = title;
    }

    if(content){
        article.content = content;
    }

    await article.save();
    cache.flushAll();

    res.status(200).json({
        success:true,
        message: "Article updated successfully",
    });

});


//delete article
exports.deleteArticle = asyncHandler(async(req, res, next) => {
    const articleId = req.params.articleId;
    
    if(!articleId){
        return next(new ErrorHandler("Article id not found!!", 400));
    }

    const article = await Articles.findById(articleId);

    if(!article || article.length === 0){
        return next(new ErrorHandler("Nothing matched!!", 404));
    }

    await Articles.deleteOne({_id:article._id});

    cache.flushAll();

    res.status(200).json({
        success:true,
        message: "Article deleted successfully",
    });

});


//fetch all articles
exports.getArticles = asyncHandler(async (req, res, next) => {
    let articles;

    if(cache.has("articles")){
        //fetch the result from cache
        articles = JSON.parse(cache.get("articles"));

    } else{
        articles = await Articles.find();

        if(!articles || articles.length === 0){
            return next(new ErrorHandler("No article found!!", 404));
        }
        //cache the result
        cache.set("articles", JSON.stringify(articles));
    }
    
    res.status(200).json({
        success: true,
        articles,
    });
});


//fetch article by title
exports.searchArticle = asyncHandler(async (req, res, next) => {
    const {title} = req.query;

    if(!title){
        return next(new ErrorHandler("Please provide the search query!!", 400));
    }

    let article;

    if(cache.has(title)){
        //fetch the article from the cache
        article = JSON.parse(cache.get(title));

    } else{
        article = await Articles.find({title:title});

        if(!article || article.length === 0){
            return next(new ErrorHandler("Article not found!!", 404));
        }

        //cache the result
        cache.set(title, JSON.stringify(article));
    }

    res.status(200).json({
        success: true,
        article,
    });
});