/**
 * Returns an iterable of the same type as the one given without given values.
 *
 * @param {*[] | string} iterable - is an iterable to be iterated over
 * @param {*[]} values - are values to be removed from an iterable
 * @returns {*[] | string} an iterable of the same type as the one given
 *
 * @example
 * ```
 * without([ 0, 1, 1, 2, 3, 5, 8 ], [ 1, 3 ] )     // -> [ 0, 2, 5, 8 ]
 * ```
 */
const without = (iterable, values) => {
   let withoutGiven = iterable.slice(0,0);

   for(let value of iterable) {
       let givenOccurs = false;
       for(let given of values) {
           if(value === given) {
                givenOccurs = true;
           }
        }
            
        if(givenOccurs === false) {
            withoutGiven = withoutGiven.concat(value);
       }
   }
   return withoutGiven;
}


module.exports = without