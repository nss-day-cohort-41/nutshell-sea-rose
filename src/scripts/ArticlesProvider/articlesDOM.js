//this will be the code that will convert the article into HTML
//written by Jon R.
const makeArticleHTML = (articleObj) => {
    const domElement = `<div class="articleCard">
    <h3>Article:</h3>
    <p class="hideId">${articleObj.id}
	<p>${articleObj.title}</p>
	<p>${articleObj.synopsis}</p>
    <p>${articleObj.url}</p>
    <button id="deleteArticle--${articleObj.id}">Delete</button>
	</div>
	`
    return domElement
}

export default makeArticleHTML;