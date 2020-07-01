//this will be the code that will convert the article into HTML
//written by Jon R.


const makeArticleHTML = (articleObj) => {
    const domElement = `
    <p class="hideId">${articleObj.id}</p>
	<h2>${articleObj.title}</h2>
	<p>${articleObj.synopsis}</p>
    <p><a href="facebook.com">${articleObj.url}</a></p>
    <button id="deleteArticle--${articleObj.id}">Delete</button>
	
	`
    return domElement
}

export default makeArticleHTML;
