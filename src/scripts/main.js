import {sessionStorageLogIn, createNewUser} from "./AuthenticationProvider/authenticationClickEvents.js"
import postMessage from "./ChatsProvider/chatsClickEvent.js"
import makeMessageList from "./ChatsProvider/chatsList.js"
sessionStorageLogIn();

createNewUser()

makeMessageList()
