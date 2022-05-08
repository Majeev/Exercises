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
    // let unique = [...new Set(iterable)];

    // if(typeof iterable === 'string'){
    //     return unique.join('');
    // }
    //     return unique;

    let accumulator = iterable.slice(0,0);

    for(let value of iterable) {
        let hasDuplicate = false;
        for(let value2 of accumulator) {
            if(value === value2) {
                hasDuplicate = true;
            } 
        } 
        if(!hasDuplicate) {
            accumulator = accumulator.concat(value)
        } 
    }
    return accumulator
}


module.exports = distinct