/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    flipArray = []
   for(let i = 0; i < image.length ; i++){
   flipArray.push(reverseImage(image[i])) 
   }
   return flipArray
};


const reverseImage = (arr) => {
  let flipArray = []
  for(let j = arr.length-1 ; j >= 0 ; j--){
      flipArray.push(arr[j] ^ 1)
  }
  return flipArray
}



