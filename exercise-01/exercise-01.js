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
    if(parseInt(value) % 15 == 0){
        return "FizzBuzz"
    }
    else if(parseInt(value) % 5 == 0 ){
        return "Buzz"
    }
    else if(parseInt(value) % 3 == 0){
        return "Fizz"
    }
    else if(value === null){
        throw new Error("it's a null");
    }
    else if (value === undefined){
        throw new Error("it's an undefined");
    }
    else if(value === Infinity){
        throw new Error("it's not a number but still somewhat a number");
    }
    else if(JSON.stringify(value) === '{}'){
        throw new Error("it's an object");
    }
   

    else{
        return parseInt(value);
    
    }
   
    
}
//throw new Error()

module.exports = fizzbuzz