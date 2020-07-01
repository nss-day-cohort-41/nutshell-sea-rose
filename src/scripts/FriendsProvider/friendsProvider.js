  //code written by JR. Functionality is to fetch sample data from json server
  const API = {
      //get articles from json
      getAllFriends: () => {
          return fetch("http://localhost:3000/friends")
              .then(response => response.json());
      },
      saveFriendEntry: (newFriendObject) => {
          return fetch("http://localhost:3000/friends", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(newFriendObject)
          }).then(response => response.json());
      },
      //delete articles from json
      deleteFriend: (id) => {
          return fetch(`http://localhost:3000/friends/${id}`, {
              method: "DELETE"
          }).then(response => response.json());
      }
  }
  export default API;