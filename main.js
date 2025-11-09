class Device {
    constructor(tipo, fabricante) {
        if (this.constructor === Device) {
            throw new Error("A classe Device é abstrata e não pode ser instanciada diretamente.");
        }
        this.tipo = tipo;
        this.fabricante = fabricante;
    }

    mostrarInfo() {
        return `Tipo: ${this.tipo} | Fabricante: ${this.fabricante}`;
    }
}

class Celular extends Device {
    constructor(tipo, fabricante, modelo, preco) {
        super(tipo, fabricante);
        this.modelo = modelo;
        this.preco = preco;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()} | Modelo: ${this.modelo} | Preço: R$${this.preco}`;
    }
}

class Computador extends Device {
    constructor(tipo, fabricante, modelo, preco) {
        super(tipo, fabricante);
        this.modelo = modelo;
        this.preco = preco;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()} | Modelo: ${this.modelo} | Preço: R$${this.preco}`;
    }
}

class Tablet extends Device {
    constructor(tipo, fabricante, modelo, preco) {
        super(tipo, fabricante);
        this.modelo = modelo;
        this.preco = preco;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()} | Modelo: ${this.modelo} | Preço: R$${this.preco}`;
    }
}

const celular1 = new Celular("Smartphone", "Samsung", "A19", 2299.90);
const computador1 = new Computador("Desktop", "Lenovo", "3i", 8349.90);
const tablet1 = new Tablet("Tablet", "Apple", "10th generation", 8665.90);

console.log(celular1.mostrarInfo());
console.log(computador1.mostrarInfo());
console.log(tablet1.mostrarInfo());
