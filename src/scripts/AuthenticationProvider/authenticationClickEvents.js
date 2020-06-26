import API from "./authenicationProvilder"

const loginSubmitButton = document.querySelector("#login__button")

export default {
    registerLoginListener () {
        loginSubmitButton.addEventListener("click", event => {
            const userLogin = document.querySelector("#loginUsername")
            const passwordLogin = document.querySelector("#loginPassword")
            API.getSingleUser(loginId)
            .then((loginArray) => {
                // clearInputs()
                console.log(loginId)
                console.log(loginArray)
                console.log("click")
            })
        })  
    }
}