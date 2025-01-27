import { Bola } from "./classes/bola.js"
import { Carro } from "./classes/carro.js"
import { Conta } from "./classes/conta.js"
import { Quadrado } from "./classes/quadrado.js"
import { Retangulo } from "./classes/retangulo.js"
import { ContaCorrente } from "./classes/conta-corrente.js"


const contaErick = new ContaCorrente(10,"Erick", 5, 10000)

contaErick.sacar(5)

console.log(contaErick.saldo)
