//REPEATING STRING 
function findTheOccurrencesOfA(s, n) {
    let occurrencesOfA = s.split('').filter(char => char === 'a').length;
    /* .split splits a string to an array of substrings
        .split uses empty string '' as separator 
            each character of s become separate element in array 
            ['a', 'n', 't']

        char => is a callback funtion (takes char and returns char)
        .filter checks characters in array and only keeps those === 'a'

        .length calculates elements in filtered array
     */
    let wholeRepetitions = Math.floor(n / s.length); 
    /*
        gets length of whole repititions 
    */
    let partialStringLength = n % s.length;
    /*
        gets length of partial string, which is the result of n/s (% = remainder) 
    */
    let occurrencesInDesiredString = occurrencesOfA * wholeRepetitions;
    /*
        finds occurences of 'a' in whole repititions of string 
    */
    let occurrencesInPartialString = s.slice(0, partialStringLength).split('').filter(char => char === 'a').length;
    /*
        finds occurences of 'a' in repititions of string 
    */
    return occurrencesInDesiredString + occurrencesInPartialString;
    /*
        returns total occurences of 'a' by adding whole + partial repititions of 'a'  
    */

}


