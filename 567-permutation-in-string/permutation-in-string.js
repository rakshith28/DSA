var checkInclusion = function (s1, s2) {
    const k = s1.length, n = s2.length;
    if (k > n) return false;
    let need = new Map();
    let window = new Map();

    for (let i = 0; i < s1.length; i++) {
        const ch = s1[i];
        need.set(ch, (need.get(ch) || 0) + 1)
    }

    for (let i = 0; i < k; i++) {
        const ch = s2[i]
        window.set(ch, (window.get(ch) || 0) + 1);
    }

    if (match(need, window)) {
        return true
    }

    for (let i = k; i < n; i++) {

        let addChar = s2[i];
        window.set(addChar, (window.get(addChar) || 0) + 1);

        let removeChar = s2[i - k];
        window.set(removeChar, window.get(removeChar) - 1);

        if (window.get(removeChar) === 0) {
            window.delete(removeChar); // clean up
        }

        if (match(need, window)) return true;


    }
    return false;

};


const match = (m1, m2) => {
    if (m1.size !== m2.size) return false
    for (let [key, val] of m1) {
        if (m2.get(key) !== val) return false
    }
    return true
}

