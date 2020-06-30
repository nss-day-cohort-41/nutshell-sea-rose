//this will be the code that will convert the article into HTML
//written by Jon R.
const makeUserHTML = (userObj) => {
    const domElement = `
    <div class="user__card">
    <p class="hideId">${userObj.id}</p>
    <h2>${userObj.username}</h2>
    <img src="https://visualpharm.com/assets/448/User-595b40b85ba036ed117dbd22.svg" alt="">
	<button id="deleteUser--${userObj.id}">Delete Friend</button>
	
	`
    return domElement
}

export default makeUserHTML;