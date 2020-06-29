//this will be the code that will convert the article into HTML
//written by Jon R.
const makeEventHTML = (eventObj) => {
    const domElement = `<div class="eventCard">
    <h3>Event:</h3>
    <p class="hideId">${eventObj.id}
	<p>${eventObj.name}</p>
	<p>${eventObj.date}</p>
    <p>${eventObj.location}</p>
    <button id="deleteEvent--${eventObj.id}">Delete</button>
	</div>
	`
    return domElement
}

export default makeEventHTML;