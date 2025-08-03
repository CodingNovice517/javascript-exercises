const sumAll = function(int1, int2) {
    if (int1 < 0 || int2 < 0) return "ERROR";
    if (!Number.isInteger(int1 + int2)) return "ERROR";
    if ((typeof int1 != 'number' || typeof int2 != 'number')) return "ERROR";

    let result = 0;
    const start = Math.min(int1, int2);
    const end = Math.max(int1, int2);
    for (let i = start; i <= end; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
