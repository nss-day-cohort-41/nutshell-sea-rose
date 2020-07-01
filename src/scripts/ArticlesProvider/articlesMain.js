import API from "./articlesProvider.js"
import makeArticleList from "./articlesList.js"
import createArticleEntry from "./articlesFactory.js"

//render the original list into the browser
API.getAllArticles().then((response) => makeArticleList(response));
//save a new one once all required fields are entered
const recordArticleEntry = document.querySelector(".save__article")
recordArticleEntry.addEventListener("click", event => {
    const title = document.querySelector(".news__title").value
    const synopsis = document.querySelector(".news__synopsis").value
    const url = document.querySelector(".news__url").value
    let timeStamp = new Date();
    const time = timeStamp.toTimeString(); //can use toDateString instead for MM/DD/YY fmt
    //Date.now();  // just Date() gives me a more readable albeit inaccurate timestamp
    
    if (title === "" || synopsis === "" || url === "") {
        alert("Please fill out all fields!")

    } else {
        //if all fields are filled out will create a new article object
        let newArticle = createArticleEntry(title, synopsis, url, time)
        console.log(newArticle)
        API.saveArticleEntry(newArticle)
        //API.getUserId();
        API.getAllArticles().then((response) => makeArticleList(response));
    }
})

//delete functionality. Need to try again to have this called somewhere else
document.querySelector(".postedNews__Selection").addEventListener("click", event => {
    if (event.target.id.startsWith("deleteArticle--")) {
        const articleToDelete = event.target.id.split("--")[1]
        console.log(articleToDelete);
        API.deleteArticle(articleToDelete)
            .then(makeArticleList)
    }
})

//toggle for the form visibility
const articleFormVisibilityButton = document.querySelector("#toggle__articles")

articleFormVisibilityButton.addEventListener("click", (clickEvent) => {
    document.querySelector(".newArticle__form").classList.toggle("hidden")
})