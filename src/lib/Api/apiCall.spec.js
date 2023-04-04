import { products } from './_mock_/apiCall.mock'
import { describe, expect, it } from 'vitest'

describe("Test de la llamada a la API ", () => {

    it("Devuelve un array con 20 productos", async () => {
        expect(Array.isArray(products)).to.be.true
        expect(products.length).toBe(20)
    })
})