exports.charCount = function(str) {
    letters = {};

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
    let sortedLetters = Object.entries(letters).sort(function(a, b) {
        if (a[primarySort] == b[primarySort]) {
            if(a[secondarySort] > b[secondarySort]) { return -sortDirection}
            if(a[secondarySort] < b[secondarySort]) { return sortDirection}
            if(a[secondarySort] == b[secondarySort]) { return 0}
        }
        if (a[primarySort] > b[primarySort]) { return sortDirection}
        if (a[primarySort] < b[primarySort]) { return -sortDirection}
    });

    return sortedLetters;
};
