import { add } from "./index";

describe("add() function tests", () => {
  test("should return 0 on empty string", () => {
    const result = add("");
    expect(result).toBe(0);
  });
  test("should return 1 on string 1", () => {
    const result = add("1");
    expect(result).toBe(1);
  });

  test("should return 3 on string 1,2", () => {
    const result = add("1,2");
    expect(result).toBe(3);
  });
});
