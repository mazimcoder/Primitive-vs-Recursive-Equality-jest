

const countElementsTest = require('./app');


const arr = [{ d: 1, e: 2, r: 3 }, 2, 3, 4, 5, 3, { d: 1, e: 2, r: 3 }, 7];

// Deep equality test where the tested object's reference wouldn't be impacted the test
const test = countElementsTest(arr, { d: 1, e: 2, r: 3 }, false);   

// Primitive equality test where the tested object's reference should be the the same as the array element's reference
const test1 = countElementsTest(arr, arr[0], true);

describe("countElements", () => {
    it("Deep Equality Test", () => {
      expect(test).toBe(2);
    });
    it("Primitive Equality Test", () => {
      expect(test1).toBe(1);
    });
    it("Recursive Equality by jest", () => {
      expect(arr[0]).toEqual({ d: 1, e: 2, r: 3 });
    });
  });