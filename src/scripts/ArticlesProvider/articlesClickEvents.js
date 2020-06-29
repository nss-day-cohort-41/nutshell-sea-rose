//code written by JR to add functionality to the "New Article" button.
import makeArticleList from "./articlesList.js"
import API from "./articlesProvider.js";

const articleContainer = document.querySelector(".postedNews__Selection");

export default {
    registerListeners() {
        articleContainer.addEventListener("click", event => {
            console.log("test", event.target.id);
            if (event.target.id.startsWith("deleteArticle--")) {
                const articleToDelete = event.target.id.split("--")[1];
                console.log(articleToDelete);

                API.deleteArticle(articleToDelete)
                .then(makeArticleList)
            }
        })
    }}