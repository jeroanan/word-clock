const { describe, expect, test } = require('@jest/globals');
const { minutesToWords, isToTheHour, isOClock } = require('./minutes');

const testValidation = (description, f) => {
    describe(description, () => {
        const rangeErrorMsg = ('minuteNum must be a number between 0 and 59.');

        test('throws if minuteNum arg is omitted', () => {
            expect(f).toThrow('minuteNum must be supplied.');
        });

        test('throws if minuteNum is not in fact a number', () => {
            expect(() => f('sausage')).toThrow(rangeErrorMsg);
        });

        test('throws if hourNum is not in the range of 0-59', () => {
            expect(() => f(-1)).toThrow(rangeErrorMsg);
            expect(() => f(60)).toThrow(rangeErrorMsg);
            expect(() => f(63)).toThrow(rangeErrorMsg);
        }) 
    });
};

testValidation('minutesToWords: validation', minutesToWords);

const testMinutes = (minutesArr, expectedString) => {
    const minStr = minutesArr.join(',');
    const description = `When minutes are ${minStr} it gives ${expectedString}`;
    describe(description, () => {
        minutesArr.forEach(m => {
            test(`Returns ${expectedString} for ${m}`, () => {
                expect(minutesToWords(m)).toBe(expectedString);
            });
        });
    });
};

testMinutes([58, 59, 0, 1, 2], 'o\'clock');
testMinutes([3, 4, 5, 6, 7], 'five past');
testMinutes([8, 9, 10, 11, 12], 'ten past');
testMinutes([13, 14, 15, 16, 17], 'quarter past');
testMinutes([18, 19, 20, 21, 22], 'twenty past');
testMinutes([23, 24, 25, 26, 27], 'twenty-five past');
testMinutes([28, 29, 30, 31, 32], 'half past')
testMinutes([33, 34, 35, 36, 37], 'twenty-five to');
testMinutes([38, 39, 40, 41, 42], 'twenty to');
testMinutes([43, 44, 45, 46, 47], 'quarter to');
testMinutes([49, 49, 50, 51, 52], 'ten to');
testMinutes([53, 54, 55, 56, 57], 'five to');

describe('All valid values passed into minutesToWords return a non-empty value', () => {
    for (let i=1; i<60; i++) {
        test(`${i} returns a non-empty value`, () => {
            expect(!!minutesToWords(i)).toBe(true)
        });
    }
});

testValidation('isToTheHour: validation', isToTheHour);

describe('When minutesNum is less than 33, isToTheHour returns false', () => {
    for (let i=0; i<33; i++) {
        test(`${i} returns false`, () => {
            expect(isToTheHour(i)).toBe(false);
        });
    }
});

describe('When minutesNum is greater than 32, isToTheHour returns true', () => {
    for (let i=33; i<60; i++) {
        test(`${i} returns true`, () => {
            expect(isToTheHour(i)).toBe(true);
        });
    }  
});

testValidation('isOClock: validation', isOClock);

describe('When minutesNum is less than 3, isOClock returns true', () => {
    for (let i=0; i<3; i++) {
        test(`${i} returns true`, () => {
            expect(isOClock(i)).toBe(true);
        });
    }
});

describe('When minutesNum is greater than 3 and less than 58, isOClock returns false', () => {
    for (let i=3; i<58; i++) {
        test(`${i} returns false`, () => {
            expect(isOClock(i)).toBe(false);
        });
    }
});

describe('When minutesNum is 58 or 59, isOClock returns true', () => {
    for (let i=58; i<=59; i++) {
        test(`${i} returns true`, () => {
            expect(isOClock(i)).toBe(true);
        });
    }
});