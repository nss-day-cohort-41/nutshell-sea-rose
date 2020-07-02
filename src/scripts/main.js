import {sessionStorageLogIn, createNewUser} from "./AuthenticationProvider/authenticationClickEvents.js"
import {postMessage, editMessageEvent} from "./ChatsProvider/chatsClickEvent.js"
import makeMessageList from "./ChatsProvider/chatsList.js"
sessionStorageLogIn();

createNewUser();

postMessage();

editMessageEvent();

makeMessageList();  

