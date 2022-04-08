const fizzbuzz = require("./exercise-01")

describe("function fizzbuzz()", () => {
    it("should return a number", () => {
        expect(fizzbuzz(1))
            .toBe(1)
        expect(fizzbuzz(4))
            .toBe(4)
        expect(fizzbuzz(7))
            .toBe(7)
    })

    it("should return a \"Fizz\"", () => {
        expect(fizzbuzz(3))
            .toBe("Fizz")
        expect(fizzbuzz(6))
            .toBe("Fizz")
        expect(fizzbuzz(9))
            .toBe("Fizz")
    })

    it("should return a \"Buzz\"", () => {
        expect(fizzbuzz(5))
            .toBe("Buzz")
        expect(fizzbuzz(10))
            .toBe("Buzz")
        expect(fizzbuzz(20))
            .toBe("Buzz")
    })

    it("should return a \"Buzz\"", () => {
        expect(fizzbuzz(15))
            .toBe("FizzBuzz")
        expect(fizzbuzz(30))
            .toBe("FizzBuzz")
        expect(fizzbuzz(45))
            .toBe("FizzBuzz")
    })

    it("should return a valid output for an input which is parsable to number", () => {
        expect(fizzbuzz("7"))
            .toBe(7)
        expect(fizzbuzz("9"))
            .toBe("Fizz")
        expect(fizzbuzz("20"))
            .toBe("Buzz")
        expect(fizzbuzz("45"))
            .toBe("FizzBuzz")
    })

    it("should throw Error for an input which is not parsable to number", () => {
<<<<<<< HEAD
        // expect(fizzbuzz(null))
        //     .toThrow(new Error())
            expect(fizzbuzz(undefined))
=======
        expect(() => fizzbuzz(null))
            .toThrow(new Error())
        expect(() => fizzbuzz(undefined))
            .toThrow(new Error())
        expect(() => fizzbuzz(Infinity))
>>>>>>> 92c7991f20d5682c1bfc080541ff470347fc72a4
            .toThrow(new Error())
        // expect(fizzbuzz(Infinity))
        //     .toThrow(new Error())
    })
})