const express = require("express");
const { addArticle, getArticles, updateArticle, deleteArticle, searchArticle } = require("../controllers/article.controller");
const router = express.Router();


router.route("/article/add").post(addArticle);
router.route("/articles").get(getArticles);
router.route("/article/:articleId").put(updateArticle).delete(deleteArticle);
router.route("/article/search").get(searchArticle);

module.exports = router;