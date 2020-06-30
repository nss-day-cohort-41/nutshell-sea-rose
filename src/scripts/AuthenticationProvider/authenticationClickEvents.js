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
                        console.log(user.user)
                        return user.user
                    }
                })
                if (typeof (user) == "undefined") {
                    alert("Broken Baby!")

                } else {

                    // We decided to use a key value pairs for our session storage.
                    sessionStorage.id = user.id
                    sessionStorage.user = user.user
                    sessionStorage.email = user.email
                    console.log(sessionStorage)
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

const createAccountButton = document.querySelector("#create-account-button");

const createNewUser = () => {
    createAccountButton.addEventListener("click", event => {

        const createUsername = document.querySelector("#createUsername").value;
        const createEmail = document.querySelector("#createEmail").value;
        const createPassword = document.querySelector("#createPassword").value;
        const reInputPassword = document.querySelector("#reInputPassword").value;
        const newUserLoginInfo = makeUser(createUsername, createEmail, createPassword);

        if (createPassword !== reInputPassword) {
            alert("Passwords Do not match")
    
        } else {
            API.createUser(newUserLoginInfo)
                .then(user => {
                    sessionStorage.clear();
                    sessionStorage.id = user.id
                    sessionStorage.email = user.email
                    sessionStorage.user = user.user
                    console.log(localStorage.id)
                })
        }


    })
}

export { sessionStorageLogIn, createNewUser, makeUser }