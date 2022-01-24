const { flatten } = require('./index');

test("Returns invalid input if type passed is not array", () => {
    expect(flatten({ array: [1,2,4,4]})).toBe('input should be of type array');
});