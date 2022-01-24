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