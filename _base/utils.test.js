const utils = require('./Utils');

test('Basic LeftPad test', () => {
    expect(utils.LeftPad(2, 2, '0')).toBe('02');
});
