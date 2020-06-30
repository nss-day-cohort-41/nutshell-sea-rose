//this will be the code that will convert the article into HTML
//written by Jon R.
var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();
var time = currentDate.toLocaleTimeString();


var monthDateYearTime = (month+1) + "/" + date + "/" + year + "/" + time;
console.log(monthDateYearTime)


const makeArticleHTML = (articleObj) => {
    const domElement = `
    <p class="hideId">${articleObj.id}</p>
	<h2>${articleObj.title}</h2>
    <p>${articleObj.synopsis}</p>
    <p>${monthDateYearTime}</p>
    <p><a href="facebook.com">${articleObj.url}</a></p>
    <button id="deleteArticle--${articleObj.id}">Delete</button>
	
	`
    return domElement
}

export default makeArticleHTML;
