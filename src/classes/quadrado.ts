export class Quadrado{
    constructor(
        private  _tamanho_do_lado: number
    )
    {}
    
    public get tamanhoDoLado(){
        return this._tamanho_do_lado
    }

    public mudarArea(area: number): void {
        this._tamanho_do_lado = area
    }


    public calcularArea(){
     let calculo = this.tamanhoDoLado * this.tamanhoDoLado
     return calculo
    }
}