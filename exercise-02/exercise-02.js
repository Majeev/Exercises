/**
 * Returns either `true` when a given string is a palindrome or `false` when it is not.
 * @link https://en.wikipedia.org/wiki/Palindrome
 *
 * @param {string} value
 * @returns {boolean}
 * @throws {Error}
 *
 * @example
 * ```
 *  isPalindrome("civic")    // -> true
 *  isPalindrome("honda")    // -> false
 *
 *  isPalindrome("Was it a car or a cat I saw?")    // -> true
 *  isPalindrome("A picture is worth 1000 words.")  // -> false
 * ```
 */
const isPalindrome = (value) => {
    try {
        value = value.toLowerCase().replace( /[\W_]/g, '')
        let reversedValue = value.split('').reverse().join('');
        return (value===reversedValue);

    }catch {
        throw new Error("An argument \"value\" is not a string.")
    }
}


module.exports = isPalindrome