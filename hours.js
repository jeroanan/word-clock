const hourToWord = (hourNum) => {
    validateHourNum(hourNum);

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

    return numberMap[hourNum];
};

const validateHourNum = (hourNum) => {
   const rangeErrorMsg = 'hourNum must be a number between 0 and 24.';
   if (hourNum===undefined) {
    throw new Error('hourNum must be supplied.');
   }
   if (isNaN(hourNum)) {
    throw new Error(rangeErrorMsg);
   }
   if (hourNum < 0 || hourNum > 24) {
    throw new Error(rangeErrorMsg);
   }
};

exports.hourToWord = hourToWord;