const isPalindrome = require("./exercise-02")


describe("function isPalindrome(value)", () => {
    it("should return true for a palindrome string", () => {
        expect(isPalindrome("kayak"))
            .toBe(true)
    })

    it("should return false for a non palindrome string", () => {
        expect(isPalindrome("kitten"))
            .toBe(false)
    })

    it("should not be case-sensitive", () => {
        expect(isPalindrome("Hannah"))
            .toBe(true)
        expect(isPalindrome("Annie"))
            .toBe(false)
    })

    it("should ignore any punctuation signs", () => {
        expect(isPalindrome("wow!"))
            .toBe(true)
        expect(isPalindrome("yes?"))
            .toBe(false)
    })

    it("should be able to process sentences", () => {
        expect(isPalindrome("A man, a plan, a canal – Panama."))
            .toBe(true)
        expect(isPalindrome("A penny saved is a penny earned."))
            .toBe(false)
    })

    it("should throw an exception whenever a given input is not a string", () => {
        const exception = new Error("An argument \"value\" is not a string.")

        expect(() => isPalindrome())
            .toThrow(exception)
        expect(() => isPalindrome(null))
            .toThrow(exception)
        expect(() => isPalindrome({}))
            .toThrow(exception)
    })
})