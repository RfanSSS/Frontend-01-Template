/**
 * @param {string} s
 * @return {boolean}
 */
var isString = function(s) {
    return /("([^\\"]|\\.)*"|'([^\\']|\\.)*')/.test(s);
};