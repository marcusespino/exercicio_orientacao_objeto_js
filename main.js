function Device(tipo, fabricante){
    this.tipo = tipo;
    this.fabricante = fabricante;
}

function Celular(tipo, fabricante, modelo, preco){
    Device.call(this, tipo, fabricante);
    this.modelo = modelo;
    this.preco = preco;
}

function Computador(tipo, fabricante, modelo, preco){
    Device.call(this, tipo, fabricante);
    this.modelo = modelo;
    this.preco = preco;
}

function Tablet(tipo, fabricante, modelo, preco){
    Device.call(this, tipo, fabricante);
    this.modelo = modelo;
    this.preco = preco;
}

const celular1 = new Celular("Smartphone", "Samsung", "A19", 2299.90);
const computador1 = new Computador("Desktop", "Lenovo", "3i", 8349.90);
const tablet1 = new Tablet("iPad", "Apple", "10th generation", 8665,90);

console.log(celular1);
console.log(computador1);
console.log(tablet1);