import messageAPI from "./chatsProvider.js"
import makeMessageList from "./chatsList.js";
import editMessageFunction from "./chatsEdit.js";

//Written by Zach McWhirter

//Function to clear form field after each click
const clearInputs = () => {
    document.querySelector("#newMessageContent").value = "";

}

//Factory Function for creating a new chat message
const makeNewMessage = (userId, message) => {
    const newMessageTemplate = {
        userId: userId,
        message: message
    };
    return newMessageTemplate
}

const editMessageEvent = () => {
    const editMessageButton = document.querySelector("#newMessageContent")
    // Adding event listener to button (#editButton). Give unique id which includes id property of entry
    editMessageButton.addEventListener("click", event => {
        if (event.target.id.startsWith("editButton--")) {
            const msgToEdit = event.target.id.split("--")[1];
            console.log("clicked edit button", msgToEdit)
            editMessageFunction(msgToEdit)
        }
    })
}



const sendMessageButton = document.querySelector("#sendMessageButton");
let newMessageContent = document.querySelector("#newMessageContent")

// Click event for posting a message in the chat
const postMessage = () => {

    sendMessageButton.addEventListener("click", event => {
        //prevents auto refresh
        event.preventDefault();

        newMessageContent = document.querySelector("#newMessageContent").value;
        const userId = sessionStorage.getItem("id");


        const hiddenMessageId = document.querySelector("#messageId")
        const editMessage = document.querySelector("#newMessageContent")

        if (hiddenMessageId.value !== "") {

            messageAPI.updateMessage(hiddenMessageId.value, makeNewMessage(editMessage.value))
                .then(() => {
                    return messageAPI.getAllMessages()
                }).then((response) => {
                    clearInputs();
                    makeMessageList(response);
                })
        } else {
            if (newMessageContent === "") {
                alert("No message entered")
            } else {
                const newMessage1 = makeNewMessage(userId, newMessageContent);
                messageAPI.submitMessage(newMessage1)
                    .then(() => {
                        clearInputs()
                        return messageAPI.getAllMessages()
                    }).then((msgObject) => {
                        makeMessageList(msgObject)
                    })
            }

        }

    })

}


export { postMessage, editMessageEvent } 