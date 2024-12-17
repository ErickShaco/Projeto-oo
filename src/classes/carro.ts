export class Carro {
    constructor(
        private _modelo:string,
        private _fabricante: string,
        private _ano: number, 
        private _cor: string,
        private _preco: number) {
            this.modelo = _modelo
            this.fabricante = _fabricante
            this.ano = _ano
            this.cor = _cor
            this.preco = _preco
        }
        public get modelo() {
            return this._modelo.toUpperCase()
        }

        public get fabricante() {
            return this._fabricante.toUpperCase()
        }

        public get ano() {
            return this._ano
        }

        public get cor() {
            return this._cor.toUpperCase()
        }
        public get preco() {
            return this._preco
        }
        
        public set modelo(modelo : string){
            this._modelo = modelo.trim().toLocaleLowerCase()
        }

        public set fabricante(fabricante: string){
           const tamanho = fabricante.trim().length
           if(tamanho < 3){
            throw new Error("Fabricante Invalido")
           }
           this._fabricante = fabricante.trim().toLowerCase()
        }

        public set ano(ano: number){
            if(ano < 1950 || ano > 2050){
                throw new Error("Ano Invalido")
            }
            this._ano = ano
        }

        public set cor(cor: string){
            this._cor = cor.trim().toLocaleLowerCase()
        }
        
        public set preco(preco: number) {
            if(preco <= 0){
                throw new Error("Preço Invalido")
            }
            this._preco = preco
        }
    
}
