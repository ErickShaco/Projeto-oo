export class Retangulo{
    constructor(
        private _ladoA: number,
        private _ladoB: number
    ){}
    
    public get tamanhoDoLadoA(){
        return this._ladoA
    }
    public get tamanhoDoLadoB(){
        return this._ladoB
    }

    public mudarArea(areaA: number,areaB: number): void {
        this._ladoA = areaA
        this._ladoB = areaB
    }

    public calcularPerimetro(areaA: number, areaB: number){
        let perimetro = 2 * (areaA + areaB)
        return perimetro
    }


    public calcularArea(areaA: number, areaB: number){
     let calculo = areaA * areaB
     return calculo
    }
}