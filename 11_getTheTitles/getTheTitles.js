

const getTheTitles = function(arr) {
    // let titleArray = [];
    // arr.filter(function(obj) { 
        
    //     console.log(obj.title) 
    //     titleArray.push(obj.title);
        
    // });
    // return titleArray;

    return arr.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
