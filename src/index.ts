import { Carro } from "./classes/carro.js"
import { Conta } from "./classes/conta.js"

const user = new Conta(12345, "Jorge", 10)


const hilux = new Carro("Hilux", "Toyota", 2019, "Branca", 20000)

console.log(user.saldo)

