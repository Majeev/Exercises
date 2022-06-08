const choose = require("./exercise-07")


describe("function choose(choices)", () => {
    it("should return a value from `choices` argument chosen at random", () => {
        const petto = choose("doggo", "catto", "ratto")
        expect(petto())
          .toHaveLength(5)
    })
})