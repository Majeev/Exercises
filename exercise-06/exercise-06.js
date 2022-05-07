/**
 * Returns an iterable of the same type as the one given
 * with only as much elements taken from the left as long `predicate` function returns `true` for each value.
 *
 * @param {*[] | string} iterable - is an iterable to be iterated over
 * @param {function} predicate - is a function dictating to either keep taking or stop
 * @returns {*[] | string} an iterable of the same type as the one given
 *
 * @example
 * ```
 * takeWhile([ 0, 1, 1, 2, 3, 5, 8 ], (x) => x < 3 )     // -> [ 0, 1, 1, 2 ]
 * ```
 */
const takeWhile = (iterable, predicate) => {
    throw new Error()
}


module.exports = takeWhile