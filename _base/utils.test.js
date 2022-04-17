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

test('Roman 0', () => {
    expect(utils.ToRoman(0)).toBe('');
});

test('Roman 43', () => {
    expect(utils.ToRoman(43)).toBe('XLIII');
});

test('Roman 5', () => {
    expect(utils.ToRoman(5)).toBe('V');
});

test('Roman 8', () => {
    expect(utils.ToRoman(8)).toBe('VIII');
});

test('Roman 59', () => {
    expect(utils.ToRoman(59)).toBe('LIX');
});

test('RightPad pads', () => {
    expect(utils.RightPad(2, 0, ' ')).toBe('0 ');
})

test('RightPad does not truncate', () => {
    expect(utils.RightPad(2, 200, ' ')).toBe('200');
});


   




   
