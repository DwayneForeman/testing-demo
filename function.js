module.exports = {
  stateAge: (age) => `I am ${age}`,

  addUser: (name, age) => {
    if (age >= 21) {
      //const user = { name, age };
      return "User Created";
    } else {
      return "User Underage";
    }
  },
};
