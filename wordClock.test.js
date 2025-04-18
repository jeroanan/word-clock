const { describe, expect, test } = require('@jest/globals');
const wordClock = require('./wordClock');

describe('validation', () => {

    test('Will error if arg is not a date', () => {
        expect(() => wordClock('sausage')).toThrow('arg must be of type Date.');
    });
});

const testTime = (hours, minutes, expectedResult) => {
    test(`${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)} returns ${expectedResult}`, () => {
        const testDate = new Date();
        testDate.setHours(hours);
        testDate.setMinutes(minutes);

        expect(wordClock(testDate)).toBe(expectedResult);
    });
};

describe('test times', () => {
    
    const numberMap = {
        0: 'midnight',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'one',
        14: 'two',
        15: 'three',
        16: 'four',
        17: 'five',
        18: 'six',
        19: 'seven',
        20: 'eight',
        21: 'nine',
        22: 'ten',
        23: 'eleven',
        24: 'midnight'
    };

    const doOne = (h, ml, mh, expected) => {
        for (let m=ml; m<=mh; m++) {
            testTime(h, m, expected);
        }
    };

    for (let h=1; h<=23; h++) {

        const hourName = numberMap[h];
        const nextHourName = numberMap[h+1];

        doOne(h, 0, 2, `${hourName} o'clock`);
        doOne(h, 3, 7, `five past ${hourName}`);
        doOne(h, 8, 12, `ten past ${hourName}`);
        doOne(h, 13, 17, `quarter past ${hourName}`);
        doOne(h, 18, 22, `twenty past ${hourName}`);
        doOne(h, 23, 27, `twenty-five past ${hourName}`);
        doOne(h, 28, 32, `half past ${hourName}`);
        doOne(h, 33, 37, `twenty-five to ${nextHourName}`);
        doOne(h, 38, 42, `twenty to ${nextHourName}`); 
        doOne(h, 43, 47, `quarter to ${nextHourName}`);
        doOne(h, 48, 52, `ten to ${nextHourName}`);
        doOne(h, 53, 57, `five to ${nextHourName}`);
        doOne(h, 58, 59, `${nextHourName} o'clock`);
    }

    {
        const h = 0;
        const hourName = numberMap[h];
        const nextHourName = numberMap[h+1];

        doOne(h, 0, 2, `${hourName}`);
        doOne(h, 3, 7, `five past ${hourName}`);
        doOne(h, 8, 12, `ten past ${hourName}`);
        doOne(h, 13, 17, `quarter past ${hourName}`);
        doOne(h, 18, 22, `twenty past ${hourName}`);
        doOne(h, 23, 27, `twenty-five past ${hourName}`);
        doOne(h, 28, 32, `half past ${hourName}`);
        doOne(h, 33, 37, `twenty-five to ${nextHourName}`);
        doOne(h, 38, 42, `twenty to ${nextHourName}`); 
        doOne(h, 43, 47, `quarter to ${nextHourName}`);
        doOne(h, 48, 52, `ten to ${nextHourName}`);
        doOne(h, 53, 57, `five to ${nextHourName}`);
        doOne(h, 58, 59, `${nextHourName} o'clock`);
    }

    doOne(24, 0, 0, 'midnight');

});