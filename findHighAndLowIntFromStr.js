function findHighAndLowIntFromStr(strOfNumbers){
    strOfNumbers = strOfNumbers.trim()
    strOfNumbers = strOfNumbers.split(' ');
    return `${Math.max(...strOfNumbers)} ${Math.min(...strOfNumbers)}`;
}
console.log(findHighAndLowIntFromStr("1 2 3 4 5 6 7 89"));

//The output will be 1 and 89