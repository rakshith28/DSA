/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let i = 0, j = 0;

    while (i < s.length && j < g.length) {
        if (g[j] <= s[i]) j++;
        i++;
    }

    return j;
};