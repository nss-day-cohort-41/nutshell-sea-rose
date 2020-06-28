//this will be the code that will convert the article into HTML
//written by Jon R.
const makeArticleHTML = ( articleObj ) => {
	const domElement = `<div class="">
	<h3>Article:</h3>
	<p>${articleObj.id}
	<p>${articleObj.title}</p>
	<p>${articleObj.synopsis}</p>
	<p>${articleObj.url}</p>
	</div>
	<button class="anything" id="deleteArticle--${articleObj.id}">
	Delete Article
	</button>
	`
	return domElement
}

export default makeArticleHTML;