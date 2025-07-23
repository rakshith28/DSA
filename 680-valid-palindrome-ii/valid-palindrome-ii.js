/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) {
           return (isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1))
        } 
        i++
        j--
    }
     return true  
};

const isPalindrome = (s, left, right) => {
   while(left < right){
       if(s[left]!==s[right]){
        return false
       }
       left++
       right -- 
    }
        return true
}