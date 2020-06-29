//code written by JR to add functionality to the "New Article" button.
import makeArticleList from "./articlesList.js"
import API from "./articlesProvider.js";

//where the action is happening in the index
const articleContainer = document.querySelector(".postedNews__Selection");

export default {
    registerListeners() {
        //the click even for deleting an article object
        articleContainer.addEventListener("click", event => {
            console.log("test", event.target.id);
            if (event.target.id.startsWith("deleteArticle--")) {
                const articleToDelete = event.target.id.split("--")[1];
                console.log(articleToDelete);

                API.deleteArticle(articleToDelete)
                    .then(makeArticleList)
            }
        })
        //playing around with trying to get the timestamp
        var dateTime = Date();
        document.getElementById("datetime").innerHTML = dateTime.toLocaleString();
    }
}