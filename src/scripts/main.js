import {sessionStorageLogIn, createNewUser, makeUser} from "./AuthenticationProvider/authenticationClickEvents.js"
// import API from "./authenticationProvider.js"


import {postMessage, editMessageEvent} from "./ChatsProvider/chatsClickEvent.js"
import makeMessageList from "./ChatsProvider/chatsList.js"
sessionStorageLogIn();
createNewUser()

createNewUser();

postMessage();

editMessageEvent();

makeMessageList();  
