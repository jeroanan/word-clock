const { describe, expect, test } = require('@jest/globals');
const { hourToWord } = require('./hours');

describe('Error cases', () => {

    const rangeErrorMsg = ('hourNum must be a number between 0 and 24.');

    test('throws if hourNum arg is omitted', () => {
        expect(hourToWord).toThrow('hourNum must be supplied.');
    });

    test('throws if hourNum is not in fact a number', () => {
        expect(() => hourToWord('sausage')).toThrow(rangeErrorMsg);
    });

    test('throws if hourNum is not in the range of 0-24', () => {
        expect(() => hourToWord(-1)).toThrow(rangeErrorMsg);
        expect(() => hourToWord(25)).toThrow(rangeErrorMsg);
    }) 
});

describe('Numbers', () => {

    let hours = [
        'one', 
        'two', 
        'three', 
        'four', 
        'five', 
        'six', 
        'seven', 
        'eight', 
        'nine', 
        'ten', 
        'eleven', 
    ];

    hours = ['midnight', ...hours, 'twelve', ...hours, 'midnight'];

    for (let i=0; i<25; i++)
    {
        test(`${i} gives ${hours[i]}`, () => {
            expect(hourToWord(i)).toBe(hours[i]);
        });
    }
});
