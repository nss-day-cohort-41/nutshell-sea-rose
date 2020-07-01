  //JR - function that will allow user to create a new article entry with defined parameters
  const createUser = (username) => {
      const newUser = {
          "username": username,

      };

      return newUser;
  };

  export default createUser;