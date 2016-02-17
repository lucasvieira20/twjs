function somar(valor1, valor2){
	return valor1 + valor2;
}

function somaSemReturn(valor1, valor2){
	var soma = valor1 + valor2;
}

console.log(somaSemReturn(1,2));
console.log(somar(1,2));


function Carro(){
	this.nome = 'Gol';
	this.ano = '2015';
	this.cor = 'Preto';
	this.andar = function(){
		//Lógica pra Andar o carro
	}
}

var carro = new Carro();
var carro2 = new Carro();
var carro3 = new Carro();
var carro4 = new Carro();
var carro5 = new Carro();

console.log(carro);
console.log(carro2);
console.log(carro3);
console.log(carro4);
console.log(carro5);