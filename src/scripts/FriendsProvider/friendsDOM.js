//this will be the code that will convert the article into HTML
//written by Jon R.
const makeUserHTML = (userObj) => {
    const domElement = `
    <div class="user__card">
    <p class="hideId">${userObj.id}</p>
	<h2>${userObj.username}</h2>
	<button id="deleteUser--${userObj.id}">Delete Friend</button>
	
	`
    return domElement
}

export default makeUserHTML;