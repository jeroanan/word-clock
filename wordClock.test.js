const { describe, expect, test } = require('@jest/globals');
const wordClock = require('./wordClock');

describe('it can call the function without immediately blowing up', () => {
    test('Call the function', () => {
        wordClock();
    });
});
