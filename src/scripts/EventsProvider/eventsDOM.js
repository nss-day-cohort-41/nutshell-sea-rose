//this will be the code that will convert the article into HTML
//written by Jon R.
const makeEventHTML = (eventObj) => {
    const domElement = `
    <div class="event__card">
    <p class="hideId">${eventObj.id}</p>
	<h2>${eventObj.name}</h2>
	<p><i>Event Date:</i>${eventObj.date}</p>
    <p><i>Location:</i>${eventObj.location}</p>
    <p>Whose Event? ${eventObj.user}</p>
    <button id="deleteEvent--${eventObj.id}">Delete</button>
    </div>
	
	`
    return domElement
}

export default makeEventHTML;