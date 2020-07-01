//this will be the code that will convert the article into HTML
//written by Jon R.

//this is my work in progress for the articles timestamp
var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();
var time = currentDate.toLocaleTimeString();

//I may need to add a date parameter to the factory function and the database and sort that way..
var monthDateYearTime = (month + 1) + "/" + date + "/" + year + "/" + time;
console.log(monthDateYearTime)


const makeArticleHTML = (articleObj) => {
	const domElement = `
	<div class="article__card">
    <p class="hideId">${articleObj.id}</p>
	<h2>${articleObj.title}</h2>
	<p>${articleObj.synopsis}</p>
	<p>${articleObj.time}</p>
    <p>${monthDateYearTime}</p>
    <p><a href="">${articleObj.url}</a></p>
    <button id="deleteArticle--${articleObj.id}">Delete</button>
	</div>
	`
    return domElement
}

export default makeArticleHTML;