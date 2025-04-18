const minutesToWords = (minuteNum) => {
    validateMinuteNum(minuteNum);

    const makeMinsAndString = (mins, string) => ({
        mins,
        string,
    });
    const minsAndStrings = [
        makeMinsAndString([58, 59, 0, 1, 2], 'o\'clock'),
        makeMinsAndString([3, 4, 5, 6, 7], 'five past'),
        makeMinsAndString([8, 9, 10, 11, 12], 'ten past'),
        makeMinsAndString([13, 14, 15, 16, 17], 'quarter past'),
        makeMinsAndString([18, 19, 20, 21, 22], 'twenty past'),
        makeMinsAndString([23, 24, 25, 26, 27], 'twenty-five past'),
        makeMinsAndString([28, 29, 30, 31, 32], 'half past'),
        makeMinsAndString([33, 34, 35, 36, 37], 'twenty-five to'),
        makeMinsAndString([38, 39, 40, 41, 42], 'twenty to'),
        makeMinsAndString([43, 44, 45, 46, 47], 'quarter to'),
        makeMinsAndString([48, 49, 50, 51, 52], 'ten to'),
        makeMinsAndString([53, 54, 55, 56, 57], 'five to'),
    ];

    for (const m in minsAndStrings)
    {
        const { mins, string } = minsAndStrings[m];
        if (mins.some(min => min===minuteNum)) return string;
    }
};

const isToTheHour = (minuteNum) => {
    validateMinuteNum(minuteNum);

    return minuteNum > 32;
};

const isOClock = (minuteNum) => {
    validateMinuteNum(minuteNum);

    return minuteNum < 3 || minuteNum > 57;
};

const validateMinuteNum = (minuteNum) => {
    const rangeErrorMsg = ('minuteNum must be a number between 0 and 59.');

    if (minuteNum===undefined) {
        throw new Error('minuteNum must be supplied.')
    }

    if (isNaN(minuteNum)) {
        throw new Error(rangeErrorMsg);
    }

    if (minuteNum < 0) {
        throw new Error(rangeErrorMsg);
    }

    if (minuteNum >= 60) {
        throw new Error(rangeErrorMsg);
    }
};

exports.minutesToWords = minutesToWords;
exports.isToTheHour = isToTheHour;
exports.isOClock = isOClock;