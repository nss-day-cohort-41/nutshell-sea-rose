import API from "./articlesProvider.js"
import makeArticleHTML from "./articlesDOM.js"
import registerListeners from "./articlesClickEvents.js"
//render the HTML code into the queried field

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