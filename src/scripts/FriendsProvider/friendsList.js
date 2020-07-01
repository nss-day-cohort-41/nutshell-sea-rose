import API from "./friendsProvider.js"
import makeUserHTML from "./friendsDOM.js"

//render the HTML code into the queried field

const friendContainer = document.querySelector(".postedFriends__Selection");
//Getting the data from the json then activating my event listeners such as delete
const makeUserList = () => {
    friendContainer.innerHTML = "";
    API.getAllUsers()
        .then((userArray) => {
            const allUsers = userArray.map(item => {
                const htmlComponent = `<p>${item.title}</p>`
                return htmlComponent;
            });
            userArray.forEach(item => {
                friendContainer.innerHTML += makeUserHTML(item);
            });

        })
}


export default makeUserList;