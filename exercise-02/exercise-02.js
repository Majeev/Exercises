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
  try{
  let reg = /[\W_]/g;
  let lowerCase = value.toLowerCase().replace(reg, '')
  let vArray = lowerCase.toLowerCase().split("").reverse().join("");
 
  const check = (lowerCase === vArray) ? true : false;
  return check;
 }
 catch(e){

    throw new Error("An argument \"value\" is not a string.")
 }
}


module.exports = isPalindrome