const without = require("./exercise-04")


describe("function without(iterable, values)", () => {
    context("iterable is an array", () => {
        context("iterable is empty", () => {
            const iterable = []

            it("should return an empty iterable", () => {
                const expected = []

                expect(without(iterable, [ 5, 1 ]))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable = [ 0, 1, 1, 2, 3, 5, 8, 13 ]

            it("should return an iterable without any given values", () => {
                const expected = [ 0, 2, 3, 8, 13 ]

                expect(without(iterable, [ 5, 1 ]))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is a string", () => {
        context("iterable is empty", () => {
            const iterable = ""

            it("should return an empty iterable", () => {
                const expected = ""

                expect(without(iterable, [ "5", "1" ]))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable = "011235813"

            it("should return an iterable without any given values", () => {
                const expected = "02383"

                expect(without(iterable, [ "5", "1" ]))
                    .toEqual(expected)
            })
        })
    })
})