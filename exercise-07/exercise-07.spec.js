const choose = require("./exercise-07")


describe("function choose(choices)", () => {
    it("should return a value from `choices` argument chosen at random", () => {
        const petto = choose("doggo", "catto", "ratto", "snekk", "goose")

        expect(petto())
          .toHaveLength(5)
        expect(["doggo", "catto", "ratto", "snekk", "goose"].includes(petto()))
          .toBe(true)

        // This can fail occasionally, just re-run it
        const a = petto(),
          b = petto()
        expect(a)
          .not.toEqual(b)
    })
})