import { isEmptyObj } from "../helpers";

describe("isEmptyObj()", () => {
  it("it should return true when obj is  empty", () => {
    const emptyObj = {};
    expect(isEmptyObj(emptyObj)).toBe(true);
  });

  it("it should return false when obj is not empty", () => {
    const notEmptyObj = { key: "value" };
    expect(isEmptyObj(notEmptyObj)).toBe(false);
  });
});
