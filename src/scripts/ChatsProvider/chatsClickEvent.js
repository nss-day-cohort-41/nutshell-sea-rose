import messageAPI from "./chatsProvider.js"

//Wriiten by Zach McWhirter

//Factory Function for creating a new chat message
const makeNewMessage = (userId, message) => {
    const newMessageTemplate = { 
        userId: userId,
        message: message
    };
    return newMessageTemplate
}

//TO DO:
//getAllUsers (user IDs)
//compare Id of user to Id of message
//when Ids match, post msg to dom

const sendMessageButton = document.querySelector("#sendMessageButton");
let newMessageContent = document.querySelector("#newMessageContent")



// Click event for posting a message in the chat
const postMessage = () => {
    
    sendMessageButton.addEventListener("click", event => {
        //prevents auto refresh
        event.preventDefault();

        newMessageContent = document.querySelector("#newMessageContent").value;
        const user = sessionStorage.getItem("user")
        const userId = sessionStorage.getItem("id");
            console.log(userId);
            console.log(user)
        const newMessage = makeNewMessage(userId, newMessageContent);
       
            console.log(newMessage)
        messageAPI.submitMessage(newMessage)
    })
}

export default postMessage