import API from "./friendsProvider.js"
import makeFriendHTML from "./friendsDOM.js"

//render the HTML code into the queried field

const friendContainer = document.querySelector(".postedFriends__Selection");
//Getting the data from the json then activating my event listeners such as delete
const makeFriendList = () => {
    friendContainer.innerHTML = "";
    API.getAllFriends()
        .then((friendArray) => {
            const allFriends = friendArray.map(item => {
                const htmlComponent = `<p>${item.title}</p>`
                return htmlComponent;
            });
            friendArray.forEach(item => {
                friendContainer.innerHTML += makeFriendHTML(item);
            });

        })
}


export default makeFriendList;