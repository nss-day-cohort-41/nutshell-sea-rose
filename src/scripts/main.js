import {sessionStorageLogIn, createNewUser} from "./AuthenticationProvider/authenticationClickEvents.js"
import postMessage from "./ChatsProvider/chatsClickEvent.js"

sessionStorageLogIn();

createNewUser()
