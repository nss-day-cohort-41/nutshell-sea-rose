import API from "./articlesProvider.js"
import makeArticleList from "./articlesList.js"
import newArticleButton from "./articlesClickEvents.js"
import createArticleEntry from "./articlesFactory.js"


API.getAllArticles().then((response) => makeArticleList(response));

const recordArticleEntry = document.querySelector(".save__article")
recordArticleEntry.addEventListener("click", event => {
    const title = document.querySelector(".news__title").value
    const synopsis = document.querySelector(".news__synopsis").value
    const url = document.querySelector(".news__url").value

    if (title === "" || synopsis === "" || url === "") {
        alert("Please fill out all fields!")

    } else {
        //if all fields are filled out will create a new article object
        let newArticle = createArticleEntry(title, synopsis, url)
        console.log(newArticle)
        API.saveArticleEntry(newArticle)//.then(() => {
            API.getAllArticles().then((response) => makeArticleList(response));
        //})
    }
})






/*
const updateFormFields = (articleObj) => {
    const hiddenArticleId = document.querySelector(".articleId");
    const title = document.querySelector(".news__title");
    const synopsis = document.querySelector(".news__synopsis");
    const url = document.querySelector(".news__url");

    hiddenArticleId.value = articleObj.id;
    title.value = articleObj.title
    synopsis.value = articleObj.synopsis
    url.value = articleObj.url
}


const allArticles = () => {
    API.getAllArticles()
    .then((articles) => {
        console.log(articles);
    })
}

makeArticleList();

const clearInputs = () => {
    document.querySelector(".articleId").value = "";
    document.querySelector(".news__title").value = "";
    document.querySelector(".news__synopsis").value = "";
    document.querySelector(".news__url").value = "";
}

saveArticle.addEventListener("click", event => {
    const hiddenArticleId = document.querySelector(".articleId");

    if (hiddenArticleId.value !=="") {
        const title = document.querySelector(".news__title").value;
    const synopsis = document.querySelector(".news__synopsis").value;
    const url = document.querySelector(".news__url").value;

    API.saveArticleEntry(hiddenArticleId.value, createArticleEntry(title, synopsis, url))
    .then(() => {
        clearInputs();
        makeArticleList();
    });
    } else {
        console.log("test2");
    }
});














/*
//fetch all of the articles then render them
API.getAllArticles().then((response) => makeArticleList(response));

//clear input function for the article objects

 working on this part still.
const clearInputs = () => {
    document.querySelector(".news__title").value = "";
    document.querySelector(".news__synopsis").value = "";
    document.querySelector(".news__url").value = ""
}


//code in progress to allow user to utilize factory function to create new entry
//alert will make sure they have filled out all required fields. 

const recordArticleEntry = document.querySelector(".save__article")
recordArticleEntry.addEventListener("click", event => {
    const title = document.querySelector(".news__title").value
    const synopsis = document.querySelector(".news__synopsis").value
    const url = document.querySelector(".news__url").value

    if (title === "" || synopsis === "" || url === "") {
        alert("Please fill out all fields!")

    } else {
        //if all fields are filled out will create a new article object
        let newArticle = createArticleEntry(title, synopsis, url)
        console.log(newArticle)
        API.saveArticleEntry(newArticle)//.then(() => {
            API.getAllArticles().then((response) => makeArticleList(response));
        //})
    }
})

const deleteArticleEntry = document.querySelector("#delete__article")
deleteArticleEntry.addEventListener("click", event => {
    if (event.target.id.startsWith("delete__article")) {
        alert("Delete!")
    }
})

*/