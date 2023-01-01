import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Prueba en 02 template string', () => { 
    test('getSaludo debe de retornar "hola kervis"', () => { 
        const name = "kervis"
        const msj = getSaludo(name);
        //  expect(msj).toBe(`hola ${name}`);
     })

 }) 