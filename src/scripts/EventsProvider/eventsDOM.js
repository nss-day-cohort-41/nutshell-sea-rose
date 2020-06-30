//this will be the code that will convert the article into HTML
//written by Jon R.
const makeEventHTML = (eventObj) => {
    const domElement = `
    <p class="hideId">${eventObj.id}</p>
	<h2>${eventObj.name}</h2>
	<p><i>Event Date:</i>${eventObj.date}</p>
    <p><i>Location:<i>${eventObj.location}</p>
    <button id="deleteEvent--${eventObj.id}">Delete</button>
    
	
	`
    return domElement
}

export default makeEventHTML;