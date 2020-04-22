/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    const n = s.trim();
    return /^[+-]?([0-9]+|[0-9]+\.[0-9]*|[0-9]*\.[0-9]+)(e[+-]?[0-9]+)?$/.test(n);
};