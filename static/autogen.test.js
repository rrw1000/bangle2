const autogen = require('./autogen')

test('Roman 0', () => {
    expect(autogen.ToRoman(0)).toBe('');
});

test('Roman 43', () => {
    expect(autogen.ToRoman(43)).toBe('XLIII');
});

test('Roman 5', () => {
    expect(autogen.ToRoman(5)).toBe('V');
});

test('Roman 8', () => {
    expect(autogen.ToRoman(8)).toBe('VIII');
});

test('Roman 59', () => {
    expect(autogen.ToRoman(59)).toBe('LIX');
});
