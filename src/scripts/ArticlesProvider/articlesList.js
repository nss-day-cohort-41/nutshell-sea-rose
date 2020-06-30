import API from "./articlesProvider.js"
import makeArticleHTMLRepresentation from "./articlesDOM.js"


const renderArticleEntries = {
    makeDOM() {
        API.getAllArticles().then(renderArticleEntries.articleConverter)
    },

    articleConverter(articleObjs) {
        const makeArticleHTML = document.querySelector(".postedNews__Selection")
        makeArticleHTML.innerHTML= ""
        for (let articleObj of articleObjs) {
            const articleHTML = makeArticleHTMLRepresentation.taskConverter(articleObj)
            makeArticleHTML.innerHTML += articleHTML
        }
    }}
    export default renderArticleEntries;


    //makeArticleObject() {
      //  let article = {
        //    "title": document.querySelector(".news__title").value,
          //  "synopsis": document.querySelector(".news__synopsis").value,
            //"url": document.querySelector(".news__url").value
        //}
        //return article
    //},
/*
    enableSaveButton() {
        document.querySelector(".save__article").addEventListener("click", event => {
        const title = document.querySelector(".news__title").value;
        const synopsis = document.querySelector(".news__synopsis").value;
        const   url = document.querySelector(".news__url").value;

    if (title === "" || synopsis === "" || url === "") {
        alert("Please fill out all fields!")

    } else {
        //if all fields are filled out will create a new article object
        //let newArticle = createArticleEntry(title, synopsis, url)
        //console.log(newArticle)
        API.saveArticleEntry(newArticle).then(() => {
        renderArticleEntries.makeDOM() 
        })
        }
    })}}
    */







/*
let renderedArticlesDOM = {
    renderArticleEntries (articleObj) {
        let makeArticleHTML = document.querySelector(".postedNews__Selection")
        makeArticleHTML.innerHTML= ""

        for(articleObj of API.allArticles){
            const articleHTML = makeArticleHTMLRepresentation.articleConverter(articleObj);

            const articleElement = document.querySelector(".postedNews__Selection");

            articleElement.innerHTML += articleHTML;
        }
    }
}

export default renderedArticlesDOM;


//render the HTML code into the queried field
/*
const articleContainer = document.querySelector(".postedNews__Selection");
//Getting the data from the json then activating my event listeners such as delete
const makeArticleList = () => {
    articleContainer.innerHTML = "";
    API.getAllArticles()
        .then((articleArray) => {
            const allArticles = articleArray.map(item => {
                const htmlComponent = `<p>${item.title}</p>`
                return htmlComponent;
            });
            articleArray.forEach(item => {
                articleContainer.innerHTML += makeArticleHTML(item);
            });
            registerListeners.registerListeners();
        })
}




//const renderArticleEntries = (articleEntries) => {
//  for (const entry of articleEntries) {
//    const articleHTML = makeArticleHTML(entry)
//  const articleElement = document.querySelector(".postedNews__Selection");
//articleElement.innerHTML += articleHTML
//}
//}

export default makeArticleList;
*/