exports.charCount = function(str) {
    // establishes object to contain each letter and count
    letters = {};

    // using for loop to iterate through string; if character is whitespace, it is skipped.
    // if string character is in letters object, the character count is incremented by 1; if not, character is added to letters object and value is set to 1
    for (let i = 0; i < str.length; i++){
        if (str[i] != " ") {
            if(letters.hasOwnProperty(str[i])){
                letters[str[i]] += 1;
            } else {
             letters[str[i]] = 1;
            }
        }
    }
    // made switch from sort arrow function to explicit sort function
    // sort by count in descending order; same count, by alphabtical order
    let sortDirection = -1;
    let primarySort = [1];
    let secondarySort = [0];
    // Object.entries returns an array of keys and values.
    let sortedLetters = Object.entries(letters).sort(function(a, b) {
        if (a[primarySort] == b[primarySort]) {
            if(a[secondarySort] > b[secondarySort]) { return -sortDirection}
            if(a[secondarySort] < b[secondarySort]) { return sortDirection}
            if(a[secondarySort] == b[secondarySort]) { return 0}
        }
        if (a[primarySort] > b[primarySort]) { return sortDirection}
        if (a[primarySort] < b[primarySort]) { return -sortDirection}
    });

    // return sortedLetters array
    return sortedLetters;
};
