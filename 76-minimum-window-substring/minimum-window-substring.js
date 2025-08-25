/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length === 0 || t.length === 0) return "";
    let store = new Map();
    for (let i = 0; i < t.length; i++) {
        store.set(t[i], (store.get(t[i]) || 0) + 1);
    }
    let l = 0, r = 0;
    let count = t.length;  
    let minLen = Infinity;
    let SIndex = -1;
    while (r < s.length) {
        let charR = s[r];
        if (store.has(charR)) {
            store.set(charR, store.get(charR) - 1);
            if (store.get(charR) >= 0) {
                count--; 
            }
        }
        while (count === 0) { 
            if (r - l + 1 < minLen) {
                minLen = r - l + 1;
                SIndex = l;
            }

            let charL = s[l];
            if (store.has(charL)) {
                store.set(charL, store.get(charL) + 1);
                if (store.get(charL) > 0) {
                    count++; 
                }
            }
            l++;
        }
        r++;
    }

    return SIndex === -1 ? "" : s.substring(SIndex, SIndex + minLen);
};



