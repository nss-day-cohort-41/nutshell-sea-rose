  import makeUserList from "./friendsList.js"
  import API from "./friendsProvider.js"
  import createUser from "./friendsFactory.js"

  const friendFormVisibility = document.querySelector("#toggle__friends")

  friendFormVisibility.addEventListener("click", (clickEvent) => {
      document.querySelector(".newFriend__form").classList.toggle("hidden")
  })

  API.getAllUsers().then((response) => makeUserList(response));

  //save a new one once all required fields are entered
  const recordUserEntry = document.querySelector(".save__friend")
  recordUserEntry.addEventListener("click", event => {
      event.preventDefault(); //dont refresh page automatically
      const username = document.querySelector(".friend__name").value


      if (username === "") {
          alert("Please fill out all fields!")

      } else {
          //if all fields are filled out will create a new article object
          let newFriend = createUser(username)
          console.log(newFriend)
          API.saveUserEntry(newFriend)
          API.getAllUsers().then((response) => makeUserList(response));
      }
  })

  document.querySelector(".postedFriends__Selection").addEventListener("click", event => {
      if (event.target.id.startsWith("deleteUser--")) {
          const userToDelete = event.target.id.split("--")[1]
          console.log(userToDelete);
          API.deleteUser(userToDelete)
              .then(makeUserList)
      }
  })