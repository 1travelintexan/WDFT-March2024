//describe should be at the top level and has two parameters, a string and a callback function
describe("Capitalize first letter of a word", () => {
  //the it should be inside the describe and it has two parameters as well, a string and a callback
  //you can have many 'it's inside the describe, this is to organize what you are testing
  it("Should be defined", () => {
    expect(capitalizeFirstLetter).toBeDefined();
  });
  it("Should take a string and return the same string but with the first letter capitalized", function () {
    //inside the 'it' method, this is where we write our expectations
    expect(capitalizeFirstLetter("ragnar")).toBe("Ragnar");
    expect(capitalizeFirstLetter("portugal")).toBe("Portugal");
    expect(capitalizeFirstLetter("France")).toBe("France");
  });

  it("Should return undefined if given any other than a string as an argument", () => {
    expect(capitalizeFirstLetter(8)).toBeUndefined();
    expect(capitalizeFirstLetter(-10)).toBeUndefined();
    expect(capitalizeFirstLetter("88")).toBeUndefined();
    expect(capitalizeFirstLetter()).toBeUndefined();
  });
});
