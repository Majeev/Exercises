/**
 * Returns an iterable of the same type as the one given
 * with only as much elements taken from the left as specified in `count` parameter.
 *
 * @param {*[] | string} iterable - is an iterable to be iterated over
 * @param {number} count - is a number of elements to take
 * @returns {*[] | string} an iterable of the same type as the one given
 *
 * @example
 * ```
 * take([ 0, 1, 1, 2, 3, 5, 8 ], 4 )     // -> [ 0, 1, 1, 2 ]
 * ```
 */
const take = (iterable, count) => {
    return iterable.slice(0,count);
    //  let accu = iterable.slice(0,0)
    //  for(let i = 0; i<count; i++) {
    //      if(iterable.length===0 ){
    //          return accu
    //      }else {
    //      accu = accu.concat(iterable[i])
    //      }
    //  }
    //  return accu;
}


module.exports = take