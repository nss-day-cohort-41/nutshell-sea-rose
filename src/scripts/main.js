<<<<<<< HEAD
import {sessionStorageLogIn, createNewUser} from "./AuthenticationProvider/authenticationClickEvents.js"
import {postMessage, editMessageEvent} from "./ChatsProvider/chatsClickEvent.js"
import makeMessageList from "./ChatsProvider/chatsList.js"
sessionStorageLogIn();
=======
import {sessionStorageLogIn, createNewUser, makeUser} from "./AuthenticationProvider/authenticationClickEvents.js"
// import API from "./authenticationProvider.js"


import {postMessage, editMessageEvent} from "./ChatsProvider/chatsClickEvent.js"
import makeMessageList from "./ChatsProvider/chatsList.js"
sessionStorageLogIn();
createNewUser()
>>>>>>> 21443830b258b06e12b1b4232bb941f8d466c2c6

createNewUser();

postMessage();

editMessageEvent();

makeMessageList();  
<<<<<<< HEAD

=======
>>>>>>> 21443830b258b06e12b1b4232bb941f8d466c2c6
