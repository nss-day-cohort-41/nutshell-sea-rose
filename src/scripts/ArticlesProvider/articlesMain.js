import API from "./articlesProvider.js"
import renderArticleEntries from "./articlesList.js"
import newArticleButton from "./articlesClickEvents.js"
import createArticleEntry from "./articlesFactory.js"
import makeArticleHTML from "./articlesDOM.js"

//fetch all of the articles then render them
API.getAllArticles().then((response) => renderArticleEntries(response));



//clear input function for the article objects

/* working on this part still.
const clearInputs = () => {
    document.querySelector(".news__title").value = "";
    document.querySelector(".news__synopsis").value = "";
    document.querySelector(".news__url").value = ""
}
/*
*/ 

//code in progress to allow user to utilize factory function to create new entry
//alert will make sure they have filled out all required fields. 
const recordArticleEntry = document.querySelector(".save__article")
recordArticleEntry.addEventListener("click", event => {
    const title = document.querySelector(".news__title").value
    const synopsis = document.querySelector(".news__synopsis").value
    const url = document.querySelector(".news__url").value

    if (title === "" || synopsis === "" || url === "") {
        alert("Please fill out all fields!")

    }  else {
        //if all fields are filled out will create a new article object
        let newArticle = createArticleEntry(title, synopsis, url)
        console.log(newArticle)
        API.saveArticleEntry(newArticle)//.then(() => {
            API.getAllArticles().then((response) => renderArticleEntries(response));
        //})
    }
})



const deleteArticleEntry = document.querySelector(".postedNews__Selection")
deleteArticleEntry.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteArticle--")) {
        const deleteIt = event.target.id.split("--")[1];
        console.log(event);

       API.deleteArticle(event)
        .then(renderArticleEntries)
    }
})


//create a function that will add or remove hide property on the news form