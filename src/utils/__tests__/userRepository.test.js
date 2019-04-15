import {
  getUserRepos,
  getUserLanguages,
  formatLanguages
} from "../userRepository";
const fullResponse = require("../mockData/repositoriesResponse");
const noForkRepositories = require("../mockData/noForkedRepositories");

describe("getUserRepos()", () => {
  it("it should return only the not forked repositories", () => {
    expect(getUserRepos(fullResponse)).toEqual(noForkRepositories);
  });
});

describe("getUserLanguages()", () => {
  it("it should return an array with the language of any user repo (when !fork and language != null)", () => {
    const expectedValue = [
      "Ruby",
      "Ruby",
      "Ruby",
      "HTML",
      "JavaScript",
      "Go",
      "JavaScript",
      "Ruby",
      "HTML"
    ];
    expect(getUserLanguages(fullResponse)).toEqual(expectedValue);
  });
});

describe("formatLanguages()", () => {
  it("it should delete the repeated elements in arr", () => {
    const valueToTest = [
      "Ruby",
      "Ruby",
      "Ruby",
      "HTML",
      "JavaScript",
      "Go",
      "JavaScript",
      "Ruby",
      "HTML"
    ];
    const expectedValue = ["Ruby", "HTML", "JavaScript", "Go"];
    expect(formatLanguages(valueToTest)).toEqual(expectedValue);
  });
});
