const { stateAge, addUser } = require("./function");

describe("funn.js", () => {
  test("should return i am {age}", () => {
    expect(stateAge(26)).toEqual("I am 26");
  });

  test(`Should return user created status`, () => {
    expect(addUser("Joey", 21)).toEqual("User Created");
  });

  test("Should return user underage status", () => {
    expect(addUser("Chandler", 20)).toEqual("User Underage");
  });
});
