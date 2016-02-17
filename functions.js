function somar(valor1, valor2){
  console.log("Quantidade de argumentos recebidos: " + arguments.length);
  console.log("Valor do ultimo argumento: " +arguments[2]);
  return valor1 + valor2;
}

console.log(somar(1,2,3))

//Limitando numero de args

// function somar1(valor1, valor2){
// 	if(arguments.length !== 2){
// 		throw new Error("Está funcção precisa de 2 valores para funcionar");

// 		return valor1 + valor2;
// 	}
// }

// somar1(1,2,3);

var somar3 = function(valor1,valor2){
	return valor1 + valor2;
}

var calcularSalario = function(salario, horaExtra, somar3){
	return somar3(salario, horaExtra);
}

console.log(calcularSalario(1220,120,somar3));