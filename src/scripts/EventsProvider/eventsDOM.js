//this will be the code that will convert the article into HTML
//written by Jon R.
const makeEventHTML = (eventObj) => {
    const domElement = `
    <h3>Event:</h3>
    <p class="hideId">${eventObj.id}</p>
	<p>${eventObj.name}</p>
	<p>${eventObj.date}</p>
    <p>${eventObj.location}</p>
    <button id="deleteEvent--${eventObj.id}">Delete</button>
	
	`
    return domElement
}

export default makeEventHTML;