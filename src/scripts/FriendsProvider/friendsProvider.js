  //code written by JR. Functionality is to fetch sample data from json server
  const API = {
      //get articles from json
      getAllUsers: () => {
          return fetch("http://localhost:3000/users")
              .then(response => response.json());
      },
      saveUserEntry: (newUserObject) => {
          return fetch("http://localhost:3000/users", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(newUserObject)
          }).then(response => response.json());
      },
      //delete articles from json
      deleteUser: (id) => {
          return fetch(`http://localhost:3000/users/${id}`, {
              method: "DELETE"
          }).then(response => response.json());
      }
  }
  export default API;