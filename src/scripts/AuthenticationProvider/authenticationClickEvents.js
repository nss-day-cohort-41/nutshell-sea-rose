import API from "./authenticationProvider.js"

// Written by Nick Glover
const userLogin = document.querySelector("#loginUsername")
const passwordLogin = document.querySelector("#loginPassword")
const submitLoginButton = document.querySelector("#loginButton")

// Login event for the webpage
const sessionStorageLogIn = () => {
    submitLoginButton.addEventListener('click', event => {
        API.getAllUsers()
            .then(userArray => {
                // loops over user array with find to find the user target by what the user entered.
                let user = userArray.find((user) => {
                    // Validation for password and username
                    if (passwordLogin.value === user.password && user.email === userLogin.value) {
                        return user.user
                    }
                })
                // Validates if the information is being returned for user
                if (typeof (user) == "undefined") {
                    alert("Username or Password are Wrong")

                } else {
                    //toggle for the page visibility
                    document.querySelector(".underHeader").classList.toggle("hidden")
                    document.querySelector(".loginContainer").classList.toggle("hidden")
                    // We decided to use a key value pairs for our session storage.
                    sessionStorage.id = user.id
                    sessionStorage.user = user.user
                    sessionStorage.email = user.email
                }

            })
    })
}

//Factory Function for creating new user
const makeUser = (user, email, password) => {
    const newUserTemplate = {
        user: user,
        email: email,
        password: password
    };
    return newUserTemplate;

}

// Authors: Nick Glover and Zach Mcwhirter
const createAccountButton = document.querySelector("#create-account-button");

const createNewUser = () => {
    createAccountButton.addEventListener("click", event => {
        // Selection values to be used in the code below
        const createEmail = document.querySelector("#createEmail").value;
        const createUsername = document.querySelector("#createUsername").value;
        const createPassword = document.querySelector("#createPassword").value;
        const reInputPassword = document.querySelector("#reInputPassword").value;

        // Creating object with Factory function
        const newUserLoginInfo = makeUser(createUsername, createEmail, createPassword);

        // If the password does not exist it will alert the user. Other wise 
        API.getAllUsers()
            .then(userArray => {
                const accountCheck = userArray.some(accounts => accounts.email === createEmail)
                console.log(accountCheck)
                if (accountCheck) {
                    alert("Email is Already Taken")
                } else if (createPassword !== reInputPassword) {
                    alert("Passwords Do not match")

                } else {
                    API.createUser(newUserLoginInfo)
                        .then(user => {

                            sessionStorage.clear();
                            sessionStorage.id = user.id
                            sessionStorage.email = user.email
                            sessionStorage.user = user.user
                        })
                }
            })

    })
}

//toggle for the form visibility of registration
const registerationFormButton = document.querySelector("#registerButton")

registerationFormButton.addEventListener("click", (clickEvent) => {
    document.querySelector(".registerForm").classList.toggle("hidden")
    document.querySelector(".loginContainer").classList.toggle("hidden")
})

export { sessionStorageLogIn, createNewUser, makeUser }