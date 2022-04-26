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
    const str = [...new Set(iterable)]
    if (typeof iterable === 'object' && iterable.length === 0 ) 
    {
        return [];
    }
    else if (typeof iterable === 'object' && iterable.length !== 0) {return str}

    else if (typeof iterable === 'string' && iterable.length === 0) {return iterable}
    
    else if (typeof iterable === 'string' && iterable.length !== 0){
        return str.join('')
        return [...new Set(iterable)].join('');
    }

}


module.exports = distinct