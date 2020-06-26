import makeArticleHTML from "./articlesDOM.js"


const renderArticleEntries = (articleEntries) => {
    for (const entry of articleEntries) {
        const articleHTML = makeArticleHTML(entry)
        const articleElement = document.querySelector(".postedNews__Selection");
        articleElement.innerHTML += articleHTML
    }
}

export default renderArticleEntries;