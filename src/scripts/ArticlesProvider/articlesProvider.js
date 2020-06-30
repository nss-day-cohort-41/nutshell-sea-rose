//code written by JR. Functionality is to fetch sample data from json server

import renderedArticlesDOM from "./articlesList.js"
import createArticleEntry from "./articlesFactory.js"

const API = {
    //allArticles: [],
    //get articles from json
    getAllArticles () {
        return fetch("http://localhost:3000/articles")
            .then(response => response.json())//.then((articlesArray) => {
                //API.allArticles = articlesArray;
            },//)
    
    //save and send new articles to json
    saveArticleEntry: (newEntryObject) => {
        return fetch("http://localhost:3000/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject) 
        });//.then(() => API.getAllArticles()).then((response) => {
            
           // renderedArticlesDOM.renderArticleEntries(response)
        //})
    },
    //delete articles from json
    deleteArticle (id)  {
        return fetch(`http://localhost:3000/articles/${id}`, {
            method: "DELETE"
        })//.then(() => API.getAllArticles()).then((response) => {
        .then(response => response.json())
            //renderedArticlesDOM.renderArticleEntries(response)
        //})
    }
}

export default API; 