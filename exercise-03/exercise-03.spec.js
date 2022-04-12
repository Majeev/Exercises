const distinct = require("./exercise-03")


describe("function distinct(iterable)", () => {
    context("iterable is an array", () => {
        context("iterable is empty", () => {
            const iterable = []

            it("should return an empty iterable", () => {
                const expected = []

                expect(distinct(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable = [ 0, 1, 1, 2, 3, 5, 8, 13 ]

            it("should return an iterable without any duplicates", () => {
                const expected = [ 0, 1, 2, 3, 5, 8, 13 ]

                expect(distinct(iterable))
                    .toEqual(expected)
            })
        })
    })

    context("iterable is a string", () => {
        context("iterable is empty", () => {
            const iterable = ""

            it("should return an empty iterable", () => {
                const expected = ""

                expect(distinct(iterable))
                    .toEqual(expected)
            })
        })

        context("iterable is not empty", () => {
            const iterable = "011235813"

            it("should return an iterable without any duplicates", () => {
                const expected = "012358"

                expect(distinct(iterable))
                    .toEqual(expected)
            })
        })
    })
})