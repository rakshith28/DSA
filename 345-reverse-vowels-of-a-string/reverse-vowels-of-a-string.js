const isVowel = (val) => {
  return "aeiouAEIOU".includes(val);
};

var reverseVowels = function(s) {
  let i = 0;
  let j = s.length - 1;
  let arr = s.split('');

  while (i < j) {
    if (!isVowel(arr[i])) {
      i++;
      continue;
    }
    if (!isVowel(arr[j])) {
      j--;
      continue;
    }

    // Swap the vowels
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }

  return arr.join('');
};


