const insult = require('./Insult');

test('Insult', () => {
    expect(insult.Insult(0)).toBe('you are a long-nosed herring');
});

test('Insult', () => {
    expect(insult.Insult(1*32)).toBe('you are a spotted herring');
});

test('Insult', () => {
    expect(insult.Insult(1*32*32)).toBe('you are a long-nosed albatross');
});
