import API from "./articlesCalls.js"
import renderArticleEntries from "./articlesList.js"
import newArticleButton from "./articlesClickEvents.js"


API.getAllArticles().then((response) => renderArticleEntries(response));