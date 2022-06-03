/**
 * This question is all about writing tests so the roles are reversed! We have provided a function and it is up to you to write the tests.
 * The function comment gives you an idea of what the function expects and what it should return.
 */

/**
 * This function takes an array of primitive values (strings, numbers, etc) and counts the number of times the second element is in the array.
 *
 * P.S. yes, this is pretty much the some function, but it is for testing purposes!
 *
 * DO NOT EDIT THE FUNCTION, YOU ONLY WRITE THE TESTS
 */
const countElements = (arr = [], element, primitive = false) => {
  if (!Array.isArray(arr)) {
    return 0;
  }

  // Primitive equality
  if (primitive) {
    let counter = 0;
    arr.forEach((item) => {
      if (item === element) counter += 1;
    });
    return counter;
  } else {
    // Deep equality
    let itemsCounter = 0;
    const te = Object.values(element);
    for (const ob of arr) {
      let counter = 0;
      const t = Object.values(ob);
      if (t.length !== te.length) continue;
      t.forEach((element, index) => {
        if (element === te[index]) counter += 1;
      });
      if (counter === t.length) itemsCounter += 1;
    }
    return itemsCounter;
  }
};
const arr = [{ d: 1, e: 2, r: 3 }, 2, 3, 4, 5, 3, { d: 1, e: 2, r: 3 }, 7];

// Deep equality test where the tested object's reference wouldn't be impacted the test
const test = countElements(arr, { d: 1, e: 2, r: 3 }, false);

// Primitive equality test where the tested object's reference should be the the same as the array element's reference
const test1 = countElements(arr, arr[0], true);

/**
 * TEST CODE: ONLY EDIT THIS
 * We've provided some syntax for you but feel free to change it to your liking! It should follow jest syntax though!
 *
 * To run the test make sure you have done an `npm install` command in your terminal and then run `npm t` or `npm run test`
 */

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
