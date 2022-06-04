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



module.exports = countElements;
