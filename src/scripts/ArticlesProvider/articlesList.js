import API from "./articlesProvider.js"
import makeArticleHTML from "./articlesDOM.js"



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

        })
}


export default makeArticleList;
