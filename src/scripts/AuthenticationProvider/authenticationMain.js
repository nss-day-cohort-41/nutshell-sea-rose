import authenticationAPI from "./authenticationProvider.js"


const authenticationSubmitButton = document.querySelector('#authentication-submit-button');
const createAccountSubmitButton = document.querySelector('#create-account-submit-button');
const signOutButton = document.querySelector("#signout-button")

const userExists = (userList, username) => {
    for (let user of userList) {
        if (user.username === username) {
            return true
        }
    }return false
}

// check to see if anything is in storage

const setupAuthenticationButtons = () => {
    let userId = sessionStorage.getItem("activeUser");

    if(!userId) {
        // user IS NOT signed in, so only sign in and create account buttons are visible.
        authenticationSubmitButton.disabled = false;
		createAccountSubmitButton.disabled = false;
		signOutButton.disabled = true;
    } else {
        // user IS signed in, so only sign out button is visible.
        authenticationSubmitButton.disabled = true;
		createAccountSubmitButton.disabled = true;
		signOutButton.disabled = false;
    }
}

setupAuthenticationButtons()

// Events section


//user sign IN event
authenticationSubmitButton.addEventListener('click', e => {
    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password")
    authenticationAPI.signInUser(usernameInput.value, passwordInput.value);
});

//user sign OUT event
signOutButton.addEventListener('click', e => {
	sessionStorage.removeItem('activeUser');
	setupAuthenticationButtons();
});

//create new account event
createAccountSubmitButton.addEventListener('click', e => {
	const username = document.querySelector("#createUsername").value;
    const password = document.querySelector("#createPassword").value;
    const email = document.querySelector("#email").value;

    // get all the users
    authenticationAPI.getAllUsers()
        .then(allUsers => {
                // iterate through and see if a user already exists




            //then create the user
            authenticationAPI.createNewUser(username, email, password)
                .then(createdUser => {
                    // save user to localstorage
                    sessionStorage.setItem("activeUser", createdUser.id);
                })
        })

        //if the user exists, display an error message of some kind, and then exit, clear and back to the form
        authenticationAPI.createdUser(newUsernameInput, emailInput, newUserPasswordInput)
    });