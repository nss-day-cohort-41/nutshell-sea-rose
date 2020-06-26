import API from "./articlesCalls.js"
import renderArticleEntries from "./articlesList.js"
import newArticleButton from "./articlesClickEvents.js"
import createArticleEntry from "./articlesFactory.js"


API.getAllArticles().then((response) => renderArticleEntries(response));

const recordArticleEntry = document.querySelector(".save__article")
recordArticleEntry.addEventListener("click", event => {
    const title = document.querySelector(".news__title").value
    const synopsis = document.querySelector(".news__synopsis").value
    const url = document.querySelector(".news__url").value

    if (title === "" || synopsis === "" || url === "") {
        alert("Please fill out all fields!")

    }
})