import {exercicio3} from "../src/exercicio3"

describe("exercicio3", ()=>{
    test("Deve encontrar Astrodev",()=>{
        const result = exercicio3
        expect(result).toContainEqual({ name: "Astrodev" })
    })
})