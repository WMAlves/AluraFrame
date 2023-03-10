class Negociacao {
    constructor(data, quantidade, valor) {

        this._data= data;
        this._quantidade=quantidade;
        this._valor= valor;
        Object.freeze(this);
    }
    //<<<CRIAÇÃO DE METODO, CALCULA VOLUME>>>  Metodos é como é chamado uma função dentro de uma classe, lembre-se dessa nomenclatura. 
    CalcVolume(){
        return this._quantidade * this._valor;
    }

    //metodo para acessar variáveis da classe. 
    get data(){
        return new Date(this._data.getTime());
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
    get volume(){
        return this.CalcVolume();
    }
}