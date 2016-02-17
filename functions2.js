//Exemplo usando chamada de função
function imprimirMensagem(msg){
	console.log(msg);
}

imprimirMensagem('Está é uma mensagem de teste');


//Exemplo usando expressão de função
var imprimirMensagem = function(msg){
	console.log(msg);
}

imprimirMensagem("Mensagem de Texte");

var contas = [
	{
		nome : 'Ailton',
		conta: 123434,
		valor: 1000.00
	}
]

var sacar = function(contas, numero, valor){
	for(index in contas){
		var conta = contas[index];
		if(conta.conta == numero){
			if(valor <= conta.valor){
				console.log("Você pode sacar este valor");
			} else{
				console.log("Você não pode sacar este valor. Sua conta tem o valor de " + conta.valor);
			}
		} else{
			console.log("O numero informado não corresponde a nehuma conta");
		}
	}
}

sacar(contas, 123434, 1500);