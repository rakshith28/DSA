var checkInclusion = function(s1, s2) {
   let k = s1.length;
   let i = 0;
   while (i + k <= s2.length) {
     let subArray = s2.slice(i, i + k);
     let val = checkVal(s1, subArray);
     if (val) {
        return true;
     }
     i++;
   }
   return false;
};

const checkVal = (s1, s2) => {
  const map1 = new Map();
  const map2 = new Map();
  for (let ch of s1) {
    map1.set(ch, (map1.get(ch) || 0) + 1);
  }
  for (let ch of s2) {
    map2.set(ch, (map2.get(ch) || 0) + 1);
  }
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (map2.get(key) !== val) return false;
  }
  return true;
};