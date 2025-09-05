/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    let left = 1, right = 1e7;
    let ans = -1;

    const canArrive = (speed) => {
        let time = 0;
        for (let i = 0; i < dist.length; i++) {
            let t = dist[i] / speed;
            if (i !== dist.length - 1) {
                time += Math.ceil(t);
            } else {
                time += t;
            }
            if (time > hour) return false; // prune early
        }
        return time <= hour;
    };

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (canArrive(mid)) {
            ans = mid;
            right = mid - 1; // try smaller
        } else {
            left = mid + 1; // need more speed
        }
    }

    return ans;
};
