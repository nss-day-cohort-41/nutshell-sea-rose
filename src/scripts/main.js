import {sessionStorageLogIn, createNewUser, makeUser} from "./AuthenticationProvider/authenticationClickEvents.js"
// import API from "./authenticationProvider.js"


import {postMessage, editMessageEvent} from "./ChatsProvider/chatClickEvents.js"
import makeMessageList from "./ChatsProvider/chatList.js"

// Function Calls


sessionStorageLogIn();

makeUser();

createNewUser();

postMessage();

editMessageEvent();

makeMessageList();  
