"use strict"
/// como criar um classe usando um function e usando Object.create, usando um construtor para criar um classe


function criarCarro(marca, cor,placa){
    let carro = Object.create({});
 // o carro ele ta funcionado um um this, como ele é um object ele cria novos atributos/variaveis
    carro.cor=cor;
    carro.marca=marca;
    carro.placa=placa;
    return carro;
}
let skiline= criarCarro("Nissa","Preto","FVLW09");
console.log(skiline);

// criando classe com new, um pouco mais simples que usar o Object

function Animal(animal) {
    this.animal = animal;
}

Animal.prototype.galopar = function(){
    console.log("Pocotó pocotó!");
};

// Criando uma instância de Animal
let cavalo = new Animal("Cavalo");

// Chamando o método galopar na instância
cavalo.galopar();
////// classes com construtor, melhor tipo de classe até um momento, bem facil sua estrutura, mais eficiente e mais entendivel.