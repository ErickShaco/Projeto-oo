export class Bola{
    constructor(
        private _cor: string,
        private _circunferencia: number, 
        private _material: string
    ){}

    public get cor(){
        return this._cor
    }

    public get circunferencia(){
        return this._circunferencia
    }

    public get material(){
        return this._material
    }

    public mostraCor(cor: string): void {
        this._cor = cor
    }

    public trocaCor(cor: string): void {
        this._cor = cor
    }

}