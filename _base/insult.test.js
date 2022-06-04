const insult = require('./Insult');

test('Insult', () => {
    expect(insult.Insult(0)).toEqual(['you long-nosed','herring']);
});

test('Insult', () => {
    expect(insult.Insult(1*32)).toEqual(['you spotted','herring']);
});

test('Insult', () => {
    expect(insult.Insult(1*32*32)).toEqual(['you long-nosed','albatross']);
});
