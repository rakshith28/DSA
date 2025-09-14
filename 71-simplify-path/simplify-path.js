/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    let parts = path.split("/");

    for (let i = 0; i < parts.length; i++) {
        let p = parts[i];
        if (p === "" || p === ".") {
            continue;
        } else if (p === "..") {
            if (stack.length > 0) stack.pop();
        } else {
            stack.push(p);
        }
    }

    return "/" + stack.join("/");
};