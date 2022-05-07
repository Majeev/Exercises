/**
 * Returns a duplicated iterable of the same type as the one given.
 *
 * @param {*[] | string} iterable - is an iterable to be iterated over
 * @returns {*[] | string} an iterable of the same type as the one given
 *
 * @example
 * ```
 * distinct([ 0, 1, 1, 2, 3, 5, 8 ])     // -> [ 0, 1, 2, 3, 5, 8 ]
 * ```
 */
const distinct = (iterable) => {
    iterable.split('');
   return [...new Set(iterable)]
    // throw new Error()
}


module.exports = distinct