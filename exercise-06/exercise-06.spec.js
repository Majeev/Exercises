const takeWhile = require("./exercise-06")


describe("function take(iterable, count)", () => {
    context("iterable is an array", () => {
        context("iterable is empty", () => {
            const iterable = []

            it("should return an empty array", () => {
                expect(takeWhile(iterable, (x) => x < 3))
                    .toEqual([])
            })
        })

        context("iterable is not empty", () => {
            const iterable = [ 0, 1, 1, 2, 3, 5, 8, 13 ]

            it("should return a array with as much elements taken as specified", () => {
                expect(takeWhile(iterable, (x) => x < 3))
                    .toEqual([ 0, 1, 1, 2 ])
                expect(takeWhile(iterable, (x) => x < 10))
                    .toEqual([ 0, 1, 1, 2, 3, 5, 8 ])
            })
        })
    })

    context("iterable is a string", () => {
        context("iterable is empty", () => {
            const iterable = ""

            it("should return an empty string", () => {
                expect(takeWhile(iterable, (x) => x < 3))
                    .toEqual("")
            })
        })

        context("iterable is not empty", () => {
            const iterable = "011235813"

            it("should return a string with as much elements taken as specified", () => {
                expect(takeWhile(iterable, (x) => x < 3))
                    .toEqual("0112")
                expect(takeWhile(iterable, (x) => x < 10))
                    .toEqual("0112358")
            })
        })
    })
})