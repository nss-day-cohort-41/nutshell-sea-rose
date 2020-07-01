//this will be the code that will convert the article into HTML
//written by Jon R.

/* I like this code but it doesn't do what I need it to do :/
var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();
var time = currentDate.toLocaleTimeString();

I may need to add a date parameter to the factory function and the database and sort that way..
var monthDateYearTime = (month + 1) + "/" + date + "/" + year + "/" + time;
console.log(monthDateYearTime)
*/

const makeArticleHTML = (articleObj) => {
	const domElement = `
	<div class="article__card">
    <p class="hideId">${articleObj.id}</p>
	<h2>${articleObj.title}</h2>
	<p>${articleObj.synopsis}</p>
	<p>${articleObj.time}</p>
	<p>Posted by: ${articleObj.user}</p>
    <p><a href="https://images2.minutemediacdn.com/image/upload/c_crop,h_2462,w_3665,x_0,y_130/v1554742286/shape/mentalfloss/539787-istock-157606759.jpg?itok=IE74EkSM">${articleObj.url}</a></p>
    <button id="deleteArticle--${articleObj.id}">Delete</button>
	</div>
	`
	return domElement
}

export default makeArticleHTML;