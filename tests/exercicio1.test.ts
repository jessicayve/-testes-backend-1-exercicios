
import {exercicio1} from "../src/exercicio1"

describe("exercicio1", ()=>{
    test("deve retornar o numero 50 como number",()=>{
        const result = exercicio1("50")
        expect(result).toBe(50)
    })
})


