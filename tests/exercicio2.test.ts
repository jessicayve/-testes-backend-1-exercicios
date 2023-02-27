import {exercicio2} from "../src/exercicio2"

describe("exercicio2", ()=>{
    test("deve retornar a data ao contrário",()=>{
        const result = exercicio2("2023/09/26")
        expect(result).toBe("26/09/2023")
    })
})


