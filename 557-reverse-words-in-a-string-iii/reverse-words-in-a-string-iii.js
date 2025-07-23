const reverseSingleWord = (val) => {
  let checkVal = val.split(""); 
  let i = 0;
  let j = checkVal.length - 1;
  let temp;
  while (j > i) {
    temp = checkVal[i];
    checkVal[i] = checkVal[j];
    checkVal[j] = temp;
    i++;
    j--;
  }
  return checkVal.join(""); 
}


var reverseWords = function(s) {
    const stringToArray = s.split(" ");
     const arr= []
     for(let i = 0; i < stringToArray.length ; i ++ ){
        arr.push(reverseSingleWord(stringToArray[i]))
     }
     return arr.join(" ")
};
