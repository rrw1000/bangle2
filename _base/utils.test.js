const utils = require('./Utils');

test('Basic LeftPad test', () => {
    expect(utils.LeftPad(2, 2, '0')).toBe('02');
});

test('LeftPad does not pad when not necessary', () => {
    expect(utils.LeftPad(2, 20, '0')).toBe('20');
});

test('LeftPad does not truncate', () => {
    expect(utils.LeftPad(2, 200, '0')).toBe('200');
});


test('RightPad pads', () => {
    expect(utils.RightPad(2, 0, ' ')).toBe('0 ');
})

test('RightPad does not truncate', () => {
    expect(utils.RightPad(2, 200, ' ')).toBe('200');
});

test('SplitLines basically works (0)',() => {
    expect(utils.SplitLines('hello world', 20)).toEqual(['hello world']);
});

test('SplitLines basically works (1)',() => {
    expect(utils.SplitLines('01234567890123456789 foo', 20)).
        toEqual(['01234567890123456789', 'foo']);
});

test('SplitLines basically works (1)',() => {
    expect(utils.SplitLines('01234567890123456789 foo', 20)).
        toEqual(['01234567890123456789', 'foo']);
});

test('SplitLines basically works (2)',() => {
    expect(utils.SplitLines('the whirligig', 6)).
           toEqual(['the', 'whirligig']);
});


    
