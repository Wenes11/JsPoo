/// Destructuring Objetic
let nome="João";
let nome2 ="Matheus";
let nome3="Sttefany";

function ImpremirNomes(...args){
    for(let i = 0; i<args.length; i++){
        console.log(args[i]);
    }
}
ImpremirNomes(nome,nome2,nome3);


/// Estrutura JSON
let carro = {

    "Placa" : "308ON",
    "Marca" : "BMW",
    "Pneus" : 4,
    "Portas" : 4,
    "donos" : "[Jose, Mario, Marcos]"

}
console.log("Placa do seu carro: " + carro.Placa);
console.log("Marca do carro: " + carro.Marca);
console.log("Todos pneus em ordem: " + carro.Pneus);
console.log("Portas: " + carro.Portas);
console.log(" Donos dos carros: " +carro.donos);

let conversion = JSON.stringify(carro); // converter o objeto em string
console.log(conversion);

/// orientação a objetos metodos exemplo
let gato = {
     raca:'',
     miar : function(){
        console.log("Miau Miau")
     },
     setRaca: function(raca){
        this.raca=raca;
     },
     getRaca: function(){
        return "Raça do gato é: " + this.raca;
     }

    }
  console.log(gato.raca);
  gato.setRaca('Persa');
  console.log(gato.raca);
  gato.getRaca();

  //// prototype ele herda um objeto de outro objeto criando um novo objeto
  const car ={
    rodas:4,
    marca:"Nissan"
  };
  console.log(Object.getPrototypeOf(car));

  console.log(car.hasOwnProperty('rodas'));
  console.log(car.hasOwnProperty('marca'));

  const novoCar= Object.create(car);
  console.log(novoCar.rodas);
  console.log(novoCar.marca);
  console.log(Object.getPrototypeOf(novoCar) === car);  // verificar se realmente é prototype

