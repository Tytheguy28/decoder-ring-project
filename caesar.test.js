// Write your tests here!
// Using the required method import the chai API
const { expect } = require("chai");
// define the callback function here
const { caesar } = require("../src/caesar.js") 

// use the describe method on the callback function
describe("returns false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
    // it method that will define if the shift value is equal to 0 return false
    it("should return false if shift is equal to 0", () => {
        // use shift in the actual variable to determine whether or not the
        const shift = 0; 
        const input = "Escape Room";
        // write an actual variable using the function passing in an example argument
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
});
    
    it("should return false if shift is less than -25", () => {
    const shift = -26;
    const input = "Escape Room";
    const actual = caesar(input, shift)
    expect (actual).to.be.false;
});

    it("should return false if shift is greater than 25", () => {
    const shift = 26;
    const input = "Escape Room";
    const actual = caesar(input, shift)
    expect (actual).to.be.false;
});
});
describe("Setting encoding rules", () => {
    it("spaces are maintained even if they're non-alphabetic symbols",() => {
    const shift = 3
    const input = "Escape room !!!"
    const actual = caesar(input, shift)
    const expected = "hvfdsh urrp !!!"
    expect(actual).to.equal(expected);
    });
    it("should return the message while ignoring capital letters", () => {
    const shift = -3;
    const input = "at thinkful";
    const actual = caesar(input, shift);
    const expected = "xq qefkhcri";
    expect(actual).to.equal(expected); 
});
    it("when reaching the end of the alphabet", () => {
    const shift = 3;
    const input = "x";
    const actual = caesar(input, shift);
    const expected = "a";
    });
});
