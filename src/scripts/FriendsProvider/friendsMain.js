  import makeFriendList from "./friendsList.js"
  import API from "./friendsProvider.js"
  import createFriend from "./friendsFactory.js"

  const friendFormVisibility = document.querySelector("#toggle__friends")

  friendFormVisibility.addEventListener("click", (clickEvent) => {
      document.querySelector(".newFriend__form").classList.toggle("hidden")
  })

  API.getAllFriends().then((response) => makeFriendList(response));

  //save a new one once all required fields are entered
  const recordFriendEntry = document.querySelector(".save__friend")
  recordFriendEntry.addEventListener("click", event => {
      event.preventDefault(); //dont refresh page automatically
      const username = document.querySelector(".friend__name").value


      if (username === "") {
          alert("Please fill out all fields!")

      } else {
          //if all fields are filled out will create a new article object
          let newFriend = createFriend(username)
          console.log(newFriend)
          API.saveFriendEntry(newFriend)
          API.getAllFriends().then((response) => makeFriendList(response));
      }
  })

  document.querySelector(".postedFriends__Selection").addEventListener("click", event => {
      if (event.target.id.startsWith("deleteUser--")) {
          const friendToDelete = event.target.id.split("--")[1]
          console.log(friendToDelete);
          API.deleteFriend(friendToDelete)
              .then(makeFriendList)
      }
  })