//this will be the code that will convert the article into HTML
//written by Jon R.

const makeArticleHTMLRepresentation = {
    taskConverter(articleObj)
    {
        return `
        <h3>Article:</h3>
        <p class="">${articleObj.id}
        <p>${articleObj.title}</p>
        <p>${articleObj.synopsis}</p>
        <p>${articleObj.url}</p>
       
        <button id="deleteArticle--${articleObj.id}">Delete</button>
        `
    }
}

export default makeArticleHTMLRepresentation;



/*
const makeArticleHTML = (articleObj) => {
    const domElement = `
    <h3>Article:</h3>
    <p class="hideId">${articleObj.id}
	<p>${articleObj.title}</p>
	<p>${articleObj.synopsis}</p>
    <p>${articleObj.url}</p>
   
    <button id="deleteArticle--${articleObj.id}">Delete</button>
	
	`
    return domElement
}

export default makeArticleHTML;
*/