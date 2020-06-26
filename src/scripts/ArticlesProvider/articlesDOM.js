//this will be the code that will convert the article into HTML
//written by Jon R.
const makeArticleHTML = ( articleObj ) => {
	const domElement = `<div class="">
	<h3>Article:</h3>
	<p>${articleObj.title}</p>
	<p>${articleObj.synopsis}</p>
    <p>${articleObj.url}</p>
    <button id="delete__article">Delete</button>
	</div>
	`
	return domElement
}

export default makeArticleHTML;