export class Carro {
    constructor(
        public modelo:string,
        public _fabricante: string,
        public ano: number, 
        public cor: string,
        public preco: number) {}

        get fabricante() {
            return this._fabricante.toUpperCase()
        }
    
}
