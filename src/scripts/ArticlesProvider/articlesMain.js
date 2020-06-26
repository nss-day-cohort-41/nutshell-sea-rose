import API from "./articlesCalls.js"
import renderArticleEntries from "./articlesList.js"


API.getAllArticles().then((response) => renderArticleEntries(response));