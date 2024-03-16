const fibonacci = function(pos) {
    if(typeof pos == "string"){
        pos = Number(pos);
    }
    if(pos<0){
        return "OOPS";
    }
    if(pos === 0){
        return 0;
    }

    let array = [];
    let num = 1;
    for (let i = 1; i <= pos; i++){
        if(array.length < 2){
            array.push(1);
            continue;
        }
        num = array[array.length-2] + array[array.length-1];
        array.push(num);
        
    } 
    
    console.log(array);
    return array[array.length-1];
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
