/**
 * Returns number from 1 to 100.
 * When multiples of 3 returns "Fizz" instead of the number.
 * For multiples of 5 returns "Buzz".
 * For numbers which are multiples of both three and five returns "FizzBuzz"
 *
 * @param {number|string} value
 * @returns {number|"Fizz"|"Buzz"|"FizzBuzz"}
 * @throws {Error}
 */
const fizzbuzz = (value) => {
    
    if(value % 15 == 0){
        return "FizzBuzz"
    }
    else if(value % 5 == 0 ){
        return "Buzz"
    }
    else if(value % 3 == 0){
        return "Fizz"
    }
    else if (value === false){
        throw new Error()
    }
    else{
        return parseInt(value);
    }

   
    
    
    
}
//throw new Error()

module.exports = fizzbuzz