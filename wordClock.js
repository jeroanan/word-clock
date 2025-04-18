const { hourToWord } = require('./hours');
const { minutesToWords, isToTheHour, isOClock } = require('./minutes');

const wordClock = (arg) => {

    const argValid = (arg instanceof Date);

    if (!argValid) throw new Error('arg must be of type Date.');

    const argHours = arg.getHours();
    const argMinutes = arg.getMinutes();

    const theHour = isToTheHour(argMinutes) ? argHours + 1 : argHours;

    const hourWord = hourToWord(theHour);
    const minutesWords = minutesToWords(argMinutes);

    const isTopOfTheHour = isOClock(argMinutes);
    const isMidnight = (theHour === 0) && isTopOfTheHour;

    return isMidnight ? 
        hourWord : 
        isTopOfTheHour  ?
            `${hourWord} ${minutesWords}` :
            `${minutesWords} ${hourWord}`; 
};

module.exports = wordClock;