const flatten = require('./index');

test("Returns invalid input if type passed is an obect", () => {
    expect(flatten({ array: [1,2,4,4]})).toBe('input should be of type array');
});

test("Returns invalid input if type passed is a string", () => {
    expect(flatten('1,2,3,4,5')).toBe('input should be of type array');
});

test("Returns flattened array", () => {
    expect(flatten([1, [2, [3], 4, [5, 6, [7]]]])).toEqual([1,2,3,4,5,6,7]);
});

test("Returns flattened array for an array with one element", () => {
    expect(flatten([1])).toEqual([1]);
});

test("Returns empty array for when input is an empty array", () => {
    expect(flatten([])).toEqual([]);
});

test("Returns flattened array for an array that contains negative element", () => {
    expect(flatten([-1, 2, [[3], 4, [5, 6, [7]]]])).toEqual([-1, 2, 3, 4, 5, 6, 7]);
});

test("Returns flattened array for an array that contains mixture of strings and numbers", () => {
    expect(flatten(['a', 'b', ['c', [ 1, 3, 4]]])).toEqual(['a', 'b', 'c', 1, 3, 4]);
});