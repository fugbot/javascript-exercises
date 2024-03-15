const palindromes = function (string) {
    const removeExcessString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return removeExcessString.split("").reverse().join("") == removeExcessString;


};

// Do not edit below this line
module.exports = palindromes;
